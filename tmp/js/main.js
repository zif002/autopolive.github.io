/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var _nav = __webpack_require__(3);

	var _nav2 = _interopRequireDefault(_nav);

	var _swiper = __webpack_require__(4);

	var _swiper2 = _interopRequireDefault(_swiper);

	__webpack_require__(5);

	__webpack_require__(7);

	__webpack_require__(13);

	__webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	$(function () {
		//nav
		(0, _nav2.default)();
		//search
		$('.search').hover(function () {
			$(this).find('input').stop().animate({
				width: 300
			});
		}, function () {
			if ($('.search').find('input').is(':focus')) {
				return;
			} else {
				setTimeout(function () {
					$('.search').find('input').stop().animate({
						width: 0
					}, function () {
						$(this).val('');
					});
				}, 1500);
			}
		});
		//swiper slider

		// $('.slider').css({
		// 	'margin-top': $('.nav-fixed').outerHeight()
		// });
		var swiper = new _swiper2.default('.slider', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			autoplay: {
				delay: 5000
			},
			speed: 1500,
			effect: 'fade',
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			coverflowEffect: {
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true
			}
		});
		});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.5.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2020-05-04T22:49Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var flat = arr.flat ? function( array ) {
		return arr.flat.call( array );
	} : function( array ) {
		return arr.concat.apply( [], array );
	};


	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};

	var isFunction = function isFunction( obj ) {

	      // Support: Chrome <=57, Firefox <=52
	      // In some browsers, typeof returns "function" for HTML <object> elements
	      // (i.e., `typeof document.createElement( "object" ) === "function"`).
	      // We don't want to classify *any* DOM node as a function.
	      return typeof obj === "function" && typeof obj.nodeType !== "number";
	  };


	var isWindow = function isWindow( obj ) {
			return obj != null && obj === obj.window;
		};


	var document = window.document;



		var preservedScriptAttributes = {
			type: true,
			src: true,
			nonce: true,
			noModule: true
		};

		function DOMEval( code, node, doc ) {
			doc = doc || document;

			var i, val,
				script = doc.createElement( "script" );

			script.text = code;
			if ( node ) {
				for ( i in preservedScriptAttributes ) {

					// Support: Firefox 64+, Edge 18+
					// Some browsers don't support the "nonce" property on scripts.
					// On the other hand, just using `getAttribute` is not enough as
					// the `nonce` attribute is reset to an empty string whenever it
					// becomes browsing-context connected.
					// See https://github.com/whatwg/html/issues/2369
					// See https://html.spec.whatwg.org/#nonce-attributes
					// The `node.getAttribute` check was added for the sake of
					// `jQuery.globalEval` so that it can fake a nonce-containing node
					// via an object.
					val = node[ i ] || node.getAttribute && node.getAttribute( i );
					if ( val ) {
						script.setAttribute( i, val );
					}
				}
			}
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}


	function toType( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.5.1",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		even: function() {
			return this.pushStack( jQuery.grep( this, function( _elem, i ) {
				return ( i + 1 ) % 2;
			} ) );
		},

		odd: function() {
			return this.pushStack( jQuery.grep( this, function( _elem, i ) {
				return i % 2;
			} ) );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					copy = options[ name ];

					// Prevent Object.prototype pollution
					// Prevent never-ending loop
					if ( name === "__proto__" || target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = Array.isArray( copy ) ) ) ) {
						src = target[ name ];

						// Ensure proper type for the source value
						if ( copyIsArray && !Array.isArray( src ) ) {
							clone = [];
						} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
							clone = {};
						} else {
							clone = src;
						}
						copyIsArray = false;

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		// Evaluates a script in a provided context; falls back to the global one
		// if not specified.
		globalEval: function( code, options, doc ) {
			DOMEval( code, { nonce: options && options.nonce }, doc );
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return flat( ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = toType( obj );

		if ( isFunction( obj ) || isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.5
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://js.foundation/
	 *
	 * Date: 2020-03-14
	 */
	( function( window ) {
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		nonnativeSelectorCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ( {} ).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		pushNative = arr.push,
		push = arr.push,
		slice = arr.slice,

		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[ i ] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
			"ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
		identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
			"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +

			// "Attribute values must be CSS identifiers [capture 5]
			// or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
			whitespace + "*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +

			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
			whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
			"*" ),
		rdescend = new RegExp( whitespace + "|>" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
				whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
				whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace +
				"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
				"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rhtml = /HTML$/i,
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
		funescape = function( escape, nonHex ) {
			var high = "0x" + escape.slice( 1 ) - 0x10000;

			return nonHex ?

				// Strip the backslash prefix from a non-hex escape sequence
				nonHex :

				// Replace a hexadecimal escape sequence with the encoded Unicode code point
				// Support: IE <=11+
				// For values outside the Basic Multilingual Plane (BMP), manually construct a
				// surrogate pair
				high < 0 ?
					String.fromCharCode( high + 0x10000 ) :
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" +
					ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		inDisabledFieldset = addCombinator(
			function( elem ) {
				return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			( arr = slice.call( preferredDoc.childNodes ) ),
			preferredDoc.childNodes
		);

		// Support: Android<4.0
		// Detect silently failing push.apply
		// eslint-disable-next-line no-unused-expressions
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				pushNative.apply( target, slice.call( els ) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;

				// Can't trust NodeList.length
				while ( ( target[ j++ ] = els[ i++ ] ) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
			setDocument( context );
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

					// ID selector
					if ( ( m = match[ 1 ] ) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( ( elem = context.getElementById( m ) ) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && ( elem = newContext.getElementById( m ) ) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[ 2 ] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!nonnativeSelectorCache[ selector + " " ] &&
					( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

					// Support: IE 8 only
					// Exclude object elements
					( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

					newSelector = selector;
					newContext = context;

					// qSA considers elements outside a scoping root when evaluating child or
					// descendant combinators, which is not what we want.
					// In such cases, we work around the behavior by prefixing every selector in the
					// list with an ID selector referencing the scope context.
					// The technique has to be used as well when a leading combinator is used
					// as such selectors are not recognized by querySelectorAll.
					// Thanks to Andrew Dupont for this technique.
					if ( nodeType === 1 &&
						( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;

						// We can use :scope instead of the ID hack if the browser
						// supports it & if we're not changing the context.
						if ( newContext !== context || !support.scope ) {

							// Capture the context ID, setting it first if necessary
							if ( ( nid = context.getAttribute( "id" ) ) ) {
								nid = nid.replace( rcssescape, fcssescape );
							} else {
								context.setAttribute( "id", ( nid = expando ) );
							}
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
								toSelector( groups[ i ] );
						}
						newSelector = groups.join( "," );
					}

					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
						nonnativeSelectorCache( selector, true );
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {

			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {

				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return ( cache[ key + " " ] = value );
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement( "fieldset" );

		try {
			return !!fn( el );
		} catch ( e ) {
			return false;
		} finally {

			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}

			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split( "|" ),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[ i ] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( ( cur = cur.nextSibling ) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return ( name === "input" || name === "button" ) && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction( function( argument ) {
			argument = +argument;
			return markFunction( function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
						seed[ j ] = !( matches[ j ] = seed[ j ] );
					}
				}
			} );
		} );
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		var namespace = elem.namespaceURI,
			docElem = ( elem.ownerDocument || elem ).documentElement;

		// Support: IE <=8
		// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
		// https://bugs.jquery.com/ticket/4833
		return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9 - 11+, Edge 12 - 18+
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		if ( preferredDoc != document &&
			( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
		// Safari 4 - 5 only, Opera <=11.6 - 12.x only
		// IE/Edge & older browsers don't support the :scope pseudo-class.
		// Support: Safari 6.0 only
		// Safari 6.0 supports :scope but it's an alias of :root there.
		support.scope = assert( function( el ) {
			docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
			return typeof el.querySelectorAll !== "undefined" &&
				!el.querySelectorAll( ":scope fieldset div" ).length;
		} );

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert( function( el ) {
			el.className = "i";
			return !el.getAttribute( "className" );
		} );

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert( function( el ) {
			el.appendChild( document.createComment( "" ) );
			return !el.getElementsByTagName( "*" ).length;
		} );

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert( function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		} );

		// ID filter and find
		if ( support.getById ) {
			Expr.filter[ "ID" ] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute( "id" ) === attrId;
				};
			};
			Expr.find[ "ID" ] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter[ "ID" ] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode( "id" );
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find[ "ID" ] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( ( elem = elems[ i++ ] ) ) {
							node = elem.getAttributeNode( "id" );
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find[ "TAG" ] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,

					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( ( elem = results[ i++ ] ) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert( function( el ) {

				var input;

				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll( "[selected]" ).length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push( "~=" );
				}

				// Support: IE 11+, Edge 15 - 18+
				// IE 11/Edge don't find elements on a `[name='']` query in some cases.
				// Adding a temporary attribute to the document before the selection works
				// around the issue.
				// Interestingly, IE 10 & older don't seem to have the issue.
				input = document.createElement( "input" );
				input.setAttribute( "name", "" );
				el.appendChild( input );
				if ( !el.querySelectorAll( "[name='']" ).length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
						whitespace + "*(?:''|\"\")" );
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll( ":checked" ).length ) {
					rbuggyQSA.push( ":checked" );
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push( ".#.+[+~]" );
				}

				// Support: Firefox <=3.6 - 5 only
				// Old Firefox doesn't throw on a badly-escaped identifier.
				el.querySelectorAll( "\\\f" );
				rbuggyQSA.push( "[\\r\\n\\f]" );
			} );

			assert( function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement( "input" );
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll( "[name=d]" ).length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: Opera 10 - 11 only
				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll( "*,:x" );
				rbuggyQSA.push( ",.*:" );
			} );
		}

		if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector ) ) ) ) {

			assert( function( el ) {

				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			} );
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				) );
			} :
			function( a, b ) {
				if ( b ) {
					while ( ( b = b.parentNode ) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

				// Choose the first element that is related to our preferred document
				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				if ( a == document || a.ownerDocument == preferredDoc &&
					contains( preferredDoc, a ) ) {
					return -1;
				}

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				if ( b == document || b.ownerDocument == preferredDoc &&
					contains( preferredDoc, b ) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {

			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				/* eslint-disable eqeqeq */
				return a == document ? -1 :
					b == document ? 1 :
					/* eslint-enable eqeqeq */
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( ( cur = cur.parentNode ) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( ( cur = cur.parentNode ) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[ i ] === bp[ i ] ) {
				i++;
			}

			return i ?

				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[ i ], bp[ i ] ) :

				// Otherwise nodes in our document sort first
				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				/* eslint-disable eqeqeq */
				ap[ i ] == preferredDoc ? -1 :
				bp[ i ] == preferredDoc ? 1 :
				/* eslint-enable eqeqeq */
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		setDocument( elem );

		if ( support.matchesSelector && documentIsHTML &&
			!nonnativeSelectorCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||

					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch ( e ) {
				nonnativeSelectorCache( expr, true );
			}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {

		// Set document vars if needed
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		if ( ( context.ownerDocument || context ) != document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {

		// Set document vars if needed
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		if ( ( elem.ownerDocument || elem ) != document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],

			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return ( sel + "" ).replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( ( elem = results[ i++ ] ) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {

			// If no nodeType, this is expected to be an array
			while ( ( node = elem[ i++ ] ) ) {

				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {

				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}

		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[ 1 ] = match[ 1 ].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
					match[ 5 ] || "" ).replace( runescape, funescape );

				if ( match[ 2 ] === "~=" ) {
					match[ 3 ] = " " + match[ 3 ] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {

				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[ 1 ] = match[ 1 ].toLowerCase();

				if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

					// nth-* requires argument
					if ( !match[ 3 ] ) {
						Sizzle.error( match[ 0 ] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[ 4 ] = +( match[ 4 ] ?
						match[ 5 ] + ( match[ 6 ] || 1 ) :
						2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
					match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

					// other types prohibit arguments
				} else if ( match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[ 6 ] && match[ 2 ];

				if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[ 3 ] ) {
					match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&

					// Get excess from tokenize (recursively)
					( excess = tokenize( unquoted, true ) ) &&

					// advance to the next closing parenthesis
					( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

					// excess is a negative index
					match[ 0 ] = match[ 0 ].slice( 0, excess );
					match[ 2 ] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() {
						return true;
					} :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					( pattern = new RegExp( "(^|" + whitespace +
						")" + className + "(" + whitespace + "|$)" ) ) && classCache(
							className, function( elem ) {
								return pattern.test(
									typeof elem.className === "string" && elem.className ||
									typeof elem.getAttribute !== "undefined" &&
										elem.getAttribute( "class" ) ||
									""
								);
					} );
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					/* eslint-disable max-len */

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
					/* eslint-enable max-len */

				};
			},

			"CHILD": function( type, what, _argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, _context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( ( node = node[ dir ] ) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}

									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( ( node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {

								// Use previously-cached element index if available
								if ( useCache ) {

									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || ( node[ expando ] = {} );

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										( outerCache[ node.uniqueID ] = {} );

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {

									// Use the same loop as above to seek `elem` from the start
									while ( ( node = ++nodeIndex && node && node[ dir ] ||
										( diff = nodeIndex = 0 ) || start.pop() ) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] ||
													( node[ expando ] = {} );

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													( outerCache[ node.uniqueID ] = {} );

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {

				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction( function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[ i ] );
								seed[ idx ] = !( matches[ idx ] = matched[ i ] );
							}
						} ) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {

			// Potentially complex pseudos
			"not": markFunction( function( selector ) {

				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction( function( seed, matches, _context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( ( elem = unmatched[ i ] ) ) {
								seed[ i ] = !( matches[ i ] = elem );
							}
						}
					} ) :
					function( elem, _context, xml ) {
						input[ 0 ] = elem;
						matcher( input, null, xml, results );

						// Don't keep the element (issue #299)
						input[ 0 ] = null;
						return !results.pop();
					};
			} ),

			"has": markFunction( function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			} ),

			"contains": markFunction( function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
				};
			} ),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {

				// lang value must be a valid identifier
				if ( !ridentifier.test( lang || "" ) ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( ( elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
					return false;
				};
			} ),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement &&
					( !document.hasFocus || document.hasFocus() ) &&
					!!( elem.type || elem.href || ~elem.tabIndex );
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {

				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return ( nodeName === "input" && !!elem.checked ) ||
					( nodeName === "option" && !!elem.selected );
			},

			"selected": function( elem ) {

				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					// eslint-disable-next-line no-unused-expressions
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {

				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos[ "empty" ]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( ( attr = elem.getAttribute( "type" ) ) == null ||
						attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo( function() {
				return [ 0 ];
			} ),

			"last": createPositionalPseudo( function( _matchIndexes, length ) {
				return [ length - 1 ];
			} ),

			"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			} ),

			"even": createPositionalPseudo( function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			} ),

			"odd": createPositionalPseudo( function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			} ),

			"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
				var i = argument < 0 ?
					argument + length :
					argument > length ?
						length :
						argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			} ),

			"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			} )
		}
	};

	Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
				if ( match ) {

					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[ 0 ].length ) || soFar;
				}
				groups.push( ( tokens = [] ) );
			}

			matched = false;

			// Combinators
			if ( ( match = rcombinators.exec( soFar ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,

					// Cast descendant combinators to space
					type: match[ 0 ].replace( rtrim, " " )
				} );
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
					( match = preFilters[ type ]( match ) ) ) ) {
					matched = match.shift();
					tokens.push( {
						value: matched,
						type: type,
						matches: match
					} );
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :

				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[ i ].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?

			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( ( elem = elem[ dir ] ) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( ( elem = elem[ dir ] ) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || ( elem[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] ||
								( outerCache[ elem.uniqueID ] = {} );

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( ( oldCache = uniqueCache[ key ] ) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return ( newCache[ 2 ] = oldCache[ 2 ] );
							} else {

								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[ i ]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[ 0 ];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[ i ], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( ( elem = unmatched[ i ] ) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction( function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts(
					selector || "*",
					context.nodeType ? [ context ] : context,
					[]
				),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?

					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( ( elem = temp[ i ] ) ) {
						matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {

						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( ( elem = matcherOut[ i ] ) ) {

								// Restore matcherIn since elem is not yet a final match
								temp.push( ( matcherIn[ i ] = elem ) );
							}
						}
						postFinder( null, ( matcherOut = [] ), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) &&
							( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

							seed[ temp ] = !( results[ temp ] = elem );
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		} );
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[ 0 ].type ],
			implicitRelative = leadingRelative || Expr.relative[ " " ],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					( checkContext = context ).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );

				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
				matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
			} else {
				matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {

					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[ j ].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(

						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens
							.slice( 0, i - 1 )
							.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,

					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
					len = elems.length;

				if ( outermost ) {

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					outermostContext = context == document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;

						// Support: IE 11+, Edge 17 - 18+
						// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
						// two documents; shallow comparisons work.
						// eslint-disable-next-line eqeqeq
						if ( !context && elem.ownerDocument != document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( ( matcher = elementMatchers[ j++ ] ) ) {
							if ( matcher( elem, context || document, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {

						// They will have gone through all possible matchers
						if ( ( elem = !matcher && elem ) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( ( matcher = setMatchers[ j++ ] ) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {

						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
									setMatched[ i ] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {

			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[ i ] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache(
				selector,
				matcherFromGroupMatchers( elementMatchers, setMatchers )
			);

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( ( selector = compiled.selector || selector ) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[ 0 ] = match[ 0 ].slice( 0 );
			if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

				context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
					.replace( runescape, funescape ), context ) || [] )[ 0 ];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[ i ];

				// Abort if we hit a combinator
				if ( Expr.relative[ ( type = token.type ) ] ) {
					break;
				}
				if ( ( find = Expr.find[ type ] ) ) {

					// Search, expanding context for leading sibling combinators
					if ( ( seed = find(
						token.matches[ 0 ].replace( runescape, funescape ),
						rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
							context
					) ) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert( function( el ) {

		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
	} );

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert( function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute( "href" ) === "#";
	} ) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		} );
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert( function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	} ) ) {
		addHandle( "value", function( elem, _name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		} );
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert( function( el ) {
		return el.getAttribute( "disabled" ) == null;
	} ) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
					( val = elem.getAttributeNode( name ) ) && val.specified ?
						val.value :
						null;
			}
		} );
	}

	return Sizzle;

	} )( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;



	function nodeName( elem, name ) {

	  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

	};
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Filtered directly for both simple and complex selectors
		return jQuery.filter( qualifier, elements, not );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, _i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, _i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, _i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			if ( elem.contentDocument != null &&

				// Support: IE 11+
				// <object> elements with no `data` attribute has an object
				// `contentDocument` with a `null` prototype.
				getProto( elem.contentDocument ) ) {

				return elem.contentDocument;
			}

			// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
			// Treat the template element as a regular one in browsers that
			// don't support it.
			if ( nodeName( elem, "template" ) ) {
				elem = elem.content || elem;
			}

			return jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = locked || options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && toType( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject, noValue ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
				// * false: [ value ].slice( 0 ) => resolve( value )
				// * true: [ value ].slice( 1 ) => resolve()
				resolve.apply( undefined, [ value ].slice( noValue ) );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.apply( undefined, [ value ] );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( _i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// rejected_handlers.disable
						// fulfilled_handlers.disable
						tuples[ 3 - i ][ 3 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock,

						// progress_handlers.lock
						tuples[ 0 ][ 3 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
					!remaining );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( toType( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, _key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};


	// Matches dashed string for camelizing
	var rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g;

	// Used by camelCase as callback to replace()
	function fcamelCase( _all, letter ) {
		return letter.toUpperCase();
	}

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 15
	// Microsoft forgot to hump their vendor prefix (#9572)
	function camelCase( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	}
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( Array.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( camelCase );
				} else {
					key = camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || Array.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var documentElement = document.documentElement;



		var isAttached = function( elem ) {
				return jQuery.contains( elem.ownerDocument, elem );
			},
			composed = { composed: true };

		// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
		// Check attachment across shadow DOM boundaries when possible (gh-3504)
		// Support: iOS 10.0-10.2 only
		// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
		// leading to errors. We need to check for `getRootNode`.
		if ( documentElement.getRootNode ) {
			isAttached = function( elem ) {
				return jQuery.contains( elem.ownerDocument, elem ) ||
					elem.getRootNode( composed ) === elem.ownerDocument;
			};
		}
	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				isAttached( elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted, scale,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = elem.nodeType &&
				( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Support: Firefox <=54
			// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
			initial = initial / 2;

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			while ( maxIterations-- ) {

				// Evaluate and update our best guess (doubling guesses that zero out).
				// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
				jQuery.style( elem, prop, initialInUnit + unit );
				if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
					maxIterations = 0;
				}
				initialInUnit = initialInUnit / scale;

			}

			initialInUnit = initialInUnit * 2;
			jQuery.style( elem, prop, initialInUnit + unit );

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

	var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

		// Support: IE <=9 only
		// IE <=9 replaces <option> tags with their contents when inserted outside of
		// the select element.
		div.innerHTML = "<option></option>";
		support.option = !!div.lastChild;
	} )();


	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	// Support: IE <=9 only
	if ( !support.option ) {
		wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
	}


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, attached, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( toType( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			attached = isAttached( elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( attached ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 - 11+
	// focus() and blur() are asynchronous, except when they are no-op.
	// So expect focus to be synchronous when the element is already active,
	// and blur to be synchronous when the element is not already active.
	// (focus and blur are always synchronous in other supported browsers,
	// this just defines when we can count on it).
	function expectSync( elem, type ) {
		return ( elem === safeActiveElement() ) === ( type === "focus" );
	}

	// Support: IE <=9 only
	// Accessing document.activeElement can throw unexpectedly
	// https://bugs.jquery.com/ticket/13393
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Only attach events to objects that accept data
			if ( !acceptData( elem ) ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = Object.create( null );
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),

				// Make a writable jQuery.Event from the native event object
				event = jQuery.event.fix( nativeEvent ),

				handlers = (
						dataPriv.get( this, "events" ) || Object.create( null )
					)[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// If the event is namespaced, then each handler is only invoked if it is
					// specially universal or its namespaces are a superset of the event's.
					if ( !event.rnamespace || handleObj.namespace === false ||
						event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			click: {

				// Utilize native event to ensure correct state for checkable inputs
				setup: function( data ) {

					// For mutual compressibility with _default, replace `this` access with a local var.
					// `|| data` is dead code meant only to preserve the variable through minification.
					var el = this || data;

					// Claim the first handler
					if ( rcheckableType.test( el.type ) &&
						el.click && nodeName( el, "input" ) ) {

						// dataPriv.set( el, "click", ... )
						leverageNative( el, "click", returnTrue );
					}

					// Return false to allow normal processing in the caller
					return false;
				},
				trigger: function( data ) {

					// For mutual compressibility with _default, replace `this` access with a local var.
					// `|| data` is dead code meant only to preserve the variable through minification.
					var el = this || data;

					// Force setup before triggering a click
					if ( rcheckableType.test( el.type ) &&
						el.click && nodeName( el, "input" ) ) {

						leverageNative( el, "click" );
					}

					// Return non-false to allow normal event-path propagation
					return true;
				},

				// For cross-browser consistency, suppress native .click() on links
				// Also prevent it if we're currently inside a leveraged native-event stack
				_default: function( event ) {
					var target = event.target;
					return rcheckableType.test( target.type ) &&
						target.click && nodeName( target, "input" ) &&
						dataPriv.get( target, "click" ) ||
						nodeName( target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	// Ensure the presence of an event listener that handles manually-triggered
	// synthetic events by interrupting progress until reinvoked in response to
	// *native* events that it fires directly, ensuring that state changes have
	// already occurred before other listeners are invoked.
	function leverageNative( el, type, expectSync ) {

		// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
		if ( !expectSync ) {
			if ( dataPriv.get( el, type ) === undefined ) {
				jQuery.event.add( el, type, returnTrue );
			}
			return;
		}

		// Register the controller as a special universal handler for all event namespaces
		dataPriv.set( el, type, false );
		jQuery.event.add( el, type, {
			namespace: false,
			handler: function( event ) {
				var notAsync, result,
					saved = dataPriv.get( this, type );

				if ( ( event.isTrigger & 1 ) && this[ type ] ) {

					// Interrupt processing of the outer synthetic .trigger()ed event
					// Saved data should be false in such cases, but might be a leftover capture object
					// from an async native handler (gh-4350)
					if ( !saved.length ) {

						// Store arguments for use when handling the inner native event
						// There will always be at least one argument (an event object), so this array
						// will not be confused with a leftover capture object.
						saved = slice.call( arguments );
						dataPriv.set( this, type, saved );

						// Trigger the native event and capture its result
						// Support: IE <=9 - 11+
						// focus() and blur() are asynchronous
						notAsync = expectSync( this, type );
						this[ type ]();
						result = dataPriv.get( this, type );
						if ( saved !== result || notAsync ) {
							dataPriv.set( this, type, false );
						} else {
							result = {};
						}
						if ( saved !== result ) {

							// Cancel the outer synthetic event
							event.stopImmediatePropagation();
							event.preventDefault();
							return result.value;
						}

					// If this is an inner synthetic event for an event with a bubbling surrogate
					// (focus or blur), assume that the surrogate already propagated from triggering the
					// native event and prevent that from happening again here.
					// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
					// bubbling surrogate propagates *after* the non-bubbling base), but that seems
					// less bad than duplication.
					} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
						event.stopPropagation();
					}

				// If this is a native event triggered above, everything is now in order
				// Fire an inner synthetic event with the original arguments
				} else if ( saved.length ) {

					// ...and capture the result
					dataPriv.set( this, type, {
						value: jQuery.event.trigger(

							// Support: IE <=9 - 11+
							// Extend with the prototype to reset the above stopImmediatePropagation()
							jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
							saved.slice( 1 ),
							this
						)
					} );

					// Abort handling of the native event
					event.stopImmediatePropagation();
				}
			}
		} );
	}

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || Date.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		code: true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}

				if ( button & 2 ) {
					return 3;
				}

				if ( button & 4 ) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
		jQuery.event.special[ type ] = {

			// Utilize native event if possible so blur/focus sequence is correct
			setup: function() {

				// Claim the first handler
				// dataPriv.set( this, "focus", ... )
				// dataPriv.set( this, "blur", ... )
				leverageNative( this, type, expectSync );

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function() {

				// Force setup before trigger
				leverageNative( this, type );

				// Return non-false to allow normal event-path propagation
				return true;
			},

			delegateType: delegateType
		};
	} );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		// Support: IE <=10 - 11, Edge 12 - 13 only
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget( elem, content ) {
		if ( nodeName( elem, "table" ) &&
			nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
			elem.type = elem.type.slice( 5 );
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.get( src );
			events = pdataOld.events;

			if ( events ) {
				dataPriv.remove( dest, "handle events" );

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = flat( args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			valueIsFunction = isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( valueIsFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( valueIsFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl && !node.noModule ) {
									jQuery._evalUrl( node.src, {
										nonce: node.nonce || node.getAttribute( "nonce" )
									}, doc );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && isAttached( node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html;
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = isAttached( elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.call( elem );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
				"margin-top:1px;padding:0;border:0";
			div.style.cssText =
				"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
				"margin:auto;border:1px;padding:1px;" +
				"width:60%;top:1%";
			documentElement.appendChild( container ).appendChild( div );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

			// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
			// Some styles come back with percentage values, even though they shouldn't
			div.style.right = "60%";
			pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

			// Support: IE 9 - 11 only
			// Detect misreporting of content dimensions for box-sizing:border-box elements
			boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

			// Support: IE 9 only
			// Detect overflow:scroll screwiness (gh-3699)
			// Support: Chrome <=64
			// Don't get tricked when zoom affects offsetWidth (gh-4029)
			div.style.position = "absolute";
			scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		function roundPixelMeasures( measure ) {
			return Math.round( parseFloat( measure ) );
		}

		var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
			reliableTrDimensionsVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		jQuery.extend( support, {
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelBoxStyles: function() {
				computeStyleTests();
				return pixelBoxStylesVal;
			},
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			},
			scrollboxSize: function() {
				computeStyleTests();
				return scrollboxSizeVal;
			},

			// Support: IE 9 - 11+, Edge 15 - 18+
			// IE/Edge misreport `getComputedStyle` of table rows with width/height
			// set in CSS while `offset*` properties report correct values.
			// Behavior in IE 9 is more subtle than in newer versions & it passes
			// some versions of this test; make sure not to make it pass there!
			reliableTrDimensions: function() {
				var table, tr, trChild, trStyle;
				if ( reliableTrDimensionsVal == null ) {
					table = document.createElement( "table" );
					tr = document.createElement( "tr" );
					trChild = document.createElement( "div" );

					table.style.cssText = "position:absolute;left:-11111px";
					tr.style.height = "1px";
					trChild.style.height = "9px";

					documentElement
						.appendChild( table )
						.appendChild( tr )
						.appendChild( trChild );

					trStyle = window.getComputedStyle( tr );
					reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

					documentElement.removeChild( table );
				}
				return reliableTrDimensionsVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,

			// Support: Firefox 51+
			// Retrieving style before computed somehow
			// fixes an issue with getting wrong values
			// on detached elements
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is needed for:
		//   .css('filter') (IE 9 only, #12537)
		//   .css('--customProperty) (#3144)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !isAttached( elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style,
		vendorProps = {};

	// Return a vendor-prefixed property or undefined
	function vendorPropName( name ) {

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
	function finalPropName( name ) {
		var final = jQuery.cssProps[ name ] || vendorProps[ name ];

		if ( final ) {
			return final;
		}
		if ( name in emptyStyle ) {
			return name;
		}
		return vendorProps[ name ] = vendorPropName( name ) || name;
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rcustomProp = /^--/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		};

	function setPositiveNumber( _elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
		var i = dimension === "width" ? 1 : 0,
			extra = 0,
			delta = 0;

		// Adjustment may not be necessary
		if ( box === ( isBorderBox ? "border" : "content" ) ) {
			return 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin
			if ( box === "margin" ) {
				delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
			}

			// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
			if ( !isBorderBox ) {

				// Add padding
				delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// For "border" or "margin", add border
				if ( box !== "padding" ) {
					delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

				// But still keep track of it otherwise
				} else {
					extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}

			// If we get here with a border-box (content + padding + border), we're seeking "content" or
			// "padding" or "margin"
			} else {

				// For "content", subtract padding
				if ( box === "content" ) {
					delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// For "content" or "padding", subtract border
				if ( box !== "margin" ) {
					delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		// Account for positive content-box scroll gutter when requested by providing computedVal
		if ( !isBorderBox && computedVal >= 0 ) {

			// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
			// Assuming integer scroll gutter, subtract the rest and round down
			delta += Math.max( 0, Math.ceil(
				elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
				computedVal -
				delta -
				extra -
				0.5

			// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
			// Use an explicit zero to avoid NaN (gh-3964)
			) ) || 0;
		}

		return delta;
	}

	function getWidthOrHeight( elem, dimension, extra ) {

		// Start with computed style
		var styles = getStyles( elem ),

			// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
			// Fake content-box until we know it's needed to know the true value.
			boxSizingNeeded = !support.boxSizingReliable() || extra,
			isBorderBox = boxSizingNeeded &&
				jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
			valueIsBorderBox = isBorderBox,

			val = curCSS( elem, dimension, styles ),
			offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

		// Support: Firefox <=54
		// Return a confounding non-pixel value or feign ignorance, as appropriate.
		if ( rnumnonpx.test( val ) ) {
			if ( !extra ) {
				return val;
			}
			val = "auto";
		}


		// Support: IE 9 - 11 only
		// Use offsetWidth/offsetHeight for when box sizing is unreliable.
		// In those cases, the computed value can be trusted to be border-box.
		if ( ( !support.boxSizingReliable() && isBorderBox ||

			// Support: IE 10 - 11+, Edge 15 - 18+
			// IE/Edge misreport `getComputedStyle` of table rows with width/height
			// set in CSS while `offset*` properties report correct values.
			// Interestingly, in some cases IE 9 doesn't suffer from this issue.
			!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

			// Fall back to offsetWidth/offsetHeight when value is "auto"
			// This happens for inline elements with no explicit setting (gh-3571)
			val === "auto" ||

			// Support: Android <=4.1 - 4.3 only
			// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
			!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

			// Make sure the element is visible & connected
			elem.getClientRects().length ) {

			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

			// Where available, offsetWidth/offsetHeight approximate border box dimensions.
			// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
			// retrieved value as a content box dimension.
			valueIsBorderBox = offsetProp in elem;
			if ( valueIsBorderBox ) {
				val = elem[ offsetProp ];
			}
		}

		// Normalize "" and auto
		val = parseFloat( val ) || 0;

		// Adjust for the element's box model
		return ( val +
			boxModelAdjustment(
				elem,
				dimension,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles,

				// Provide the current computed size to request scroll gutter calculation (gh-3589)
				val
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"gridArea": true,
			"gridColumn": true,
			"gridColumnEnd": true,
			"gridColumnStart": true,
			"gridRow": true,
			"gridRowEnd": true,
			"gridRowStart": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = camelCase( name ),
				isCustomProp = rcustomProp.test( name ),
				style = elem.style;

			// Make sure that we're working with the right name. We don't
			// want to query the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
				// "px" to a few hardcoded values.
				if ( type === "number" && !isCustomProp ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					if ( isCustomProp ) {
						style.setProperty( name, value );
					} else {
						style[ name ] = value;
					}
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = camelCase( name ),
				isCustomProp = rcustomProp.test( name );

			// Make sure that we're working with the right name. We don't
			// want to modify the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}

			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( _i, dimension ) {
		jQuery.cssHooks[ dimension ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, dimension, extra );
							} ) :
							getWidthOrHeight( elem, dimension, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = getStyles( elem ),

					// Only read styles.position if the test has a chance to fail
					// to avoid forcing a reflow.
					scrollboxSizeBuggy = !support.scrollboxSize() &&
						styles.position === "absolute",

					// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
					boxSizingNeeded = scrollboxSizeBuggy || extra,
					isBorderBox = boxSizingNeeded &&
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					subtract = extra ?
						boxModelAdjustment(
							elem,
							dimension,
							extra,
							isBorderBox,
							styles
						) :
						0;

				// Account for unreliable border-box dimensions by comparing offset* to computed and
				// faking a content-box to get border and padding (gh-3699)
				if ( isBorderBox && scrollboxSizeBuggy ) {
					subtract -= Math.ceil(
						elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
						parseFloat( styles[ dimension ] ) -
						boxModelAdjustment( elem, dimension, "border", false, styles ) -
						0.5
					);
				}

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ dimension ] = value;
					value = jQuery.css( elem, dimension );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( prefix !== "margin" ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( Array.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 && (
						jQuery.cssHooks[ tween.prop ] ||
						tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, inProgress,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function schedule() {
		if ( inProgress ) {
			if ( document.hidden === false && window.requestAnimationFrame ) {
				window.requestAnimationFrame( schedule );
			} else {
				window.setTimeout( schedule, jQuery.fx.interval );
			}

			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = Date.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 15
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY and Edge just mirrors
			// the overflowX value there.
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( Array.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				// If there's more to do, yield
				if ( percent < 1 && length ) {
					return remaining;
				}

				// If this was an empty animation, synthesize a final progress notification
				if ( !length ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
				}

				// Resolve the animation and report its conclusion
				deferred.resolveWith( elem, [ animation ] );
				return false;
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						result.stop.bind( result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		// Attach callbacks from options
		animation
			.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		return animation;
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !isFunction( easing ) && easing
		};

		// Go to the end state if fx are off
		if ( jQuery.fx.off ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = Date.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Run the timer and safely remove it when done (allowing for external removal)
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		jQuery.fx.start();
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( inProgress ) {
			return;
		}

		inProgress = true;
		schedule();
	};

	jQuery.fx.stop = function() {
		inProgress = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	function classesToArray( value ) {
		if ( Array.isArray( value ) ) {
			return value;
		}
		if ( typeof value === "string" ) {
			return value.match( rnothtmlwhite ) || [];
		}
		return [];
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			classes = classesToArray( value );

			if ( classes.length ) {
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			classes = classesToArray( value );

			if ( classes.length ) {
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value,
				isValidValue = type === "string" || Array.isArray( value );

			if ( typeof stateVal === "boolean" && isValidValue ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( isValidValue ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = classesToArray( value );

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, valueIsFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			valueIsFunction = isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( valueIsFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( Array.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( Array.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	support.focusin = "onfocusin" in window;


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		stopPropagationCallback = function( e ) {
			e.stopPropagation();
		};

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = lastElement = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
				lastElement = cur;
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = (
						dataPriv.get( cur, "events" ) || Object.create( null )
					)[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;

						if ( event.isPropagationStopped() ) {
							lastElement.addEventListener( type, stopPropagationCallback );
						}

						elem[ type ]();

						if ( event.isPropagationStopped() ) {
							lastElement.removeEventListener( type, stopPropagationCallback );
						}

						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {

					// Handle: regular nodes (via `this.ownerDocument`), window
					// (via `this.document`) & document (via `this`).
					var doc = this.ownerDocument || this.document || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this.document || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = { guid: Date.now() };

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( Array.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && toType( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		if ( a == null ) {
			return "";
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( _i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( Array.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
										( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
											.concat( match[ 2 ] );
								}
							}
							match = responseHeaders[ key.toLowerCase() + " " ];
						}
						return match == null ? null : match.join( ", " );
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 15
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available and should be processed, append data to url
				if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
						uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Use a noop converter for missing script
				if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
					s.converters[ "text script" ] = function() {};
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( _i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );

	jQuery.ajaxPrefilter( function( s ) {
		var i;
		for ( i in s.headers ) {
			if ( i.toLowerCase() === "content-type" ) {
				s.contentType = s.headers[ i ] || "";
			}
		}
	} );


	jQuery._evalUrl = function( url, options, doc ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,

			// Only evaluate the response if it is successful (gh-4126)
			// dataFilter is not invoked for failure responses, so using it instead
			// of the default converter is kludgy but it works.
			converters: {
				"text script": function() {}
			},
			dataFilter: function( response ) {
				jQuery.globalEval( response, options, doc );
			}
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var htmlIsFunction = isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.ontimeout =
										xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain or forced-by-attrs requests
		if ( s.crossDomain || s.scriptAttrs ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" )
						.attr( s.scriptAttrs || {} )
						.prop( { charset: s.scriptCharset, src: s.url } )
						.on( "load error", callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						} );

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				if ( typeof props.top === "number" ) {
					props.top += "px";
				}
				if ( typeof props.left === "number" ) {
					props.left += "px";
				}
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {

		// offset() relates an element's border box to the document origin
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var rect, win,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			// Get document-relative position by adding viewport scroll to viewport-relative gBCR
			rect = elem.getBoundingClientRect();
			win = elem.ownerDocument.defaultView;
			return {
				top: rect.top + win.pageYOffset,
				left: rect.left + win.pageXOffset
			};
		},

		// position() relates an element's margin box to its offset parent's padding box
		// This corresponds to the behavior of CSS absolute positioning
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset, doc,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// position:fixed elements are offset from the viewport, which itself always has zero offset
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume position:fixed implies availability of getBoundingClientRect
				offset = elem.getBoundingClientRect();

			} else {
				offset = this.offset();

				// Account for the *real* offset parent, which can be the document or its root element
				// when a statically positioned element is identified
				doc = elem.ownerDocument;
				offsetParent = elem.offsetParent || doc.documentElement;
				while ( offsetParent &&
					( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
					jQuery.css( offsetParent, "position" ) === "static" ) {

					offsetParent = offsetParent.parentNode;
				}
				if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

					// Incorporate borders into its offset, since they are outside its content origin
					parentOffset = jQuery( offsetParent ).offset();
					parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
					parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
				}
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {

				// Coalesce documents and windows
				var win;
				if ( isWindow( elem ) ) {
					win = elem;
				} else if ( elem.nodeType === 9 ) {
					win = elem.defaultView;
				}

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( _i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( _i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},

		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );

	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( _i, name ) {

			// Handle event binding
			jQuery.fn[ name ] = function( data, fn ) {
				return arguments.length > 0 ?
					this.on( name, null, data, fn ) :
					this.trigger( name );
			};
		} );




	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

	// Bind a function to a context, optionally partially applying any
	// arguments.
	// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
	// However, it is not slated for removal any time soon
	jQuery.proxy = function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	};

	jQuery.holdReady = function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	};
	jQuery.isArray = Array.isArray;
	jQuery.parseJSON = JSON.parse;
	jQuery.nodeName = nodeName;
	jQuery.isFunction = isFunction;
	jQuery.isWindow = isWindow;
	jQuery.camelCase = camelCase;
	jQuery.type = toType;

	jQuery.now = Date.now;

	jQuery.isNumeric = function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	};

	jQuery.trim = function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	};



	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === "undefined" ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;
	} );


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var nav = function nav() {
		var flag = true;
		$(window).on('scroll', function (e) {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			if (scrollTop < 1) {
				$('.nav-fixed').removeClass('nav--scroll');
			} else {
				if ($('.nav-fixed').is('.nav--scroll')) {} else {
					$('.nav-fixed').addClass('nav--scroll');
				}
			}
		});
		$('.main-nav').css({
			left: -$('.main-nav').outerWidth()
		});
		// comp nav menu slide left
		var navClose = function navClose(nav) {
			var navW = nav.outerWidth();
			nav.stop().animate({
				left: -navW
			}, function () {
				nav.removeClass('nav-opened');
			});
		};
		$('.burger').on('click', function (e) {
			e.stopPropagation();
			$(this).toggleClass('burger-close');
			var nav = $('.main-nav');
			nav.height($(window).height() - $('.nav-fixed').outerHeight());
			if (nav.is('.nav-opened')) {
				navClose(nav);
				$('#content-zoom').removeClass('zoom');
				$('.overlay').fadeOut();
				$(this).removeClass('burger-close');
			} else {
				nav.addClass('nav-opened');
				nav.stop().animate({
					left: 0
				});
				$('#content-zoom').addClass('zoom');
				$('.overlay').fadeIn();
				$(this).addClass('burger-close');
			}
		});
		$(document).mouseup(function (e) {
			var container = $('.main-nav');
			if (!container.is(e.target) // if the target of the click isn't the container...
			&& container.has(e.target).length === 0) // ... nor a descendant of the container		{
				if (container.is('.nav-opened')) {
					navClose(container);
					$('#content-zoom').removeClass('zoom');
					$('.overlay').fadeOut();
					if ($('.burger').is('.burger-close')) {
						$('.burger').removeClass('burger-close');
					}
				}
		});

		$('nav .list-category__item').hover(function (e) {
			$('.list-category__drop-down').stop().slideUp();
			if ($('ul', this).length) {
				$('ul', this).stop().slideDown(500);
				$('ul', this).addClass('active');
			}
		}, function () {
			$('ul', this).stop().slideUp(500);
		});
	};

	module.exports = nav;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Swiper 4.5.1
	 * Most modern mobile touch slider and framework with hardware accelerated transitions
	 * http://www.idangero.us/swiper/
	 *
	 * Copyright 2014-2019 Vladimir Kharlampidi
	 *
	 * Released under the MIT License
	 *
	 * Released on: September 13, 2019
	 */

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global = global || self, global.Swiper = factory());
	}(this, function () { 'use strict';

	  /**
	   * SSR Window 1.0.1
	   * Better handling for window object in SSR environment
	   * https://github.com/nolimits4web/ssr-window
	   *
	   * Copyright 2018, Vladimir Kharlampidi
	   *
	   * Licensed under MIT
	   *
	   * Released on: July 18, 2018
	   */
	  var doc = (typeof document === 'undefined') ? {
	    body: {},
	    addEventListener: function addEventListener() {},
	    removeEventListener: function removeEventListener() {},
	    activeElement: {
	      blur: function blur() {},
	      nodeName: '',
	    },
	    querySelector: function querySelector() {
	      return null;
	    },
	    querySelectorAll: function querySelectorAll() {
	      return [];
	    },
	    getElementById: function getElementById() {
	      return null;
	    },
	    createEvent: function createEvent() {
	      return {
	        initEvent: function initEvent() {},
	      };
	    },
	    createElement: function createElement() {
	      return {
	        children: [],
	        childNodes: [],
	        style: {},
	        setAttribute: function setAttribute() {},
	        getElementsByTagName: function getElementsByTagName() {
	          return [];
	        },
	      };
	    },
	    location: { hash: '' },
	  } : document; // eslint-disable-line

	  var win = (typeof window === 'undefined') ? {
	    document: doc,
	    navigator: {
	      userAgent: '',
	    },
	    location: {},
	    history: {},
	    CustomEvent: function CustomEvent() {
	      return this;
	    },
	    addEventListener: function addEventListener() {},
	    removeEventListener: function removeEventListener() {},
	    getComputedStyle: function getComputedStyle() {
	      return {
	        getPropertyValue: function getPropertyValue() {
	          return '';
	        },
	      };
	    },
	    Image: function Image() {},
	    Date: function Date() {},
	    screen: {},
	    setTimeout: function setTimeout() {},
	    clearTimeout: function clearTimeout() {},
	  } : window; // eslint-disable-line

	  /**
	   * Dom7 2.1.3
	   * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
	   * http://framework7.io/docs/dom.html
	   *
	   * Copyright 2019, Vladimir Kharlampidi
	   * The iDangero.us
	   * http://www.idangero.us/
	   *
	   * Licensed under MIT
	   *
	   * Released on: February 11, 2019
	   */

	  var Dom7 = function Dom7(arr) {
	    var self = this;
	    // Create array-like object
	    for (var i = 0; i < arr.length; i += 1) {
	      self[i] = arr[i];
	    }
	    self.length = arr.length;
	    // Return collection with methods
	    return this;
	  };

	  function $(selector, context) {
	    var arr = [];
	    var i = 0;
	    if (selector && !context) {
	      if (selector instanceof Dom7) {
	        return selector;
	      }
	    }
	    if (selector) {
	        // String
	      if (typeof selector === 'string') {
	        var els;
	        var tempParent;
	        var html = selector.trim();
	        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
	          var toCreate = 'div';
	          if (html.indexOf('<li') === 0) { toCreate = 'ul'; }
	          if (html.indexOf('<tr') === 0) { toCreate = 'tbody'; }
	          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) { toCreate = 'tr'; }
	          if (html.indexOf('<tbody') === 0) { toCreate = 'table'; }
	          if (html.indexOf('<option') === 0) { toCreate = 'select'; }
	          tempParent = doc.createElement(toCreate);
	          tempParent.innerHTML = html;
	          for (i = 0; i < tempParent.childNodes.length; i += 1) {
	            arr.push(tempParent.childNodes[i]);
	          }
	        } else {
	          if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
	            // Pure ID selector
	            els = [doc.getElementById(selector.trim().split('#')[1])];
	          } else {
	            // Other selectors
	            els = (context || doc).querySelectorAll(selector.trim());
	          }
	          for (i = 0; i < els.length; i += 1) {
	            if (els[i]) { arr.push(els[i]); }
	          }
	        }
	      } else if (selector.nodeType || selector === win || selector === doc) {
	        // Node/element
	        arr.push(selector);
	      } else if (selector.length > 0 && selector[0].nodeType) {
	        // Array of elements or instance of Dom
	        for (i = 0; i < selector.length; i += 1) {
	          arr.push(selector[i]);
	        }
	      }
	    }
	    return new Dom7(arr);
	  }

	  $.fn = Dom7.prototype;
	  $.Class = Dom7;
	  $.Dom7 = Dom7;

	  function unique(arr) {
	    var uniqueArray = [];
	    for (var i = 0; i < arr.length; i += 1) {
	      if (uniqueArray.indexOf(arr[i]) === -1) { uniqueArray.push(arr[i]); }
	    }
	    return uniqueArray;
	  }

	  // Classes and attributes
	  function addClass(className) {
	    if (typeof className === 'undefined') {
	      return this;
	    }
	    var classes = className.split(' ');
	    for (var i = 0; i < classes.length; i += 1) {
	      for (var j = 0; j < this.length; j += 1) {
	        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.add(classes[i]); }
	      }
	    }
	    return this;
	  }
	  function removeClass(className) {
	    var classes = className.split(' ');
	    for (var i = 0; i < classes.length; i += 1) {
	      for (var j = 0; j < this.length; j += 1) {
	        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.remove(classes[i]); }
	      }
	    }
	    return this;
	  }
	  function hasClass(className) {
	    if (!this[0]) { return false; }
	    return this[0].classList.contains(className);
	  }
	  function toggleClass(className) {
	    var classes = className.split(' ');
	    for (var i = 0; i < classes.length; i += 1) {
	      for (var j = 0; j < this.length; j += 1) {
	        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.toggle(classes[i]); }
	      }
	    }
	    return this;
	  }
	  function attr(attrs, value) {
	    var arguments$1 = arguments;

	    if (arguments.length === 1 && typeof attrs === 'string') {
	      // Get attr
	      if (this[0]) { return this[0].getAttribute(attrs); }
	      return undefined;
	    }

	    // Set attrs
	    for (var i = 0; i < this.length; i += 1) {
	      if (arguments$1.length === 2) {
	        // String
	        this[i].setAttribute(attrs, value);
	      } else {
	        // Object
	        // eslint-disable-next-line
	        for (var attrName in attrs) {
	          this[i][attrName] = attrs[attrName];
	          this[i].setAttribute(attrName, attrs[attrName]);
	        }
	      }
	    }
	    return this;
	  }
	  // eslint-disable-next-line
	  function removeAttr(attr) {
	    for (var i = 0; i < this.length; i += 1) {
	      this[i].removeAttribute(attr);
	    }
	    return this;
	  }
	  function data(key, value) {
	    var el;
	    if (typeof value === 'undefined') {
	      el = this[0];
	      // Get value
	      if (el) {
	        if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
	          return el.dom7ElementDataStorage[key];
	        }

	        var dataKey = el.getAttribute(("data-" + key));
	        if (dataKey) {
	          return dataKey;
	        }
	        return undefined;
	      }
	      return undefined;
	    }

	    // Set value
	    for (var i = 0; i < this.length; i += 1) {
	      el = this[i];
	      if (!el.dom7ElementDataStorage) { el.dom7ElementDataStorage = {}; }
	      el.dom7ElementDataStorage[key] = value;
	    }
	    return this;
	  }
	  // Transforms
	  // eslint-disable-next-line
	  function transform(transform) {
	    for (var i = 0; i < this.length; i += 1) {
	      var elStyle = this[i].style;
	      elStyle.webkitTransform = transform;
	      elStyle.transform = transform;
	    }
	    return this;
	  }
	  function transition(duration) {
	    if (typeof duration !== 'string') {
	      duration = duration + "ms"; // eslint-disable-line
	    }
	    for (var i = 0; i < this.length; i += 1) {
	      var elStyle = this[i].style;
	      elStyle.webkitTransitionDuration = duration;
	      elStyle.transitionDuration = duration;
	    }
	    return this;
	  }
	  // Events
	  function on() {
	    var assign;

	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];
	    var eventType = args[0];
	    var targetSelector = args[1];
	    var listener = args[2];
	    var capture = args[3];
	    if (typeof args[1] === 'function') {
	      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
	      targetSelector = undefined;
	    }
	    if (!capture) { capture = false; }

	    function handleLiveEvent(e) {
	      var target = e.target;
	      if (!target) { return; }
	      var eventData = e.target.dom7EventData || [];
	      if (eventData.indexOf(e) < 0) {
	        eventData.unshift(e);
	      }
	      if ($(target).is(targetSelector)) { listener.apply(target, eventData); }
	      else {
	        var parents = $(target).parents(); // eslint-disable-line
	        for (var k = 0; k < parents.length; k += 1) {
	          if ($(parents[k]).is(targetSelector)) { listener.apply(parents[k], eventData); }
	        }
	      }
	    }
	    function handleEvent(e) {
	      var eventData = e && e.target ? e.target.dom7EventData || [] : [];
	      if (eventData.indexOf(e) < 0) {
	        eventData.unshift(e);
	      }
	      listener.apply(this, eventData);
	    }
	    var events = eventType.split(' ');
	    var j;
	    for (var i = 0; i < this.length; i += 1) {
	      var el = this[i];
	      if (!targetSelector) {
	        for (j = 0; j < events.length; j += 1) {
	          var event = events[j];
	          if (!el.dom7Listeners) { el.dom7Listeners = {}; }
	          if (!el.dom7Listeners[event]) { el.dom7Listeners[event] = []; }
	          el.dom7Listeners[event].push({
	            listener: listener,
	            proxyListener: handleEvent,
	          });
	          el.addEventListener(event, handleEvent, capture);
	        }
	      } else {
	        // Live events
	        for (j = 0; j < events.length; j += 1) {
	          var event$1 = events[j];
	          if (!el.dom7LiveListeners) { el.dom7LiveListeners = {}; }
	          if (!el.dom7LiveListeners[event$1]) { el.dom7LiveListeners[event$1] = []; }
	          el.dom7LiveListeners[event$1].push({
	            listener: listener,
	            proxyListener: handleLiveEvent,
	          });
	          el.addEventListener(event$1, handleLiveEvent, capture);
	        }
	      }
	    }
	    return this;
	  }
	  function off() {
	    var assign;

	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];
	    var eventType = args[0];
	    var targetSelector = args[1];
	    var listener = args[2];
	    var capture = args[3];
	    if (typeof args[1] === 'function') {
	      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
	      targetSelector = undefined;
	    }
	    if (!capture) { capture = false; }

	    var events = eventType.split(' ');
	    for (var i = 0; i < events.length; i += 1) {
	      var event = events[i];
	      for (var j = 0; j < this.length; j += 1) {
	        var el = this[j];
	        var handlers = (void 0);
	        if (!targetSelector && el.dom7Listeners) {
	          handlers = el.dom7Listeners[event];
	        } else if (targetSelector && el.dom7LiveListeners) {
	          handlers = el.dom7LiveListeners[event];
	        }
	        if (handlers && handlers.length) {
	          for (var k = handlers.length - 1; k >= 0; k -= 1) {
	            var handler = handlers[k];
	            if (listener && handler.listener === listener) {
	              el.removeEventListener(event, handler.proxyListener, capture);
	              handlers.splice(k, 1);
	            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
	              el.removeEventListener(event, handler.proxyListener, capture);
	              handlers.splice(k, 1);
	            } else if (!listener) {
	              el.removeEventListener(event, handler.proxyListener, capture);
	              handlers.splice(k, 1);
	            }
	          }
	        }
	      }
	    }
	    return this;
	  }
	  function trigger() {
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];

	    var events = args[0].split(' ');
	    var eventData = args[1];
	    for (var i = 0; i < events.length; i += 1) {
	      var event = events[i];
	      for (var j = 0; j < this.length; j += 1) {
	        var el = this[j];
	        var evt = (void 0);
	        try {
	          evt = new win.CustomEvent(event, {
	            detail: eventData,
	            bubbles: true,
	            cancelable: true,
	          });
	        } catch (e) {
	          evt = doc.createEvent('Event');
	          evt.initEvent(event, true, true);
	          evt.detail = eventData;
	        }
	        // eslint-disable-next-line
	        el.dom7EventData = args.filter(function (data, dataIndex) { return dataIndex > 0; });
	        el.dispatchEvent(evt);
	        el.dom7EventData = [];
	        delete el.dom7EventData;
	      }
	    }
	    return this;
	  }
	  function transitionEnd(callback) {
	    var events = ['webkitTransitionEnd', 'transitionend'];
	    var dom = this;
	    var i;
	    function fireCallBack(e) {
	      /* jshint validthis:true */
	      if (e.target !== this) { return; }
	      callback.call(this, e);
	      for (i = 0; i < events.length; i += 1) {
	        dom.off(events[i], fireCallBack);
	      }
	    }
	    if (callback) {
	      for (i = 0; i < events.length; i += 1) {
	        dom.on(events[i], fireCallBack);
	      }
	    }
	    return this;
	  }
	  function outerWidth(includeMargins) {
	    if (this.length > 0) {
	      if (includeMargins) {
	        // eslint-disable-next-line
	        var styles = this.styles();
	        return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
	      }
	      return this[0].offsetWidth;
	    }
	    return null;
	  }
	  function outerHeight(includeMargins) {
	    if (this.length > 0) {
	      if (includeMargins) {
	        // eslint-disable-next-line
	        var styles = this.styles();
	        return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
	      }
	      return this[0].offsetHeight;
	    }
	    return null;
	  }
	  function offset() {
	    if (this.length > 0) {
	      var el = this[0];
	      var box = el.getBoundingClientRect();
	      var body = doc.body;
	      var clientTop = el.clientTop || body.clientTop || 0;
	      var clientLeft = el.clientLeft || body.clientLeft || 0;
	      var scrollTop = el === win ? win.scrollY : el.scrollTop;
	      var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
	      return {
	        top: (box.top + scrollTop) - clientTop,
	        left: (box.left + scrollLeft) - clientLeft,
	      };
	    }

	    return null;
	  }
	  function styles() {
	    if (this[0]) { return win.getComputedStyle(this[0], null); }
	    return {};
	  }
	  function css(props, value) {
	    var i;
	    if (arguments.length === 1) {
	      if (typeof props === 'string') {
	        if (this[0]) { return win.getComputedStyle(this[0], null).getPropertyValue(props); }
	      } else {
	        for (i = 0; i < this.length; i += 1) {
	          // eslint-disable-next-line
	          for (var prop in props) {
	            this[i].style[prop] = props[prop];
	          }
	        }
	        return this;
	      }
	    }
	    if (arguments.length === 2 && typeof props === 'string') {
	      for (i = 0; i < this.length; i += 1) {
	        this[i].style[props] = value;
	      }
	      return this;
	    }
	    return this;
	  }
	  // Iterate over the collection passing elements to `callback`
	  function each(callback) {
	    // Don't bother continuing without a callback
	    if (!callback) { return this; }
	    // Iterate over the current collection
	    for (var i = 0; i < this.length; i += 1) {
	      // If the callback returns false
	      if (callback.call(this[i], i, this[i]) === false) {
	        // End the loop early
	        return this;
	      }
	    }
	    // Return `this` to allow chained DOM operations
	    return this;
	  }
	  // eslint-disable-next-line
	  function html(html) {
	    if (typeof html === 'undefined') {
	      return this[0] ? this[0].innerHTML : undefined;
	    }

	    for (var i = 0; i < this.length; i += 1) {
	      this[i].innerHTML = html;
	    }
	    return this;
	  }
	  // eslint-disable-next-line
	  function text(text) {
	    if (typeof text === 'undefined') {
	      if (this[0]) {
	        return this[0].textContent.trim();
	      }
	      return null;
	    }

	    for (var i = 0; i < this.length; i += 1) {
	      this[i].textContent = text;
	    }
	    return this;
	  }
	  function is(selector) {
	    var el = this[0];
	    var compareWith;
	    var i;
	    if (!el || typeof selector === 'undefined') { return false; }
	    if (typeof selector === 'string') {
	      if (el.matches) { return el.matches(selector); }
	      else if (el.webkitMatchesSelector) { return el.webkitMatchesSelector(selector); }
	      else if (el.msMatchesSelector) { return el.msMatchesSelector(selector); }

	      compareWith = $(selector);
	      for (i = 0; i < compareWith.length; i += 1) {
	        if (compareWith[i] === el) { return true; }
	      }
	      return false;
	    } else if (selector === doc) { return el === doc; }
	    else if (selector === win) { return el === win; }

	    if (selector.nodeType || selector instanceof Dom7) {
	      compareWith = selector.nodeType ? [selector] : selector;
	      for (i = 0; i < compareWith.length; i += 1) {
	        if (compareWith[i] === el) { return true; }
	      }
	      return false;
	    }
	    return false;
	  }
	  function index() {
	    var child = this[0];
	    var i;
	    if (child) {
	      i = 0;
	      // eslint-disable-next-line
	      while ((child = child.previousSibling) !== null) {
	        if (child.nodeType === 1) { i += 1; }
	      }
	      return i;
	    }
	    return undefined;
	  }
	  // eslint-disable-next-line
	  function eq(index) {
	    if (typeof index === 'undefined') { return this; }
	    var length = this.length;
	    var returnIndex;
	    if (index > length - 1) {
	      return new Dom7([]);
	    }
	    if (index < 0) {
	      returnIndex = length + index;
	      if (returnIndex < 0) { return new Dom7([]); }
	      return new Dom7([this[returnIndex]]);
	    }
	    return new Dom7([this[index]]);
	  }
	  function append() {
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];

	    var newChild;

	    for (var k = 0; k < args.length; k += 1) {
	      newChild = args[k];
	      for (var i = 0; i < this.length; i += 1) {
	        if (typeof newChild === 'string') {
	          var tempDiv = doc.createElement('div');
	          tempDiv.innerHTML = newChild;
	          while (tempDiv.firstChild) {
	            this[i].appendChild(tempDiv.firstChild);
	          }
	        } else if (newChild instanceof Dom7) {
	          for (var j = 0; j < newChild.length; j += 1) {
	            this[i].appendChild(newChild[j]);
	          }
	        } else {
	          this[i].appendChild(newChild);
	        }
	      }
	    }

	    return this;
	  }
	  function prepend(newChild) {
	    var i;
	    var j;
	    for (i = 0; i < this.length; i += 1) {
	      if (typeof newChild === 'string') {
	        var tempDiv = doc.createElement('div');
	        tempDiv.innerHTML = newChild;
	        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
	          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
	        }
	      } else if (newChild instanceof Dom7) {
	        for (j = 0; j < newChild.length; j += 1) {
	          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
	        }
	      } else {
	        this[i].insertBefore(newChild, this[i].childNodes[0]);
	      }
	    }
	    return this;
	  }
	  function next(selector) {
	    if (this.length > 0) {
	      if (selector) {
	        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
	          return new Dom7([this[0].nextElementSibling]);
	        }
	        return new Dom7([]);
	      }

	      if (this[0].nextElementSibling) { return new Dom7([this[0].nextElementSibling]); }
	      return new Dom7([]);
	    }
	    return new Dom7([]);
	  }
	  function nextAll(selector) {
	    var nextEls = [];
	    var el = this[0];
	    if (!el) { return new Dom7([]); }
	    while (el.nextElementSibling) {
	      var next = el.nextElementSibling; // eslint-disable-line
	      if (selector) {
	        if ($(next).is(selector)) { nextEls.push(next); }
	      } else { nextEls.push(next); }
	      el = next;
	    }
	    return new Dom7(nextEls);
	  }
	  function prev(selector) {
	    if (this.length > 0) {
	      var el = this[0];
	      if (selector) {
	        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
	          return new Dom7([el.previousElementSibling]);
	        }
	        return new Dom7([]);
	      }

	      if (el.previousElementSibling) { return new Dom7([el.previousElementSibling]); }
	      return new Dom7([]);
	    }
	    return new Dom7([]);
	  }
	  function prevAll(selector) {
	    var prevEls = [];
	    var el = this[0];
	    if (!el) { return new Dom7([]); }
	    while (el.previousElementSibling) {
	      var prev = el.previousElementSibling; // eslint-disable-line
	      if (selector) {
	        if ($(prev).is(selector)) { prevEls.push(prev); }
	      } else { prevEls.push(prev); }
	      el = prev;
	    }
	    return new Dom7(prevEls);
	  }
	  function parent(selector) {
	    var parents = []; // eslint-disable-line
	    for (var i = 0; i < this.length; i += 1) {
	      if (this[i].parentNode !== null) {
	        if (selector) {
	          if ($(this[i].parentNode).is(selector)) { parents.push(this[i].parentNode); }
	        } else {
	          parents.push(this[i].parentNode);
	        }
	      }
	    }
	    return $(unique(parents));
	  }
	  function parents(selector) {
	    var parents = []; // eslint-disable-line
	    for (var i = 0; i < this.length; i += 1) {
	      var parent = this[i].parentNode; // eslint-disable-line
	      while (parent) {
	        if (selector) {
	          if ($(parent).is(selector)) { parents.push(parent); }
	        } else {
	          parents.push(parent);
	        }
	        parent = parent.parentNode;
	      }
	    }
	    return $(unique(parents));
	  }
	  function closest(selector) {
	    var closest = this; // eslint-disable-line
	    if (typeof selector === 'undefined') {
	      return new Dom7([]);
	    }
	    if (!closest.is(selector)) {
	      closest = closest.parents(selector).eq(0);
	    }
	    return closest;
	  }
	  function find(selector) {
	    var foundElements = [];
	    for (var i = 0; i < this.length; i += 1) {
	      var found = this[i].querySelectorAll(selector);
	      for (var j = 0; j < found.length; j += 1) {
	        foundElements.push(found[j]);
	      }
	    }
	    return new Dom7(foundElements);
	  }
	  function children(selector) {
	    var children = []; // eslint-disable-line
	    for (var i = 0; i < this.length; i += 1) {
	      var childNodes = this[i].childNodes;

	      for (var j = 0; j < childNodes.length; j += 1) {
	        if (!selector) {
	          if (childNodes[j].nodeType === 1) { children.push(childNodes[j]); }
	        } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
	          children.push(childNodes[j]);
	        }
	      }
	    }
	    return new Dom7(unique(children));
	  }
	  function remove() {
	    for (var i = 0; i < this.length; i += 1) {
	      if (this[i].parentNode) { this[i].parentNode.removeChild(this[i]); }
	    }
	    return this;
	  }
	  function add() {
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];

	    var dom = this;
	    var i;
	    var j;
	    for (i = 0; i < args.length; i += 1) {
	      var toAdd = $(args[i]);
	      for (j = 0; j < toAdd.length; j += 1) {
	        dom[dom.length] = toAdd[j];
	        dom.length += 1;
	      }
	    }
	    return dom;
	  }

	  var Methods = {
	    addClass: addClass,
	    removeClass: removeClass,
	    hasClass: hasClass,
	    toggleClass: toggleClass,
	    attr: attr,
	    removeAttr: removeAttr,
	    data: data,
	    transform: transform,
	    transition: transition,
	    on: on,
	    off: off,
	    trigger: trigger,
	    transitionEnd: transitionEnd,
	    outerWidth: outerWidth,
	    outerHeight: outerHeight,
	    offset: offset,
	    css: css,
	    each: each,
	    html: html,
	    text: text,
	    is: is,
	    index: index,
	    eq: eq,
	    append: append,
	    prepend: prepend,
	    next: next,
	    nextAll: nextAll,
	    prev: prev,
	    prevAll: prevAll,
	    parent: parent,
	    parents: parents,
	    closest: closest,
	    find: find,
	    children: children,
	    remove: remove,
	    add: add,
	    styles: styles,
	  };

	  Object.keys(Methods).forEach(function (methodName) {
	    $.fn[methodName] = $.fn[methodName] || Methods[methodName];
	  });

	  var Utils = {
	    deleteProps: function deleteProps(obj) {
	      var object = obj;
	      Object.keys(object).forEach(function (key) {
	        try {
	          object[key] = null;
	        } catch (e) {
	          // no getter for object
	        }
	        try {
	          delete object[key];
	        } catch (e) {
	          // something got wrong
	        }
	      });
	    },
	    nextTick: function nextTick(callback, delay) {
	      if ( delay === void 0 ) delay = 0;

	      return setTimeout(callback, delay);
	    },
	    now: function now() {
	      return Date.now();
	    },
	    getTranslate: function getTranslate(el, axis) {
	      if ( axis === void 0 ) axis = 'x';

	      var matrix;
	      var curTransform;
	      var transformMatrix;

	      var curStyle = win.getComputedStyle(el, null);

	      if (win.WebKitCSSMatrix) {
	        curTransform = curStyle.transform || curStyle.webkitTransform;
	        if (curTransform.split(',').length > 6) {
	          curTransform = curTransform.split(', ').map(function (a) { return a.replace(',', '.'); }).join(', ');
	        }
	        // Some old versions of Webkit choke when 'none' is passed; pass
	        // empty string instead in this case
	        transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
	      } else {
	        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
	        matrix = transformMatrix.toString().split(',');
	      }

	      if (axis === 'x') {
	        // Latest Chrome and webkits Fix
	        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m41; }
	        // Crazy IE10 Matrix
	        else if (matrix.length === 16) { curTransform = parseFloat(matrix[12]); }
	        // Normal Browsers
	        else { curTransform = parseFloat(matrix[4]); }
	      }
	      if (axis === 'y') {
	        // Latest Chrome and webkits Fix
	        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m42; }
	        // Crazy IE10 Matrix
	        else if (matrix.length === 16) { curTransform = parseFloat(matrix[13]); }
	        // Normal Browsers
	        else { curTransform = parseFloat(matrix[5]); }
	      }
	      return curTransform || 0;
	    },
	    parseUrlQuery: function parseUrlQuery(url) {
	      var query = {};
	      var urlToParse = url || win.location.href;
	      var i;
	      var params;
	      var param;
	      var length;
	      if (typeof urlToParse === 'string' && urlToParse.length) {
	        urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
	        params = urlToParse.split('&').filter(function (paramsPart) { return paramsPart !== ''; });
	        length = params.length;

	        for (i = 0; i < length; i += 1) {
	          param = params[i].replace(/#\S+/g, '').split('=');
	          query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
	        }
	      }
	      return query;
	    },
	    isObject: function isObject(o) {
	      return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
	    },
	    extend: function extend() {
	      var args = [], len$1 = arguments.length;
	      while ( len$1-- ) args[ len$1 ] = arguments[ len$1 ];

	      var to = Object(args[0]);
	      for (var i = 1; i < args.length; i += 1) {
	        var nextSource = args[i];
	        if (nextSource !== undefined && nextSource !== null) {
	          var keysArray = Object.keys(Object(nextSource));
	          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
	            var nextKey = keysArray[nextIndex];
	            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	            if (desc !== undefined && desc.enumerable) {
	              if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
	                Utils.extend(to[nextKey], nextSource[nextKey]);
	              } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
	                to[nextKey] = {};
	                Utils.extend(to[nextKey], nextSource[nextKey]);
	              } else {
	                to[nextKey] = nextSource[nextKey];
	              }
	            }
	          }
	        }
	      }
	      return to;
	    },
	  };

	  var Support = (function Support() {
	    var testDiv = doc.createElement('div');
	    return {
	      touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch() {
	        return !!((win.navigator.maxTouchPoints > 0) || ('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch));
	      }()),

	      pointerEvents: !!(win.navigator.pointerEnabled || win.PointerEvent || ('maxTouchPoints' in win.navigator && win.navigator.maxTouchPoints > 0)),
	      prefixedPointerEvents: !!win.navigator.msPointerEnabled,

	      transition: (function checkTransition() {
	        var style = testDiv.style;
	        return ('transition' in style || 'webkitTransition' in style || 'MozTransition' in style);
	      }()),
	      transforms3d: (win.Modernizr && win.Modernizr.csstransforms3d === true) || (function checkTransforms3d() {
	        var style = testDiv.style;
	        return ('webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style);
	      }()),

	      flexbox: (function checkFlexbox() {
	        var style = testDiv.style;
	        var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
	        for (var i = 0; i < styles.length; i += 1) {
	          if (styles[i] in style) { return true; }
	        }
	        return false;
	      }()),

	      observer: (function checkObserver() {
	        return ('MutationObserver' in win || 'WebkitMutationObserver' in win);
	      }()),

	      passiveListener: (function checkPassiveListener() {
	        var supportsPassive = false;
	        try {
	          var opts = Object.defineProperty({}, 'passive', {
	            // eslint-disable-next-line
	            get: function get() {
	              supportsPassive = true;
	            },
	          });
	          win.addEventListener('testPassiveListener', null, opts);
	        } catch (e) {
	          // No support
	        }
	        return supportsPassive;
	      }()),

	      gestures: (function checkGestures() {
	        return 'ongesturestart' in win;
	      }()),
	    };
	  }());

	  var Browser = (function Browser() {
	    function isSafari() {
	      var ua = win.navigator.userAgent.toLowerCase();
	      return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
	    }
	    return {
	      isIE: !!win.navigator.userAgent.match(/Trident/g) || !!win.navigator.userAgent.match(/MSIE/g),
	      isEdge: !!win.navigator.userAgent.match(/Edge/g),
	      isSafari: isSafari(),
	      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
	    };
	  }());

	  var SwiperClass = function SwiperClass(params) {
	    if ( params === void 0 ) params = {};

	    var self = this;
	    self.params = params;

	    // Events
	    self.eventsListeners = {};

	    if (self.params && self.params.on) {
	      Object.keys(self.params.on).forEach(function (eventName) {
	        self.on(eventName, self.params.on[eventName]);
	      });
	    }
	  };

	  var staticAccessors = { components: { configurable: true } };

	  SwiperClass.prototype.on = function on (events, handler, priority) {
	    var self = this;
	    if (typeof handler !== 'function') { return self; }
	    var method = priority ? 'unshift' : 'push';
	    events.split(' ').forEach(function (event) {
	      if (!self.eventsListeners[event]) { self.eventsListeners[event] = []; }
	      self.eventsListeners[event][method](handler);
	    });
	    return self;
	  };

	  SwiperClass.prototype.once = function once (events, handler, priority) {
	    var self = this;
	    if (typeof handler !== 'function') { return self; }
	    function onceHandler() {
	        var args = [], len = arguments.length;
	        while ( len-- ) args[ len ] = arguments[ len ];

	      handler.apply(self, args);
	      self.off(events, onceHandler);
	      if (onceHandler.f7proxy) {
	        delete onceHandler.f7proxy;
	      }
	    }
	    onceHandler.f7proxy = handler;
	    return self.on(events, onceHandler, priority);
	  };

	  SwiperClass.prototype.off = function off (events, handler) {
	    var self = this;
	    if (!self.eventsListeners) { return self; }
	    events.split(' ').forEach(function (event) {
	      if (typeof handler === 'undefined') {
	        self.eventsListeners[event] = [];
	      } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
	        self.eventsListeners[event].forEach(function (eventHandler, index) {
	          if (eventHandler === handler || (eventHandler.f7proxy && eventHandler.f7proxy === handler)) {
	            self.eventsListeners[event].splice(index, 1);
	          }
	        });
	      }
	    });
	    return self;
	  };

	  SwiperClass.prototype.emit = function emit () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];

	    var self = this;
	    if (!self.eventsListeners) { return self; }
	    var events;
	    var data;
	    var context;
	    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
	      events = args[0];
	      data = args.slice(1, args.length);
	      context = self;
	    } else {
	      events = args[0].events;
	      data = args[0].data;
	      context = args[0].context || self;
	    }
	    var eventsArray = Array.isArray(events) ? events : events.split(' ');
	    eventsArray.forEach(function (event) {
	      if (self.eventsListeners && self.eventsListeners[event]) {
	        var handlers = [];
	        self.eventsListeners[event].forEach(function (eventHandler) {
	          handlers.push(eventHandler);
	        });
	        handlers.forEach(function (eventHandler) {
	          eventHandler.apply(context, data);
	        });
	      }
	    });
	    return self;
	  };

	  SwiperClass.prototype.useModulesParams = function useModulesParams (instanceParams) {
	    var instance = this;
	    if (!instance.modules) { return; }
	    Object.keys(instance.modules).forEach(function (moduleName) {
	      var module = instance.modules[moduleName];
	      // Extend params
	      if (module.params) {
	        Utils.extend(instanceParams, module.params);
	      }
	    });
	  };

	  SwiperClass.prototype.useModules = function useModules (modulesParams) {
	      if ( modulesParams === void 0 ) modulesParams = {};

	    var instance = this;
	    if (!instance.modules) { return; }
	    Object.keys(instance.modules).forEach(function (moduleName) {
	      var module = instance.modules[moduleName];
	      var moduleParams = modulesParams[moduleName] || {};
	      // Extend instance methods and props
	      if (module.instance) {
	        Object.keys(module.instance).forEach(function (modulePropName) {
	          var moduleProp = module.instance[modulePropName];
	          if (typeof moduleProp === 'function') {
	            instance[modulePropName] = moduleProp.bind(instance);
	          } else {
	            instance[modulePropName] = moduleProp;
	          }
	        });
	      }
	      // Add event listeners
	      if (module.on && instance.on) {
	        Object.keys(module.on).forEach(function (moduleEventName) {
	          instance.on(moduleEventName, module.on[moduleEventName]);
	        });
	      }

	      // Module create callback
	      if (module.create) {
	        module.create.bind(instance)(moduleParams);
	      }
	    });
	  };

	  staticAccessors.components.set = function (components) {
	    var Class = this;
	    if (!Class.use) { return; }
	    Class.use(components);
	  };

	  SwiperClass.installModule = function installModule (module) {
	      var params = [], len = arguments.length - 1;
	      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

	    var Class = this;
	    if (!Class.prototype.modules) { Class.prototype.modules = {}; }
	    var name = module.name || (((Object.keys(Class.prototype.modules).length) + "_" + (Utils.now())));
	    Class.prototype.modules[name] = module;
	    // Prototype
	    if (module.proto) {
	      Object.keys(module.proto).forEach(function (key) {
	        Class.prototype[key] = module.proto[key];
	      });
	    }
	    // Class
	    if (module.static) {
	      Object.keys(module.static).forEach(function (key) {
	        Class[key] = module.static[key];
	      });
	    }
	    // Callback
	    if (module.install) {
	      module.install.apply(Class, params);
	    }
	    return Class;
	  };

	  SwiperClass.use = function use (module) {
	      var params = [], len = arguments.length - 1;
	      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

	    var Class = this;
	    if (Array.isArray(module)) {
	      module.forEach(function (m) { return Class.installModule(m); });
	      return Class;
	    }
	    return Class.installModule.apply(Class, [ module ].concat( params ));
	  };

	  Object.defineProperties( SwiperClass, staticAccessors );

	  function updateSize () {
	    var swiper = this;
	    var width;
	    var height;
	    var $el = swiper.$el;
	    if (typeof swiper.params.width !== 'undefined') {
	      width = swiper.params.width;
	    } else {
	      width = $el[0].clientWidth;
	    }
	    if (typeof swiper.params.height !== 'undefined') {
	      height = swiper.params.height;
	    } else {
	      height = $el[0].clientHeight;
	    }
	    if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
	      return;
	    }

	    // Subtract paddings
	    width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
	    height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

	    Utils.extend(swiper, {
	      width: width,
	      height: height,
	      size: swiper.isHorizontal() ? width : height,
	    });
	  }

	  function updateSlides () {
	    var swiper = this;
	    var params = swiper.params;

	    var $wrapperEl = swiper.$wrapperEl;
	    var swiperSize = swiper.size;
	    var rtl = swiper.rtlTranslate;
	    var wrongRTL = swiper.wrongRTL;
	    var isVirtual = swiper.virtual && params.virtual.enabled;
	    var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
	    var slides = $wrapperEl.children(("." + (swiper.params.slideClass)));
	    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
	    var snapGrid = [];
	    var slidesGrid = [];
	    var slidesSizesGrid = [];

	    var offsetBefore = params.slidesOffsetBefore;
	    if (typeof offsetBefore === 'function') {
	      offsetBefore = params.slidesOffsetBefore.call(swiper);
	    }

	    var offsetAfter = params.slidesOffsetAfter;
	    if (typeof offsetAfter === 'function') {
	      offsetAfter = params.slidesOffsetAfter.call(swiper);
	    }

	    var previousSnapGridLength = swiper.snapGrid.length;
	    var previousSlidesGridLength = swiper.snapGrid.length;

	    var spaceBetween = params.spaceBetween;
	    var slidePosition = -offsetBefore;
	    var prevSlideSize = 0;
	    var index = 0;
	    if (typeof swiperSize === 'undefined') {
	      return;
	    }
	    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
	      spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
	    }

	    swiper.virtualSize = -spaceBetween;

	    // reset margins
	    if (rtl) { slides.css({ marginLeft: '', marginTop: '' }); }
	    else { slides.css({ marginRight: '', marginBottom: '' }); }

	    var slidesNumberEvenToRows;
	    if (params.slidesPerColumn > 1) {
	      if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
	        slidesNumberEvenToRows = slidesLength;
	      } else {
	        slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
	      }
	      if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
	        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
	      }
	    }

	    // Calc slides
	    var slideSize;
	    var slidesPerColumn = params.slidesPerColumn;
	    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
	    var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
	    for (var i = 0; i < slidesLength; i += 1) {
	      slideSize = 0;
	      var slide = slides.eq(i);
	      if (params.slidesPerColumn > 1) {
	        // Set slides order
	        var newSlideOrderIndex = (void 0);
	        var column = (void 0);
	        var row = (void 0);
	        if (
	          (params.slidesPerColumnFill === 'column')
	          || (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1)
	        ) {
	          if (params.slidesPerColumnFill === 'column') {
	            column = Math.floor(i / slidesPerColumn);
	            row = i - (column * slidesPerColumn);
	            if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
	              row += 1;
	              if (row >= slidesPerColumn) {
	                row = 0;
	                column += 1;
	              }
	            }
	          } else {
	            var groupIndex = Math.floor(i / params.slidesPerGroup);
	            row = Math.floor(i / params.slidesPerView) - groupIndex * params.slidesPerColumn;
	            column = i - row * params.slidesPerView - groupIndex * params.slidesPerView;
	          }
	          newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
	          slide
	            .css({
	              '-webkit-box-ordinal-group': newSlideOrderIndex,
	              '-moz-box-ordinal-group': newSlideOrderIndex,
	              '-ms-flex-order': newSlideOrderIndex,
	              '-webkit-order': newSlideOrderIndex,
	              order: newSlideOrderIndex,
	            });
	        } else {
	          row = Math.floor(i / slidesPerRow);
	          column = i - (row * slidesPerRow);
	        }
	        slide
	          .css(
	            ("margin-" + (swiper.isHorizontal() ? 'top' : 'left')),
	            (row !== 0 && params.spaceBetween) && (((params.spaceBetween) + "px"))
	          )
	          .attr('data-swiper-column', column)
	          .attr('data-swiper-row', row);
	      }
	      if (slide.css('display') === 'none') { continue; } // eslint-disable-line

	      if (params.slidesPerView === 'auto') {
	        var slideStyles = win.getComputedStyle(slide[0], null);
	        var currentTransform = slide[0].style.transform;
	        var currentWebKitTransform = slide[0].style.webkitTransform;
	        if (currentTransform) {
	          slide[0].style.transform = 'none';
	        }
	        if (currentWebKitTransform) {
	          slide[0].style.webkitTransform = 'none';
	        }
	        if (params.roundLengths) {
	          slideSize = swiper.isHorizontal()
	            ? slide.outerWidth(true)
	            : slide.outerHeight(true);
	        } else {
	          // eslint-disable-next-line
	          if (swiper.isHorizontal()) {
	            var width = parseFloat(slideStyles.getPropertyValue('width'));
	            var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
	            var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
	            var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
	            var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
	            var boxSizing = slideStyles.getPropertyValue('box-sizing');
	            if (boxSizing && boxSizing === 'border-box' && !Browser.isIE) {
	              slideSize = width + marginLeft + marginRight;
	            } else {
	              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
	            }
	          } else {
	            var height = parseFloat(slideStyles.getPropertyValue('height'));
	            var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
	            var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
	            var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
	            var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
	            var boxSizing$1 = slideStyles.getPropertyValue('box-sizing');
	            if (boxSizing$1 && boxSizing$1 === 'border-box' && !Browser.isIE) {
	              slideSize = height + marginTop + marginBottom;
	            } else {
	              slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
	            }
	          }
	        }
	        if (currentTransform) {
	          slide[0].style.transform = currentTransform;
	        }
	        if (currentWebKitTransform) {
	          slide[0].style.webkitTransform = currentWebKitTransform;
	        }
	        if (params.roundLengths) { slideSize = Math.floor(slideSize); }
	      } else {
	        slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
	        if (params.roundLengths) { slideSize = Math.floor(slideSize); }

	        if (slides[i]) {
	          if (swiper.isHorizontal()) {
	            slides[i].style.width = slideSize + "px";
	          } else {
	            slides[i].style.height = slideSize + "px";
	          }
	        }
	      }
	      if (slides[i]) {
	        slides[i].swiperSlideSize = slideSize;
	      }
	      slidesSizesGrid.push(slideSize);


	      if (params.centeredSlides) {
	        slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
	        if (prevSlideSize === 0 && i !== 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
	        if (i === 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
	        if (Math.abs(slidePosition) < 1 / 1000) { slidePosition = 0; }
	        if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
	        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
	        slidesGrid.push(slidePosition);
	      } else {
	        if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
	        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
	        slidesGrid.push(slidePosition);
	        slidePosition = slidePosition + slideSize + spaceBetween;
	      }

	      swiper.virtualSize += slideSize + spaceBetween;

	      prevSlideSize = slideSize;

	      index += 1;
	    }
	    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
	    var newSlidesGrid;

	    if (
	      rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
	      $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") });
	    }
	    if (!Support.flexbox || params.setWrapperSize) {
	      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
	      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
	    }

	    if (params.slidesPerColumn > 1) {
	      swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
	      swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
	      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
	      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
	      if (params.centeredSlides) {
	        newSlidesGrid = [];
	        for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
	          var slidesGridItem = snapGrid[i$1];
	          if (params.roundLengths) { slidesGridItem = Math.floor(slidesGridItem); }
	          if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) { newSlidesGrid.push(slidesGridItem); }
	        }
	        snapGrid = newSlidesGrid;
	      }
	    }

	    // Remove last grid elements depending on width
	    if (!params.centeredSlides) {
	      newSlidesGrid = [];
	      for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
	        var slidesGridItem$1 = snapGrid[i$2];
	        if (params.roundLengths) { slidesGridItem$1 = Math.floor(slidesGridItem$1); }
	        if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
	          newSlidesGrid.push(slidesGridItem$1);
	        }
	      }
	      snapGrid = newSlidesGrid;
	      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
	        snapGrid.push(swiper.virtualSize - swiperSize);
	      }
	    }
	    if (snapGrid.length === 0) { snapGrid = [0]; }

	    if (params.spaceBetween !== 0) {
	      if (swiper.isHorizontal()) {
	        if (rtl) { slides.css({ marginLeft: (spaceBetween + "px") }); }
	        else { slides.css({ marginRight: (spaceBetween + "px") }); }
	      } else { slides.css({ marginBottom: (spaceBetween + "px") }); }
	    }

	    if (params.centerInsufficientSlides) {
	      var allSlidesSize = 0;
	      slidesSizesGrid.forEach(function (slideSizeValue) {
	        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
	      });
	      allSlidesSize -= params.spaceBetween;
	      if (allSlidesSize < swiperSize) {
	        var allSlidesOffset = (swiperSize - allSlidesSize) / 2;
	        snapGrid.forEach(function (snap, snapIndex) {
	          snapGrid[snapIndex] = snap - allSlidesOffset;
	        });
	        slidesGrid.forEach(function (snap, snapIndex) {
	          slidesGrid[snapIndex] = snap + allSlidesOffset;
	        });
	      }
	    }

	    Utils.extend(swiper, {
	      slides: slides,
	      snapGrid: snapGrid,
	      slidesGrid: slidesGrid,
	      slidesSizesGrid: slidesSizesGrid,
	    });

	    if (slidesLength !== previousSlidesLength) {
	      swiper.emit('slidesLengthChange');
	    }
	    if (snapGrid.length !== previousSnapGridLength) {
	      if (swiper.params.watchOverflow) { swiper.checkOverflow(); }
	      swiper.emit('snapGridLengthChange');
	    }
	    if (slidesGrid.length !== previousSlidesGridLength) {
	      swiper.emit('slidesGridLengthChange');
	    }

	    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
	      swiper.updateSlidesOffset();
	    }
	  }

	  function updateAutoHeight (speed) {
	    var swiper = this;
	    var activeSlides = [];
	    var newHeight = 0;
	    var i;
	    if (typeof speed === 'number') {
	      swiper.setTransition(speed);
	    } else if (speed === true) {
	      swiper.setTransition(swiper.params.speed);
	    }
	    // Find slides currently in view
	    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
	      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
	        var index = swiper.activeIndex + i;
	        if (index > swiper.slides.length) { break; }
	        activeSlides.push(swiper.slides.eq(index)[0]);
	      }
	    } else {
	      activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
	    }

	    // Find new height from highest slide in view
	    for (i = 0; i < activeSlides.length; i += 1) {
	      if (typeof activeSlides[i] !== 'undefined') {
	        var height = activeSlides[i].offsetHeight;
	        newHeight = height > newHeight ? height : newHeight;
	      }
	    }

	    // Update Height
	    if (newHeight) { swiper.$wrapperEl.css('height', (newHeight + "px")); }
	  }

	  function updateSlidesOffset () {
	    var swiper = this;
	    var slides = swiper.slides;
	    for (var i = 0; i < slides.length; i += 1) {
	      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
	    }
	  }

	  function updateSlidesProgress (translate) {
	    if ( translate === void 0 ) translate = (this && this.translate) || 0;

	    var swiper = this;
	    var params = swiper.params;

	    var slides = swiper.slides;
	    var rtl = swiper.rtlTranslate;

	    if (slides.length === 0) { return; }
	    if (typeof slides[0].swiperSlideOffset === 'undefined') { swiper.updateSlidesOffset(); }

	    var offsetCenter = -translate;
	    if (rtl) { offsetCenter = translate; }

	    // Visible Slides
	    slides.removeClass(params.slideVisibleClass);

	    swiper.visibleSlidesIndexes = [];
	    swiper.visibleSlides = [];

	    for (var i = 0; i < slides.length; i += 1) {
	      var slide = slides[i];
	      var slideProgress = (
	        (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
	      ) / (slide.swiperSlideSize + params.spaceBetween);
	      if (params.watchSlidesVisibility) {
	        var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
	        var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
	        var isVisible = (slideBefore >= 0 && slideBefore < swiper.size - 1)
	                  || (slideAfter > 1 && slideAfter <= swiper.size)
	                  || (slideBefore <= 0 && slideAfter >= swiper.size);
	        if (isVisible) {
	          swiper.visibleSlides.push(slide);
	          swiper.visibleSlidesIndexes.push(i);
	          slides.eq(i).addClass(params.slideVisibleClass);
	        }
	      }
	      slide.progress = rtl ? -slideProgress : slideProgress;
	    }
	    swiper.visibleSlides = $(swiper.visibleSlides);
	  }

	  function updateProgress (translate) {
	    if ( translate === void 0 ) translate = (this && this.translate) || 0;

	    var swiper = this;
	    var params = swiper.params;

	    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
	    var progress = swiper.progress;
	    var isBeginning = swiper.isBeginning;
	    var isEnd = swiper.isEnd;
	    var wasBeginning = isBeginning;
	    var wasEnd = isEnd;
	    if (translatesDiff === 0) {
	      progress = 0;
	      isBeginning = true;
	      isEnd = true;
	    } else {
	      progress = (translate - swiper.minTranslate()) / (translatesDiff);
	      isBeginning = progress <= 0;
	      isEnd = progress >= 1;
	    }
	    Utils.extend(swiper, {
	      progress: progress,
	      isBeginning: isBeginning,
	      isEnd: isEnd,
	    });

	    if (params.watchSlidesProgress || params.watchSlidesVisibility) { swiper.updateSlidesProgress(translate); }

	    if (isBeginning && !wasBeginning) {
	      swiper.emit('reachBeginning toEdge');
	    }
	    if (isEnd && !wasEnd) {
	      swiper.emit('reachEnd toEdge');
	    }
	    if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
	      swiper.emit('fromEdge');
	    }

	    swiper.emit('progress', progress);
	  }

	  function updateSlidesClasses () {
	    var swiper = this;

	    var slides = swiper.slides;
	    var params = swiper.params;
	    var $wrapperEl = swiper.$wrapperEl;
	    var activeIndex = swiper.activeIndex;
	    var realIndex = swiper.realIndex;
	    var isVirtual = swiper.virtual && params.virtual.enabled;

	    slides.removeClass(((params.slideActiveClass) + " " + (params.slideNextClass) + " " + (params.slidePrevClass) + " " + (params.slideDuplicateActiveClass) + " " + (params.slideDuplicateNextClass) + " " + (params.slideDuplicatePrevClass)));

	    var activeSlide;
	    if (isVirtual) {
	      activeSlide = swiper.$wrapperEl.find(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + activeIndex + "\"]"));
	    } else {
	      activeSlide = slides.eq(activeIndex);
	    }

	    // Active classes
	    activeSlide.addClass(params.slideActiveClass);

	    if (params.loop) {
	      // Duplicate to all looped slides
	      if (activeSlide.hasClass(params.slideDuplicateClass)) {
	        $wrapperEl
	          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + realIndex + "\"]"))
	          .addClass(params.slideDuplicateActiveClass);
	      } else {
	        $wrapperEl
	          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]"))
	          .addClass(params.slideDuplicateActiveClass);
	      }
	    }
	    // Next Slide
	    var nextSlide = activeSlide.nextAll(("." + (params.slideClass))).eq(0).addClass(params.slideNextClass);
	    if (params.loop && nextSlide.length === 0) {
	      nextSlide = slides.eq(0);
	      nextSlide.addClass(params.slideNextClass);
	    }
	    // Prev Slide
	    var prevSlide = activeSlide.prevAll(("." + (params.slideClass))).eq(0).addClass(params.slidePrevClass);
	    if (params.loop && prevSlide.length === 0) {
	      prevSlide = slides.eq(-1);
	      prevSlide.addClass(params.slidePrevClass);
	    }
	    if (params.loop) {
	      // Duplicate to all looped slides
	      if (nextSlide.hasClass(params.slideDuplicateClass)) {
	        $wrapperEl
	          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
	          .addClass(params.slideDuplicateNextClass);
	      } else {
	        $wrapperEl
	          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
	          .addClass(params.slideDuplicateNextClass);
	      }
	      if (prevSlide.hasClass(params.slideDuplicateClass)) {
	        $wrapperEl
	          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
	          .addClass(params.slideDuplicatePrevClass);
	      } else {
	        $wrapperEl
	          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
	          .addClass(params.slideDuplicatePrevClass);
	      }
	    }
	  }

	  function updateActiveIndex (newActiveIndex) {
	    var swiper = this;
	    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
	    var slidesGrid = swiper.slidesGrid;
	    var snapGrid = swiper.snapGrid;
	    var params = swiper.params;
	    var previousIndex = swiper.activeIndex;
	    var previousRealIndex = swiper.realIndex;
	    var previousSnapIndex = swiper.snapIndex;
	    var activeIndex = newActiveIndex;
	    var snapIndex;
	    if (typeof activeIndex === 'undefined') {
	      for (var i = 0; i < slidesGrid.length; i += 1) {
	        if (typeof slidesGrid[i + 1] !== 'undefined') {
	          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
	            activeIndex = i;
	          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
	            activeIndex = i + 1;
	          }
	        } else if (translate >= slidesGrid[i]) {
	          activeIndex = i;
	        }
	      }
	      // Normalize slideIndex
	      if (params.normalizeSlideIndex) {
	        if (activeIndex < 0 || typeof activeIndex === 'undefined') { activeIndex = 0; }
	      }
	    }
	    if (snapGrid.indexOf(translate) >= 0) {
	      snapIndex = snapGrid.indexOf(translate);
	    } else {
	      snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
	    }
	    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }
	    if (activeIndex === previousIndex) {
	      if (snapIndex !== previousSnapIndex) {
	        swiper.snapIndex = snapIndex;
	        swiper.emit('snapIndexChange');
	      }
	      return;
	    }

	    // Get real index
	    var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

	    Utils.extend(swiper, {
	      snapIndex: snapIndex,
	      realIndex: realIndex,
	      previousIndex: previousIndex,
	      activeIndex: activeIndex,
	    });
	    swiper.emit('activeIndexChange');
	    swiper.emit('snapIndexChange');
	    if (previousRealIndex !== realIndex) {
	      swiper.emit('realIndexChange');
	    }
	    if (swiper.initialized || swiper.runCallbacksOnInit) {
	      swiper.emit('slideChange');
	    }
	  }

	  function updateClickedSlide (e) {
	    var swiper = this;
	    var params = swiper.params;
	    var slide = $(e.target).closest(("." + (params.slideClass)))[0];
	    var slideFound = false;
	    if (slide) {
	      for (var i = 0; i < swiper.slides.length; i += 1) {
	        if (swiper.slides[i] === slide) { slideFound = true; }
	      }
	    }

	    if (slide && slideFound) {
	      swiper.clickedSlide = slide;
	      if (swiper.virtual && swiper.params.virtual.enabled) {
	        swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
	      } else {
	        swiper.clickedIndex = $(slide).index();
	      }
	    } else {
	      swiper.clickedSlide = undefined;
	      swiper.clickedIndex = undefined;
	      return;
	    }
	    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
	      swiper.slideToClickedSlide();
	    }
	  }

	  var update = {
	    updateSize: updateSize,
	    updateSlides: updateSlides,
	    updateAutoHeight: updateAutoHeight,
	    updateSlidesOffset: updateSlidesOffset,
	    updateSlidesProgress: updateSlidesProgress,
	    updateProgress: updateProgress,
	    updateSlidesClasses: updateSlidesClasses,
	    updateActiveIndex: updateActiveIndex,
	    updateClickedSlide: updateClickedSlide,
	  };

	  function getTranslate (axis) {
	    if ( axis === void 0 ) axis = this.isHorizontal() ? 'x' : 'y';

	    var swiper = this;

	    var params = swiper.params;
	    var rtl = swiper.rtlTranslate;
	    var translate = swiper.translate;
	    var $wrapperEl = swiper.$wrapperEl;

	    if (params.virtualTranslate) {
	      return rtl ? -translate : translate;
	    }

	    var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
	    if (rtl) { currentTranslate = -currentTranslate; }

	    return currentTranslate || 0;
	  }

	  function setTranslate (translate, byController) {
	    var swiper = this;
	    var rtl = swiper.rtlTranslate;
	    var params = swiper.params;
	    var $wrapperEl = swiper.$wrapperEl;
	    var progress = swiper.progress;
	    var x = 0;
	    var y = 0;
	    var z = 0;

	    if (swiper.isHorizontal()) {
	      x = rtl ? -translate : translate;
	    } else {
	      y = translate;
	    }

	    if (params.roundLengths) {
	      x = Math.floor(x);
	      y = Math.floor(y);
	    }

	    if (!params.virtualTranslate) {
	      if (Support.transforms3d) { $wrapperEl.transform(("translate3d(" + x + "px, " + y + "px, " + z + "px)")); }
	      else { $wrapperEl.transform(("translate(" + x + "px, " + y + "px)")); }
	    }
	    swiper.previousTranslate = swiper.translate;
	    swiper.translate = swiper.isHorizontal() ? x : y;

	    // Check if we need to update progress
	    var newProgress;
	    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
	    if (translatesDiff === 0) {
	      newProgress = 0;
	    } else {
	      newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
	    }
	    if (newProgress !== progress) {
	      swiper.updateProgress(translate);
	    }

	    swiper.emit('setTranslate', swiper.translate, byController);
	  }

	  function minTranslate () {
	    return (-this.snapGrid[0]);
	  }

	  function maxTranslate () {
	    return (-this.snapGrid[this.snapGrid.length - 1]);
	  }

	  var translate = {
	    getTranslate: getTranslate,
	    setTranslate: setTranslate,
	    minTranslate: minTranslate,
	    maxTranslate: maxTranslate,
	  };

	  function setTransition (duration, byController) {
	    var swiper = this;

	    swiper.$wrapperEl.transition(duration);

	    swiper.emit('setTransition', duration, byController);
	  }

	  function transitionStart (runCallbacks, direction) {
	    if ( runCallbacks === void 0 ) runCallbacks = true;

	    var swiper = this;
	    var activeIndex = swiper.activeIndex;
	    var params = swiper.params;
	    var previousIndex = swiper.previousIndex;
	    if (params.autoHeight) {
	      swiper.updateAutoHeight();
	    }

	    var dir = direction;
	    if (!dir) {
	      if (activeIndex > previousIndex) { dir = 'next'; }
	      else if (activeIndex < previousIndex) { dir = 'prev'; }
	      else { dir = 'reset'; }
	    }

	    swiper.emit('transitionStart');

	    if (runCallbacks && activeIndex !== previousIndex) {
	      if (dir === 'reset') {
	        swiper.emit('slideResetTransitionStart');
	        return;
	      }
	      swiper.emit('slideChangeTransitionStart');
	      if (dir === 'next') {
	        swiper.emit('slideNextTransitionStart');
	      } else {
	        swiper.emit('slidePrevTransitionStart');
	      }
	    }
	  }

	  function transitionEnd$1 (runCallbacks, direction) {
	    if ( runCallbacks === void 0 ) runCallbacks = true;

	    var swiper = this;
	    var activeIndex = swiper.activeIndex;
	    var previousIndex = swiper.previousIndex;
	    swiper.animating = false;
	    swiper.setTransition(0);

	    var dir = direction;
	    if (!dir) {
	      if (activeIndex > previousIndex) { dir = 'next'; }
	      else if (activeIndex < previousIndex) { dir = 'prev'; }
	      else { dir = 'reset'; }
	    }

	    swiper.emit('transitionEnd');

	    if (runCallbacks && activeIndex !== previousIndex) {
	      if (dir === 'reset') {
	        swiper.emit('slideResetTransitionEnd');
	        return;
	      }
	      swiper.emit('slideChangeTransitionEnd');
	      if (dir === 'next') {
	        swiper.emit('slideNextTransitionEnd');
	      } else {
	        swiper.emit('slidePrevTransitionEnd');
	      }
	    }
	  }

	  var transition$1 = {
	    setTransition: setTransition,
	    transitionStart: transitionStart,
	    transitionEnd: transitionEnd$1,
	  };

	  function slideTo (index, speed, runCallbacks, internal) {
	    if ( index === void 0 ) index = 0;
	    if ( speed === void 0 ) speed = this.params.speed;
	    if ( runCallbacks === void 0 ) runCallbacks = true;

	    var swiper = this;
	    var slideIndex = index;
	    if (slideIndex < 0) { slideIndex = 0; }

	    var params = swiper.params;
	    var snapGrid = swiper.snapGrid;
	    var slidesGrid = swiper.slidesGrid;
	    var previousIndex = swiper.previousIndex;
	    var activeIndex = swiper.activeIndex;
	    var rtl = swiper.rtlTranslate;
	    if (swiper.animating && params.preventInteractionOnTransition) {
	      return false;
	    }

	    var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
	    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }

	    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
	      swiper.emit('beforeSlideChangeStart');
	    }

	    var translate = -snapGrid[snapIndex];

	    // Update progress
	    swiper.updateProgress(translate);

	    // Normalize slideIndex
	    if (params.normalizeSlideIndex) {
	      for (var i = 0; i < slidesGrid.length; i += 1) {
	        if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
	          slideIndex = i;
	        }
	      }
	    }
	    // Directions locks
	    if (swiper.initialized && slideIndex !== activeIndex) {
	      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
	        return false;
	      }
	      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
	        if ((activeIndex || 0) !== slideIndex) { return false; }
	      }
	    }

	    var direction;
	    if (slideIndex > activeIndex) { direction = 'next'; }
	    else if (slideIndex < activeIndex) { direction = 'prev'; }
	    else { direction = 'reset'; }


	    // Update Index
	    if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
	      swiper.updateActiveIndex(slideIndex);
	      // Update Height
	      if (params.autoHeight) {
	        swiper.updateAutoHeight();
	      }
	      swiper.updateSlidesClasses();
	      if (params.effect !== 'slide') {
	        swiper.setTranslate(translate);
	      }
	      if (direction !== 'reset') {
	        swiper.transitionStart(runCallbacks, direction);
	        swiper.transitionEnd(runCallbacks, direction);
	      }
	      return false;
	    }

	    if (speed === 0 || !Support.transition) {
	      swiper.setTransition(0);
	      swiper.setTranslate(translate);
	      swiper.updateActiveIndex(slideIndex);
	      swiper.updateSlidesClasses();
	      swiper.emit('beforeTransitionStart', speed, internal);
	      swiper.transitionStart(runCallbacks, direction);
	      swiper.transitionEnd(runCallbacks, direction);
	    } else {
	      swiper.setTransition(speed);
	      swiper.setTranslate(translate);
	      swiper.updateActiveIndex(slideIndex);
	      swiper.updateSlidesClasses();
	      swiper.emit('beforeTransitionStart', speed, internal);
	      swiper.transitionStart(runCallbacks, direction);
	      if (!swiper.animating) {
	        swiper.animating = true;
	        if (!swiper.onSlideToWrapperTransitionEnd) {
	          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
	            if (!swiper || swiper.destroyed) { return; }
	            if (e.target !== this) { return; }
	            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
	            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
	            swiper.onSlideToWrapperTransitionEnd = null;
	            delete swiper.onSlideToWrapperTransitionEnd;
	            swiper.transitionEnd(runCallbacks, direction);
	          };
	        }
	        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
	        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
	      }
	    }

	    return true;
	  }

	  function slideToLoop (index, speed, runCallbacks, internal) {
	    if ( index === void 0 ) index = 0;
	    if ( speed === void 0 ) speed = this.params.speed;
	    if ( runCallbacks === void 0 ) runCallbacks = true;

	    var swiper = this;
	    var newIndex = index;
	    if (swiper.params.loop) {
	      newIndex += swiper.loopedSlides;
	    }

	    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
	  }

	  /* eslint no-unused-vars: "off" */
	  function slideNext (speed, runCallbacks, internal) {
	    if ( speed === void 0 ) speed = this.params.speed;
	    if ( runCallbacks === void 0 ) runCallbacks = true;

	    var swiper = this;
	    var params = swiper.params;
	    var animating = swiper.animating;
	    if (params.loop) {
	      if (animating) { return false; }
	      swiper.loopFix();
	      // eslint-disable-next-line
	      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
	      return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
	    }
	    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
	  }

	  /* eslint no-unused-vars: "off" */
	  function slidePrev (speed, runCallbacks, internal) {
	    if ( speed === void 0 ) speed = this.params.speed;
	    if ( runCallbacks === void 0 ) runCallbacks = true;

	    var swiper = this;
	    var params = swiper.params;
	    var animating = swiper.animating;
	    var snapGrid = swiper.snapGrid;
	    var slidesGrid = swiper.slidesGrid;
	    var rtlTranslate = swiper.rtlTranslate;

	    if (params.loop) {
	      if (animating) { return false; }
	      swiper.loopFix();
	      // eslint-disable-next-line
	      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
	    }
	    var translate = rtlTranslate ? swiper.translate : -swiper.translate;
	    function normalize(val) {
	      if (val < 0) { return -Math.floor(Math.abs(val)); }
	      return Math.floor(val);
	    }
	    var normalizedTranslate = normalize(translate);
	    var normalizedSnapGrid = snapGrid.map(function (val) { return normalize(val); });
	    var normalizedSlidesGrid = slidesGrid.map(function (val) { return normalize(val); });

	    var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
	    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
	    var prevIndex;
	    if (typeof prevSnap !== 'undefined') {
	      prevIndex = slidesGrid.indexOf(prevSnap);
	      if (prevIndex < 0) { prevIndex = swiper.activeIndex - 1; }
	    }
	    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
	  }

	  /* eslint no-unused-vars: "off" */
	  function slideReset (speed, runCallbacks, internal) {
	    if ( speed === void 0 ) speed = this.params.speed;
	    if ( runCallbacks === void 0 ) runCallbacks = true;

	    var swiper = this;
	    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
	  }

	  /* eslint no-unused-vars: "off" */
	  function slideToClosest (speed, runCallbacks, internal) {
	    if ( speed === void 0 ) speed = this.params.speed;
	    if ( runCallbacks === void 0 ) runCallbacks = true;

	    var swiper = this;
	    var index = swiper.activeIndex;
	    var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);

	    if (snapIndex < swiper.snapGrid.length - 1) {
	      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

	      var currentSnap = swiper.snapGrid[snapIndex];
	      var nextSnap = swiper.snapGrid[snapIndex + 1];

	      if ((translate - currentSnap) > (nextSnap - currentSnap) / 2) {
	        index = swiper.params.slidesPerGroup;
	      }
	    }

	    return swiper.slideTo(index, speed, runCallbacks, internal);
	  }

	  function slideToClickedSlide () {
	    var swiper = this;
	    var params = swiper.params;
	    var $wrapperEl = swiper.$wrapperEl;

	    var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
	    var slideToIndex = swiper.clickedIndex;
	    var realIndex;
	    if (params.loop) {
	      if (swiper.animating) { return; }
	      realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
	      if (params.centeredSlides) {
	        if (
	          (slideToIndex < swiper.loopedSlides - (slidesPerView / 2))
	          || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
	        ) {
	          swiper.loopFix();
	          slideToIndex = $wrapperEl
	            .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
	            .eq(0)
	            .index();

	          Utils.nextTick(function () {
	            swiper.slideTo(slideToIndex);
	          });
	        } else {
	          swiper.slideTo(slideToIndex);
	        }
	      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
	        swiper.loopFix();
	        slideToIndex = $wrapperEl
	          .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
	          .eq(0)
	          .index();

	        Utils.nextTick(function () {
	          swiper.slideTo(slideToIndex);
	        });
	      } else {
	        swiper.slideTo(slideToIndex);
	      }
	    } else {
	      swiper.slideTo(slideToIndex);
	    }
	  }

	  var slide = {
	    slideTo: slideTo,
	    slideToLoop: slideToLoop,
	    slideNext: slideNext,
	    slidePrev: slidePrev,
	    slideReset: slideReset,
	    slideToClosest: slideToClosest,
	    slideToClickedSlide: slideToClickedSlide,
	  };

	  function loopCreate () {
	    var swiper = this;
	    var params = swiper.params;
	    var $wrapperEl = swiper.$wrapperEl;
	    // Remove duplicated slides
	    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();

	    var slides = $wrapperEl.children(("." + (params.slideClass)));

	    if (params.loopFillGroupWithBlank) {
	      var blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
	      if (blankSlidesNum !== params.slidesPerGroup) {
	        for (var i = 0; i < blankSlidesNum; i += 1) {
	          var blankNode = $(doc.createElement('div')).addClass(((params.slideClass) + " " + (params.slideBlankClass)));
	          $wrapperEl.append(blankNode);
	        }
	        slides = $wrapperEl.children(("." + (params.slideClass)));
	      }
	    }

	    if (params.slidesPerView === 'auto' && !params.loopedSlides) { params.loopedSlides = slides.length; }

	    swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
	    swiper.loopedSlides += params.loopAdditionalSlides;
	    if (swiper.loopedSlides > slides.length) {
	      swiper.loopedSlides = slides.length;
	    }

	    var prependSlides = [];
	    var appendSlides = [];
	    slides.each(function (index, el) {
	      var slide = $(el);
	      if (index < swiper.loopedSlides) { appendSlides.push(el); }
	      if (index < slides.length && index >= slides.length - swiper.loopedSlides) { prependSlides.push(el); }
	      slide.attr('data-swiper-slide-index', index);
	    });
	    for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
	      $wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
	    }
	    for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
	      $wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
	    }
	  }

	  function loopFix () {
	    var swiper = this;
	    var params = swiper.params;
	    var activeIndex = swiper.activeIndex;
	    var slides = swiper.slides;
	    var loopedSlides = swiper.loopedSlides;
	    var allowSlidePrev = swiper.allowSlidePrev;
	    var allowSlideNext = swiper.allowSlideNext;
	    var snapGrid = swiper.snapGrid;
	    var rtl = swiper.rtlTranslate;
	    var newIndex;
	    swiper.allowSlidePrev = true;
	    swiper.allowSlideNext = true;

	    var snapTranslate = -snapGrid[activeIndex];
	    var diff = snapTranslate - swiper.getTranslate();


	    // Fix For Negative Oversliding
	    if (activeIndex < loopedSlides) {
	      newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
	      newIndex += loopedSlides;
	      var slideChanged = swiper.slideTo(newIndex, 0, false, true);
	      if (slideChanged && diff !== 0) {
	        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
	      }
	    } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex >= slides.length - loopedSlides)) {
	      // Fix For Positive Oversliding
	      newIndex = -slides.length + activeIndex + loopedSlides;
	      newIndex += loopedSlides;
	      var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
	      if (slideChanged$1 && diff !== 0) {
	        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
	      }
	    }
	    swiper.allowSlidePrev = allowSlidePrev;
	    swiper.allowSlideNext = allowSlideNext;
	  }

	  function loopDestroy () {
	    var swiper = this;
	    var $wrapperEl = swiper.$wrapperEl;
	    var params = swiper.params;
	    var slides = swiper.slides;
	    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + ",." + (params.slideClass) + "." + (params.slideBlankClass))).remove();
	    slides.removeAttr('data-swiper-slide-index');
	  }

	  var loop = {
	    loopCreate: loopCreate,
	    loopFix: loopFix,
	    loopDestroy: loopDestroy,
	  };

	  function setGrabCursor (moving) {
	    var swiper = this;
	    if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
	    var el = swiper.el;
	    el.style.cursor = 'move';
	    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
	    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
	    el.style.cursor = moving ? 'grabbing' : 'grab';
	  }

	  function unsetGrabCursor () {
	    var swiper = this;
	    if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
	    swiper.el.style.cursor = '';
	  }

	  var grabCursor = {
	    setGrabCursor: setGrabCursor,
	    unsetGrabCursor: unsetGrabCursor,
	  };

	  function appendSlide (slides) {
	    var swiper = this;
	    var $wrapperEl = swiper.$wrapperEl;
	    var params = swiper.params;
	    if (params.loop) {
	      swiper.loopDestroy();
	    }
	    if (typeof slides === 'object' && 'length' in slides) {
	      for (var i = 0; i < slides.length; i += 1) {
	        if (slides[i]) { $wrapperEl.append(slides[i]); }
	      }
	    } else {
	      $wrapperEl.append(slides);
	    }
	    if (params.loop) {
	      swiper.loopCreate();
	    }
	    if (!(params.observer && Support.observer)) {
	      swiper.update();
	    }
	  }

	  function prependSlide (slides) {
	    var swiper = this;
	    var params = swiper.params;
	    var $wrapperEl = swiper.$wrapperEl;
	    var activeIndex = swiper.activeIndex;

	    if (params.loop) {
	      swiper.loopDestroy();
	    }
	    var newActiveIndex = activeIndex + 1;
	    if (typeof slides === 'object' && 'length' in slides) {
	      for (var i = 0; i < slides.length; i += 1) {
	        if (slides[i]) { $wrapperEl.prepend(slides[i]); }
	      }
	      newActiveIndex = activeIndex + slides.length;
	    } else {
	      $wrapperEl.prepend(slides);
	    }
	    if (params.loop) {
	      swiper.loopCreate();
	    }
	    if (!(params.observer && Support.observer)) {
	      swiper.update();
	    }
	    swiper.slideTo(newActiveIndex, 0, false);
	  }

	  function addSlide (index, slides) {
	    var swiper = this;
	    var $wrapperEl = swiper.$wrapperEl;
	    var params = swiper.params;
	    var activeIndex = swiper.activeIndex;
	    var activeIndexBuffer = activeIndex;
	    if (params.loop) {
	      activeIndexBuffer -= swiper.loopedSlides;
	      swiper.loopDestroy();
	      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
	    }
	    var baseLength = swiper.slides.length;
	    if (index <= 0) {
	      swiper.prependSlide(slides);
	      return;
	    }
	    if (index >= baseLength) {
	      swiper.appendSlide(slides);
	      return;
	    }
	    var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;

	    var slidesBuffer = [];
	    for (var i = baseLength - 1; i >= index; i -= 1) {
	      var currentSlide = swiper.slides.eq(i);
	      currentSlide.remove();
	      slidesBuffer.unshift(currentSlide);
	    }

	    if (typeof slides === 'object' && 'length' in slides) {
	      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
	        if (slides[i$1]) { $wrapperEl.append(slides[i$1]); }
	      }
	      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
	    } else {
	      $wrapperEl.append(slides);
	    }

	    for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
	      $wrapperEl.append(slidesBuffer[i$2]);
	    }

	    if (params.loop) {
	      swiper.loopCreate();
	    }
	    if (!(params.observer && Support.observer)) {
	      swiper.update();
	    }
	    if (params.loop) {
	      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
	    } else {
	      swiper.slideTo(newActiveIndex, 0, false);
	    }
	  }

	  function removeSlide (slidesIndexes) {
	    var swiper = this;
	    var params = swiper.params;
	    var $wrapperEl = swiper.$wrapperEl;
	    var activeIndex = swiper.activeIndex;

	    var activeIndexBuffer = activeIndex;
	    if (params.loop) {
	      activeIndexBuffer -= swiper.loopedSlides;
	      swiper.loopDestroy();
	      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
	    }
	    var newActiveIndex = activeIndexBuffer;
	    var indexToRemove;

	    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
	      for (var i = 0; i < slidesIndexes.length; i += 1) {
	        indexToRemove = slidesIndexes[i];
	        if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
	        if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
	      }
	      newActiveIndex = Math.max(newActiveIndex, 0);
	    } else {
	      indexToRemove = slidesIndexes;
	      if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
	      if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
	      newActiveIndex = Math.max(newActiveIndex, 0);
	    }

	    if (params.loop) {
	      swiper.loopCreate();
	    }

	    if (!(params.observer && Support.observer)) {
	      swiper.update();
	    }
	    if (params.loop) {
	      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
	    } else {
	      swiper.slideTo(newActiveIndex, 0, false);
	    }
	  }

	  function removeAllSlides () {
	    var swiper = this;

	    var slidesIndexes = [];
	    for (var i = 0; i < swiper.slides.length; i += 1) {
	      slidesIndexes.push(i);
	    }
	    swiper.removeSlide(slidesIndexes);
	  }

	  var manipulation = {
	    appendSlide: appendSlide,
	    prependSlide: prependSlide,
	    addSlide: addSlide,
	    removeSlide: removeSlide,
	    removeAllSlides: removeAllSlides,
	  };

	  var Device = (function Device() {
	    var ua = win.navigator.userAgent;

	    var device = {
	      ios: false,
	      android: false,
	      androidChrome: false,
	      desktop: false,
	      windows: false,
	      iphone: false,
	      ipod: false,
	      ipad: false,
	      cordova: win.cordova || win.phonegap,
	      phonegap: win.cordova || win.phonegap,
	    };

	    var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
	    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
	    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
	    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
	    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);


	    // Windows
	    if (windows) {
	      device.os = 'windows';
	      device.osVersion = windows[2];
	      device.windows = true;
	    }
	    // Android
	    if (android && !windows) {
	      device.os = 'android';
	      device.osVersion = android[2];
	      device.android = true;
	      device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
	    }
	    if (ipad || iphone || ipod) {
	      device.os = 'ios';
	      device.ios = true;
	    }
	    // iOS
	    if (iphone && !ipod) {
	      device.osVersion = iphone[2].replace(/_/g, '.');
	      device.iphone = true;
	    }
	    if (ipad) {
	      device.osVersion = ipad[2].replace(/_/g, '.');
	      device.ipad = true;
	    }
	    if (ipod) {
	      device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
	      device.iphone = true;
	    }
	    // iOS 8+ changed UA
	    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
	      if (device.osVersion.split('.')[0] === '10') {
	        device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
	      }
	    }

	    // Desktop
	    device.desktop = !(device.os || device.android || device.webView);

	    // Webview
	    device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

	    // Minimal UI
	    if (device.os && device.os === 'ios') {
	      var osVersionArr = device.osVersion.split('.');
	      var metaViewport = doc.querySelector('meta[name="viewport"]');
	      device.minimalUi = !device.webView
	        && (ipod || iphone)
	        && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7)
	        && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
	    }

	    // Pixel Ratio
	    device.pixelRatio = win.devicePixelRatio || 1;

	    // Export object
	    return device;
	  }());

	  function onTouchStart (event) {
	    var swiper = this;
	    var data = swiper.touchEventsData;
	    var params = swiper.params;
	    var touches = swiper.touches;
	    if (swiper.animating && params.preventInteractionOnTransition) {
	      return;
	    }
	    var e = event;
	    if (e.originalEvent) { e = e.originalEvent; }
	    data.isTouchEvent = e.type === 'touchstart';
	    if (!data.isTouchEvent && 'which' in e && e.which === 3) { return; }
	    if (!data.isTouchEvent && 'button' in e && e.button > 0) { return; }
	    if (data.isTouched && data.isMoved) { return; }
	    if (params.noSwiping && $(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : ("." + (params.noSwipingClass)))[0]) {
	      swiper.allowClick = true;
	      return;
	    }
	    if (params.swipeHandler) {
	      if (!$(e).closest(params.swipeHandler)[0]) { return; }
	    }

	    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
	    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
	    var startX = touches.currentX;
	    var startY = touches.currentY;

	    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

	    var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
	    var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
	    if (
	      edgeSwipeDetection
	      && ((startX <= edgeSwipeThreshold)
	      || (startX >= win.screen.width - edgeSwipeThreshold))
	    ) {
	      return;
	    }

	    Utils.extend(data, {
	      isTouched: true,
	      isMoved: false,
	      allowTouchCallbacks: true,
	      isScrolling: undefined,
	      startMoving: undefined,
	    });

	    touches.startX = startX;
	    touches.startY = startY;
	    data.touchStartTime = Utils.now();
	    swiper.allowClick = true;
	    swiper.updateSize();
	    swiper.swipeDirection = undefined;
	    if (params.threshold > 0) { data.allowThresholdMove = false; }
	    if (e.type !== 'touchstart') {
	      var preventDefault = true;
	      if ($(e.target).is(data.formElements)) { preventDefault = false; }
	      if (
	        doc.activeElement
	        && $(doc.activeElement).is(data.formElements)
	        && doc.activeElement !== e.target
	      ) {
	        doc.activeElement.blur();
	      }

	      var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
	      if (params.touchStartForcePreventDefault || shouldPreventDefault) {
	        e.preventDefault();
	      }
	    }
	    swiper.emit('touchStart', e);
	  }

	  function onTouchMove (event) {
	    var swiper = this;
	    var data = swiper.touchEventsData;
	    var params = swiper.params;
	    var touches = swiper.touches;
	    var rtl = swiper.rtlTranslate;
	    var e = event;
	    if (e.originalEvent) { e = e.originalEvent; }
	    if (!data.isTouched) {
	      if (data.startMoving && data.isScrolling) {
	        swiper.emit('touchMoveOpposite', e);
	      }
	      return;
	    }
	    if (data.isTouchEvent && e.type === 'mousemove') { return; }
	    var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	    var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	    if (e.preventedByNestedSwiper) {
	      touches.startX = pageX;
	      touches.startY = pageY;
	      return;
	    }
	    if (!swiper.allowTouchMove) {
	      // isMoved = true;
	      swiper.allowClick = false;
	      if (data.isTouched) {
	        Utils.extend(touches, {
	          startX: pageX,
	          startY: pageY,
	          currentX: pageX,
	          currentY: pageY,
	        });
	        data.touchStartTime = Utils.now();
	      }
	      return;
	    }
	    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
	      if (swiper.isVertical()) {
	        // Vertical
	        if (
	          (pageY < touches.startY && swiper.translate <= swiper.maxTranslate())
	          || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
	        ) {
	          data.isTouched = false;
	          data.isMoved = false;
	          return;
	        }
	      } else if (
	        (pageX < touches.startX && swiper.translate <= swiper.maxTranslate())
	        || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
	      ) {
	        return;
	      }
	    }
	    if (data.isTouchEvent && doc.activeElement) {
	      if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
	        data.isMoved = true;
	        swiper.allowClick = false;
	        return;
	      }
	    }
	    if (data.allowTouchCallbacks) {
	      swiper.emit('touchMove', e);
	    }
	    if (e.targetTouches && e.targetTouches.length > 1) { return; }

	    touches.currentX = pageX;
	    touches.currentY = pageY;

	    var diffX = touches.currentX - touches.startX;
	    var diffY = touches.currentY - touches.startY;
	    if (swiper.params.threshold && Math.sqrt((Math.pow( diffX, 2 )) + (Math.pow( diffY, 2 ))) < swiper.params.threshold) { return; }

	    if (typeof data.isScrolling === 'undefined') {
	      var touchAngle;
	      if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
	        data.isScrolling = false;
	      } else {
	        // eslint-disable-next-line
	        if ((diffX * diffX) + (diffY * diffY) >= 25) {
	          touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
	          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
	        }
	      }
	    }
	    if (data.isScrolling) {
	      swiper.emit('touchMoveOpposite', e);
	    }
	    if (typeof data.startMoving === 'undefined') {
	      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
	        data.startMoving = true;
	      }
	    }
	    if (data.isScrolling) {
	      data.isTouched = false;
	      return;
	    }
	    if (!data.startMoving) {
	      return;
	    }
	    swiper.allowClick = false;
	    e.preventDefault();
	    if (params.touchMoveStopPropagation && !params.nested) {
	      e.stopPropagation();
	    }

	    if (!data.isMoved) {
	      if (params.loop) {
	        swiper.loopFix();
	      }
	      data.startTranslate = swiper.getTranslate();
	      swiper.setTransition(0);
	      if (swiper.animating) {
	        swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
	      }
	      data.allowMomentumBounce = false;
	      // Grab Cursor
	      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
	        swiper.setGrabCursor(true);
	      }
	      swiper.emit('sliderFirstMove', e);
	    }
	    swiper.emit('sliderMove', e);
	    data.isMoved = true;

	    var diff = swiper.isHorizontal() ? diffX : diffY;
	    touches.diff = diff;

	    diff *= params.touchRatio;
	    if (rtl) { diff = -diff; }

	    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
	    data.currentTranslate = diff + data.startTranslate;

	    var disableParentSwiper = true;
	    var resistanceRatio = params.resistanceRatio;
	    if (params.touchReleaseOnEdges) {
	      resistanceRatio = 0;
	    }
	    if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
	      disableParentSwiper = false;
	      if (params.resistance) { data.currentTranslate = (swiper.minTranslate() - 1) + (Math.pow( (-swiper.minTranslate() + data.startTranslate + diff), resistanceRatio )); }
	    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
	      disableParentSwiper = false;
	      if (params.resistance) { data.currentTranslate = (swiper.maxTranslate() + 1) - (Math.pow( (swiper.maxTranslate() - data.startTranslate - diff), resistanceRatio )); }
	    }

	    if (disableParentSwiper) {
	      e.preventedByNestedSwiper = true;
	    }

	    // Directions locks
	    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
	      data.currentTranslate = data.startTranslate;
	    }
	    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
	      data.currentTranslate = data.startTranslate;
	    }


	    // Threshold
	    if (params.threshold > 0) {
	      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
	        if (!data.allowThresholdMove) {
	          data.allowThresholdMove = true;
	          touches.startX = touches.currentX;
	          touches.startY = touches.currentY;
	          data.currentTranslate = data.startTranslate;
	          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
	          return;
	        }
	      } else {
	        data.currentTranslate = data.startTranslate;
	        return;
	      }
	    }

	    if (!params.followFinger) { return; }

	    // Update active index in free mode
	    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
	      swiper.updateActiveIndex();
	      swiper.updateSlidesClasses();
	    }
	    if (params.freeMode) {
	      // Velocity
	      if (data.velocities.length === 0) {
	        data.velocities.push({
	          position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
	          time: data.touchStartTime,
	        });
	      }
	      data.velocities.push({
	        position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
	        time: Utils.now(),
	      });
	    }
	    // Update progress
	    swiper.updateProgress(data.currentTranslate);
	    // Update translate
	    swiper.setTranslate(data.currentTranslate);
	  }

	  function onTouchEnd (event) {
	    var swiper = this;
	    var data = swiper.touchEventsData;

	    var params = swiper.params;
	    var touches = swiper.touches;
	    var rtl = swiper.rtlTranslate;
	    var $wrapperEl = swiper.$wrapperEl;
	    var slidesGrid = swiper.slidesGrid;
	    var snapGrid = swiper.snapGrid;
	    var e = event;
	    if (e.originalEvent) { e = e.originalEvent; }
	    if (data.allowTouchCallbacks) {
	      swiper.emit('touchEnd', e);
	    }
	    data.allowTouchCallbacks = false;
	    if (!data.isTouched) {
	      if (data.isMoved && params.grabCursor) {
	        swiper.setGrabCursor(false);
	      }
	      data.isMoved = false;
	      data.startMoving = false;
	      return;
	    }
	    // Return Grab Cursor
	    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
	      swiper.setGrabCursor(false);
	    }

	    // Time diff
	    var touchEndTime = Utils.now();
	    var timeDiff = touchEndTime - data.touchStartTime;

	    // Tap, doubleTap, Click
	    if (swiper.allowClick) {
	      swiper.updateClickedSlide(e);
	      swiper.emit('tap', e);
	      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) > 300) {
	        if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
	        data.clickTimeout = Utils.nextTick(function () {
	          if (!swiper || swiper.destroyed) { return; }
	          swiper.emit('click', e);
	        }, 300);
	      }
	      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
	        if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
	        swiper.emit('doubleTap', e);
	      }
	    }

	    data.lastClickTime = Utils.now();
	    Utils.nextTick(function () {
	      if (!swiper.destroyed) { swiper.allowClick = true; }
	    });

	    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
	      data.isTouched = false;
	      data.isMoved = false;
	      data.startMoving = false;
	      return;
	    }
	    data.isTouched = false;
	    data.isMoved = false;
	    data.startMoving = false;

	    var currentPos;
	    if (params.followFinger) {
	      currentPos = rtl ? swiper.translate : -swiper.translate;
	    } else {
	      currentPos = -data.currentTranslate;
	    }

	    if (params.freeMode) {
	      if (currentPos < -swiper.minTranslate()) {
	        swiper.slideTo(swiper.activeIndex);
	        return;
	      }
	      if (currentPos > -swiper.maxTranslate()) {
	        if (swiper.slides.length < snapGrid.length) {
	          swiper.slideTo(snapGrid.length - 1);
	        } else {
	          swiper.slideTo(swiper.slides.length - 1);
	        }
	        return;
	      }

	      if (params.freeModeMomentum) {
	        if (data.velocities.length > 1) {
	          var lastMoveEvent = data.velocities.pop();
	          var velocityEvent = data.velocities.pop();

	          var distance = lastMoveEvent.position - velocityEvent.position;
	          var time = lastMoveEvent.time - velocityEvent.time;
	          swiper.velocity = distance / time;
	          swiper.velocity /= 2;
	          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
	            swiper.velocity = 0;
	          }
	          // this implies that the user stopped moving a finger then released.
	          // There would be no events with distance zero, so the last event is stale.
	          if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
	            swiper.velocity = 0;
	          }
	        } else {
	          swiper.velocity = 0;
	        }
	        swiper.velocity *= params.freeModeMomentumVelocityRatio;

	        data.velocities.length = 0;
	        var momentumDuration = 1000 * params.freeModeMomentumRatio;
	        var momentumDistance = swiper.velocity * momentumDuration;

	        var newPosition = swiper.translate + momentumDistance;
	        if (rtl) { newPosition = -newPosition; }

	        var doBounce = false;
	        var afterBouncePosition;
	        var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
	        var needsLoopFix;
	        if (newPosition < swiper.maxTranslate()) {
	          if (params.freeModeMomentumBounce) {
	            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
	              newPosition = swiper.maxTranslate() - bounceAmount;
	            }
	            afterBouncePosition = swiper.maxTranslate();
	            doBounce = true;
	            data.allowMomentumBounce = true;
	          } else {
	            newPosition = swiper.maxTranslate();
	          }
	          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
	        } else if (newPosition > swiper.minTranslate()) {
	          if (params.freeModeMomentumBounce) {
	            if (newPosition - swiper.minTranslate() > bounceAmount) {
	              newPosition = swiper.minTranslate() + bounceAmount;
	            }
	            afterBouncePosition = swiper.minTranslate();
	            doBounce = true;
	            data.allowMomentumBounce = true;
	          } else {
	            newPosition = swiper.minTranslate();
	          }
	          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
	        } else if (params.freeModeSticky) {
	          var nextSlide;
	          for (var j = 0; j < snapGrid.length; j += 1) {
	            if (snapGrid[j] > -newPosition) {
	              nextSlide = j;
	              break;
	            }
	          }

	          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
	            newPosition = snapGrid[nextSlide];
	          } else {
	            newPosition = snapGrid[nextSlide - 1];
	          }
	          newPosition = -newPosition;
	        }
	        if (needsLoopFix) {
	          swiper.once('transitionEnd', function () {
	            swiper.loopFix();
	          });
	        }
	        // Fix duration
	        if (swiper.velocity !== 0) {
	          if (rtl) {
	            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
	          } else {
	            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
	          }
	        } else if (params.freeModeSticky) {
	          swiper.slideToClosest();
	          return;
	        }

	        if (params.freeModeMomentumBounce && doBounce) {
	          swiper.updateProgress(afterBouncePosition);
	          swiper.setTransition(momentumDuration);
	          swiper.setTranslate(newPosition);
	          swiper.transitionStart(true, swiper.swipeDirection);
	          swiper.animating = true;
	          $wrapperEl.transitionEnd(function () {
	            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) { return; }
	            swiper.emit('momentumBounce');

	            swiper.setTransition(params.speed);
	            swiper.setTranslate(afterBouncePosition);
	            $wrapperEl.transitionEnd(function () {
	              if (!swiper || swiper.destroyed) { return; }
	              swiper.transitionEnd();
	            });
	          });
	        } else if (swiper.velocity) {
	          swiper.updateProgress(newPosition);
	          swiper.setTransition(momentumDuration);
	          swiper.setTranslate(newPosition);
	          swiper.transitionStart(true, swiper.swipeDirection);
	          if (!swiper.animating) {
	            swiper.animating = true;
	            $wrapperEl.transitionEnd(function () {
	              if (!swiper || swiper.destroyed) { return; }
	              swiper.transitionEnd();
	            });
	          }
	        } else {
	          swiper.updateProgress(newPosition);
	        }

	        swiper.updateActiveIndex();
	        swiper.updateSlidesClasses();
	      } else if (params.freeModeSticky) {
	        swiper.slideToClosest();
	        return;
	      }

	      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
	        swiper.updateProgress();
	        swiper.updateActiveIndex();
	        swiper.updateSlidesClasses();
	      }
	      return;
	    }

	    // Find current slide
	    var stopIndex = 0;
	    var groupSize = swiper.slidesSizesGrid[0];
	    for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
	      if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
	        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
	          stopIndex = i;
	          groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
	        }
	      } else if (currentPos >= slidesGrid[i]) {
	        stopIndex = i;
	        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
	      }
	    }

	    // Find current slide size
	    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

	    if (timeDiff > params.longSwipesMs) {
	      // Long touches
	      if (!params.longSwipes) {
	        swiper.slideTo(swiper.activeIndex);
	        return;
	      }
	      if (swiper.swipeDirection === 'next') {
	        if (ratio >= params.longSwipesRatio) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
	        else { swiper.slideTo(stopIndex); }
	      }
	      if (swiper.swipeDirection === 'prev') {
	        if (ratio > (1 - params.longSwipesRatio)) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
	        else { swiper.slideTo(stopIndex); }
	      }
	    } else {
	      // Short swipes
	      if (!params.shortSwipes) {
	        swiper.slideTo(swiper.activeIndex);
	        return;
	      }
	      if (swiper.swipeDirection === 'next') {
	        swiper.slideTo(stopIndex + params.slidesPerGroup);
	      }
	      if (swiper.swipeDirection === 'prev') {
	        swiper.slideTo(stopIndex);
	      }
	    }
	  }

	  function onResize () {
	    var swiper = this;

	    var params = swiper.params;
	    var el = swiper.el;

	    if (el && el.offsetWidth === 0) { return; }

	    // Breakpoints
	    if (params.breakpoints) {
	      swiper.setBreakpoint();
	    }

	    // Save locks
	    var allowSlideNext = swiper.allowSlideNext;
	    var allowSlidePrev = swiper.allowSlidePrev;
	    var snapGrid = swiper.snapGrid;

	    // Disable locks on resize
	    swiper.allowSlideNext = true;
	    swiper.allowSlidePrev = true;

	    swiper.updateSize();
	    swiper.updateSlides();

	    if (params.freeMode) {
	      var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
	      swiper.setTranslate(newTranslate);
	      swiper.updateActiveIndex();
	      swiper.updateSlidesClasses();

	      if (params.autoHeight) {
	        swiper.updateAutoHeight();
	      }
	    } else {
	      swiper.updateSlidesClasses();
	      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
	        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
	      } else {
	        swiper.slideTo(swiper.activeIndex, 0, false, true);
	      }
	    }
	    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
	      swiper.autoplay.run();
	    }
	    // Return locks after resize
	    swiper.allowSlidePrev = allowSlidePrev;
	    swiper.allowSlideNext = allowSlideNext;

	    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
	      swiper.checkOverflow();
	    }
	  }

	  function onClick (e) {
	    var swiper = this;
	    if (!swiper.allowClick) {
	      if (swiper.params.preventClicks) { e.preventDefault(); }
	      if (swiper.params.preventClicksPropagation && swiper.animating) {
	        e.stopPropagation();
	        e.stopImmediatePropagation();
	      }
	    }
	  }

	  function attachEvents() {
	    var swiper = this;
	    var params = swiper.params;
	    var touchEvents = swiper.touchEvents;
	    var el = swiper.el;
	    var wrapperEl = swiper.wrapperEl;

	    {
	      swiper.onTouchStart = onTouchStart.bind(swiper);
	      swiper.onTouchMove = onTouchMove.bind(swiper);
	      swiper.onTouchEnd = onTouchEnd.bind(swiper);
	    }

	    swiper.onClick = onClick.bind(swiper);

	    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
	    var capture = !!params.nested;

	    // Touch Events
	    {
	      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
	        target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
	        doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
	        doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
	      } else {
	        if (Support.touch) {
	          var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
	          target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
	          target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture: capture } : capture);
	          target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
	        }
	        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
	          target.addEventListener('mousedown', swiper.onTouchStart, false);
	          doc.addEventListener('mousemove', swiper.onTouchMove, capture);
	          doc.addEventListener('mouseup', swiper.onTouchEnd, false);
	        }
	      }
	      // Prevent Links Clicks
	      if (params.preventClicks || params.preventClicksPropagation) {
	        target.addEventListener('click', swiper.onClick, true);
	      }
	    }

	    // Resize handler
	    swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
	  }

	  function detachEvents() {
	    var swiper = this;

	    var params = swiper.params;
	    var touchEvents = swiper.touchEvents;
	    var el = swiper.el;
	    var wrapperEl = swiper.wrapperEl;

	    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
	    var capture = !!params.nested;

	    // Touch Events
	    {
	      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
	        target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
	        doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
	        doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
	      } else {
	        if (Support.touch) {
	          var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
	          target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
	          target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
	          target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
	        }
	        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
	          target.removeEventListener('mousedown', swiper.onTouchStart, false);
	          doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
	          doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
	        }
	      }
	      // Prevent Links Clicks
	      if (params.preventClicks || params.preventClicksPropagation) {
	        target.removeEventListener('click', swiper.onClick, true);
	      }
	    }

	    // Resize handler
	    swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
	  }

	  var events = {
	    attachEvents: attachEvents,
	    detachEvents: detachEvents,
	  };

	  function setBreakpoint () {
	    var swiper = this;
	    var activeIndex = swiper.activeIndex;
	    var initialized = swiper.initialized;
	    var loopedSlides = swiper.loopedSlides; if ( loopedSlides === void 0 ) loopedSlides = 0;
	    var params = swiper.params;
	    var breakpoints = params.breakpoints;
	    if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) { return; }

	    // Set breakpoint for window width and update parameters
	    var breakpoint = swiper.getBreakpoint(breakpoints);

	    if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
	      var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
	      if (breakpointOnlyParams) {
	        ['slidesPerView', 'spaceBetween', 'slidesPerGroup'].forEach(function (param) {
	          var paramValue = breakpointOnlyParams[param];
	          if (typeof paramValue === 'undefined') { return; }
	          if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
	            breakpointOnlyParams[param] = 'auto';
	          } else if (param === 'slidesPerView') {
	            breakpointOnlyParams[param] = parseFloat(paramValue);
	          } else {
	            breakpointOnlyParams[param] = parseInt(paramValue, 10);
	          }
	        });
	      }

	      var breakpointParams = breakpointOnlyParams || swiper.originalParams;
	      var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
	      var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

	      if (directionChanged && initialized) {
	        swiper.changeDirection();
	      }

	      Utils.extend(swiper.params, breakpointParams);

	      Utils.extend(swiper, {
	        allowTouchMove: swiper.params.allowTouchMove,
	        allowSlideNext: swiper.params.allowSlideNext,
	        allowSlidePrev: swiper.params.allowSlidePrev,
	      });

	      swiper.currentBreakpoint = breakpoint;

	      if (needsReLoop && initialized) {
	        swiper.loopDestroy();
	        swiper.loopCreate();
	        swiper.updateSlides();
	        swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
	      }

	      swiper.emit('breakpoint', breakpointParams);
	    }
	  }

	  function getBreakpoint (breakpoints) {
	    var swiper = this;
	    // Get breakpoint for window width
	    if (!breakpoints) { return undefined; }
	    var breakpoint = false;
	    var points = [];
	    Object.keys(breakpoints).forEach(function (point) {
	      points.push(point);
	    });
	    points.sort(function (a, b) { return parseInt(a, 10) - parseInt(b, 10); });
	    for (var i = 0; i < points.length; i += 1) {
	      var point = points[i];
	      if (swiper.params.breakpointsInverse) {
	        if (point <= win.innerWidth) {
	          breakpoint = point;
	        }
	      } else if (point >= win.innerWidth && !breakpoint) {
	        breakpoint = point;
	      }
	    }
	    return breakpoint || 'max';
	  }

	  var breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint };

	  function addClasses () {
	    var swiper = this;
	    var classNames = swiper.classNames;
	    var params = swiper.params;
	    var rtl = swiper.rtl;
	    var $el = swiper.$el;
	    var suffixes = [];

	    suffixes.push('initialized');
	    suffixes.push(params.direction);

	    if (params.freeMode) {
	      suffixes.push('free-mode');
	    }
	    if (!Support.flexbox) {
	      suffixes.push('no-flexbox');
	    }
	    if (params.autoHeight) {
	      suffixes.push('autoheight');
	    }
	    if (rtl) {
	      suffixes.push('rtl');
	    }
	    if (params.slidesPerColumn > 1) {
	      suffixes.push('multirow');
	    }
	    if (Device.android) {
	      suffixes.push('android');
	    }
	    if (Device.ios) {
	      suffixes.push('ios');
	    }
	    // WP8 Touch Events Fix
	    if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
	      suffixes.push(("wp8-" + (params.direction)));
	    }

	    suffixes.forEach(function (suffix) {
	      classNames.push(params.containerModifierClass + suffix);
	    });

	    $el.addClass(classNames.join(' '));
	  }

	  function removeClasses () {
	    var swiper = this;
	    var $el = swiper.$el;
	    var classNames = swiper.classNames;

	    $el.removeClass(classNames.join(' '));
	  }

	  var classes = { addClasses: addClasses, removeClasses: removeClasses };

	  function loadImage (imageEl, src, srcset, sizes, checkForComplete, callback) {
	    var image;
	    function onReady() {
	      if (callback) { callback(); }
	    }
	    if (!imageEl.complete || !checkForComplete) {
	      if (src) {
	        image = new win.Image();
	        image.onload = onReady;
	        image.onerror = onReady;
	        if (sizes) {
	          image.sizes = sizes;
	        }
	        if (srcset) {
	          image.srcset = srcset;
	        }
	        if (src) {
	          image.src = src;
	        }
	      } else {
	        onReady();
	      }
	    } else {
	      // image already loaded...
	      onReady();
	    }
	  }

	  function preloadImages () {
	    var swiper = this;
	    swiper.imagesToLoad = swiper.$el.find('img');
	    function onReady() {
	      if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) { return; }
	      if (swiper.imagesLoaded !== undefined) { swiper.imagesLoaded += 1; }
	      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
	        if (swiper.params.updateOnImagesReady) { swiper.update(); }
	        swiper.emit('imagesReady');
	      }
	    }
	    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
	      var imageEl = swiper.imagesToLoad[i];
	      swiper.loadImage(
	        imageEl,
	        imageEl.currentSrc || imageEl.getAttribute('src'),
	        imageEl.srcset || imageEl.getAttribute('srcset'),
	        imageEl.sizes || imageEl.getAttribute('sizes'),
	        true,
	        onReady
	      );
	    }
	  }

	  var images = {
	    loadImage: loadImage,
	    preloadImages: preloadImages,
	  };

	  function checkOverflow() {
	    var swiper = this;
	    var wasLocked = swiper.isLocked;

	    swiper.isLocked = swiper.snapGrid.length === 1;
	    swiper.allowSlideNext = !swiper.isLocked;
	    swiper.allowSlidePrev = !swiper.isLocked;

	    // events
	    if (wasLocked !== swiper.isLocked) { swiper.emit(swiper.isLocked ? 'lock' : 'unlock'); }

	    if (wasLocked && wasLocked !== swiper.isLocked) {
	      swiper.isEnd = false;
	      swiper.navigation.update();
	    }
	  }

	  var checkOverflow$1 = { checkOverflow: checkOverflow };

	  var defaults = {
	    init: true,
	    direction: 'horizontal',
	    touchEventsTarget: 'container',
	    initialSlide: 0,
	    speed: 300,
	    //
	    preventInteractionOnTransition: false,

	    // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
	    edgeSwipeDetection: false,
	    edgeSwipeThreshold: 20,

	    // Free mode
	    freeMode: false,
	    freeModeMomentum: true,
	    freeModeMomentumRatio: 1,
	    freeModeMomentumBounce: true,
	    freeModeMomentumBounceRatio: 1,
	    freeModeMomentumVelocityRatio: 1,
	    freeModeSticky: false,
	    freeModeMinimumVelocity: 0.02,

	    // Autoheight
	    autoHeight: false,

	    // Set wrapper width
	    setWrapperSize: false,

	    // Virtual Translate
	    virtualTranslate: false,

	    // Effects
	    effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

	    // Breakpoints
	    breakpoints: undefined,
	    breakpointsInverse: false,

	    // Slides grid
	    spaceBetween: 0,
	    slidesPerView: 1,
	    slidesPerColumn: 1,
	    slidesPerColumnFill: 'column',
	    slidesPerGroup: 1,
	    centeredSlides: false,
	    slidesOffsetBefore: 0, // in px
	    slidesOffsetAfter: 0, // in px
	    normalizeSlideIndex: true,
	    centerInsufficientSlides: false,

	    // Disable swiper and hide navigation when container not overflow
	    watchOverflow: false,

	    // Round length
	    roundLengths: false,

	    // Touches
	    touchRatio: 1,
	    touchAngle: 45,
	    simulateTouch: true,
	    shortSwipes: true,
	    longSwipes: true,
	    longSwipesRatio: 0.5,
	    longSwipesMs: 300,
	    followFinger: true,
	    allowTouchMove: true,
	    threshold: 0,
	    touchMoveStopPropagation: true,
	    touchStartPreventDefault: true,
	    touchStartForcePreventDefault: false,
	    touchReleaseOnEdges: false,

	    // Unique Navigation Elements
	    uniqueNavElements: true,

	    // Resistance
	    resistance: true,
	    resistanceRatio: 0.85,

	    // Progress
	    watchSlidesProgress: false,
	    watchSlidesVisibility: false,

	    // Cursor
	    grabCursor: false,

	    // Clicks
	    preventClicks: true,
	    preventClicksPropagation: true,
	    slideToClickedSlide: false,

	    // Images
	    preloadImages: true,
	    updateOnImagesReady: true,

	    // loop
	    loop: false,
	    loopAdditionalSlides: 0,
	    loopedSlides: null,
	    loopFillGroupWithBlank: false,

	    // Swiping/no swiping
	    allowSlidePrev: true,
	    allowSlideNext: true,
	    swipeHandler: null, // '.swipe-handler',
	    noSwiping: true,
	    noSwipingClass: 'swiper-no-swiping',
	    noSwipingSelector: null,

	    // Passive Listeners
	    passiveListeners: true,

	    // NS
	    containerModifierClass: 'swiper-container-', // NEW
	    slideClass: 'swiper-slide',
	    slideBlankClass: 'swiper-slide-invisible-blank',
	    slideActiveClass: 'swiper-slide-active',
	    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
	    slideVisibleClass: 'swiper-slide-visible',
	    slideDuplicateClass: 'swiper-slide-duplicate',
	    slideNextClass: 'swiper-slide-next',
	    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
	    slidePrevClass: 'swiper-slide-prev',
	    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
	    wrapperClass: 'swiper-wrapper',

	    // Callbacks
	    runCallbacksOnInit: true,
	  };

	  /* eslint no-param-reassign: "off" */

	  var prototypes = {
	    update: update,
	    translate: translate,
	    transition: transition$1,
	    slide: slide,
	    loop: loop,
	    grabCursor: grabCursor,
	    manipulation: manipulation,
	    events: events,
	    breakpoints: breakpoints,
	    checkOverflow: checkOverflow$1,
	    classes: classes,
	    images: images,
	  };

	  var extendedDefaults = {};

	  var Swiper = /*@__PURE__*/(function (SwiperClass) {
	    function Swiper() {
	      var assign;

	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];
	      var el;
	      var params;
	      if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
	        params = args[0];
	      } else {
	        (assign = args, el = assign[0], params = assign[1]);
	      }
	      if (!params) { params = {}; }

	      params = Utils.extend({}, params);
	      if (el && !params.el) { params.el = el; }

	      SwiperClass.call(this, params);

	      Object.keys(prototypes).forEach(function (prototypeGroup) {
	        Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
	          if (!Swiper.prototype[protoMethod]) {
	            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
	          }
	        });
	      });

	      // Swiper Instance
	      var swiper = this;
	      if (typeof swiper.modules === 'undefined') {
	        swiper.modules = {};
	      }
	      Object.keys(swiper.modules).forEach(function (moduleName) {
	        var module = swiper.modules[moduleName];
	        if (module.params) {
	          var moduleParamName = Object.keys(module.params)[0];
	          var moduleParams = module.params[moduleParamName];
	          if (typeof moduleParams !== 'object' || moduleParams === null) { return; }
	          if (!(moduleParamName in params && 'enabled' in moduleParams)) { return; }
	          if (params[moduleParamName] === true) {
	            params[moduleParamName] = { enabled: true };
	          }
	          if (
	            typeof params[moduleParamName] === 'object'
	            && !('enabled' in params[moduleParamName])
	          ) {
	            params[moduleParamName].enabled = true;
	          }
	          if (!params[moduleParamName]) { params[moduleParamName] = { enabled: false }; }
	        }
	      });

	      // Extend defaults with modules params
	      var swiperParams = Utils.extend({}, defaults);
	      swiper.useModulesParams(swiperParams);

	      // Extend defaults with passed params
	      swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
	      swiper.originalParams = Utils.extend({}, swiper.params);
	      swiper.passedParams = Utils.extend({}, params);

	      // Save Dom lib
	      swiper.$ = $;

	      // Find el
	      var $el = $(swiper.params.el);
	      el = $el[0];

	      if (!el) {
	        return undefined;
	      }

	      if ($el.length > 1) {
	        var swipers = [];
	        $el.each(function (index, containerEl) {
	          var newParams = Utils.extend({}, params, { el: containerEl });
	          swipers.push(new Swiper(newParams));
	        });
	        return swipers;
	      }

	      el.swiper = swiper;
	      $el.data('swiper', swiper);

	      // Find Wrapper
	      var $wrapperEl = $el.children(("." + (swiper.params.wrapperClass)));

	      // Extend Swiper
	      Utils.extend(swiper, {
	        $el: $el,
	        el: el,
	        $wrapperEl: $wrapperEl,
	        wrapperEl: $wrapperEl[0],

	        // Classes
	        classNames: [],

	        // Slides
	        slides: $(),
	        slidesGrid: [],
	        snapGrid: [],
	        slidesSizesGrid: [],

	        // isDirection
	        isHorizontal: function isHorizontal() {
	          return swiper.params.direction === 'horizontal';
	        },
	        isVertical: function isVertical() {
	          return swiper.params.direction === 'vertical';
	        },
	        // RTL
	        rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
	        rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
	        wrongRTL: $wrapperEl.css('display') === '-webkit-box',

	        // Indexes
	        activeIndex: 0,
	        realIndex: 0,

	        //
	        isBeginning: true,
	        isEnd: false,

	        // Props
	        translate: 0,
	        previousTranslate: 0,
	        progress: 0,
	        velocity: 0,
	        animating: false,

	        // Locks
	        allowSlideNext: swiper.params.allowSlideNext,
	        allowSlidePrev: swiper.params.allowSlidePrev,

	        // Touch Events
	        touchEvents: (function touchEvents() {
	          var touch = ['touchstart', 'touchmove', 'touchend'];
	          var desktop = ['mousedown', 'mousemove', 'mouseup'];
	          if (Support.pointerEvents) {
	            desktop = ['pointerdown', 'pointermove', 'pointerup'];
	          } else if (Support.prefixedPointerEvents) {
	            desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
	          }
	          swiper.touchEventsTouch = {
	            start: touch[0],
	            move: touch[1],
	            end: touch[2],
	          };
	          swiper.touchEventsDesktop = {
	            start: desktop[0],
	            move: desktop[1],
	            end: desktop[2],
	          };
	          return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
	        }()),
	        touchEventsData: {
	          isTouched: undefined,
	          isMoved: undefined,
	          allowTouchCallbacks: undefined,
	          touchStartTime: undefined,
	          isScrolling: undefined,
	          currentTranslate: undefined,
	          startTranslate: undefined,
	          allowThresholdMove: undefined,
	          // Form elements to match
	          formElements: 'input, select, option, textarea, button, video',
	          // Last click time
	          lastClickTime: Utils.now(),
	          clickTimeout: undefined,
	          // Velocities
	          velocities: [],
	          allowMomentumBounce: undefined,
	          isTouchEvent: undefined,
	          startMoving: undefined,
	        },

	        // Clicks
	        allowClick: true,

	        // Touches
	        allowTouchMove: swiper.params.allowTouchMove,

	        touches: {
	          startX: 0,
	          startY: 0,
	          currentX: 0,
	          currentY: 0,
	          diff: 0,
	        },

	        // Images
	        imagesToLoad: [],
	        imagesLoaded: 0,

	      });

	      // Install Modules
	      swiper.useModules();

	      // Init
	      if (swiper.params.init) {
	        swiper.init();
	      }

	      // Return app instance
	      return swiper;
	    }

	    if ( SwiperClass ) Swiper.__proto__ = SwiperClass;
	    Swiper.prototype = Object.create( SwiperClass && SwiperClass.prototype );
	    Swiper.prototype.constructor = Swiper;

	    var staticAccessors = { extendedDefaults: { configurable: true },defaults: { configurable: true },Class: { configurable: true },$: { configurable: true } };

	    Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic () {
	      var swiper = this;
	      var params = swiper.params;
	      var slides = swiper.slides;
	      var slidesGrid = swiper.slidesGrid;
	      var swiperSize = swiper.size;
	      var activeIndex = swiper.activeIndex;
	      var spv = 1;
	      if (params.centeredSlides) {
	        var slideSize = slides[activeIndex].swiperSlideSize;
	        var breakLoop;
	        for (var i = activeIndex + 1; i < slides.length; i += 1) {
	          if (slides[i] && !breakLoop) {
	            slideSize += slides[i].swiperSlideSize;
	            spv += 1;
	            if (slideSize > swiperSize) { breakLoop = true; }
	          }
	        }
	        for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
	          if (slides[i$1] && !breakLoop) {
	            slideSize += slides[i$1].swiperSlideSize;
	            spv += 1;
	            if (slideSize > swiperSize) { breakLoop = true; }
	          }
	        }
	      } else {
	        for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
	          if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
	            spv += 1;
	          }
	        }
	      }
	      return spv;
	    };

	    Swiper.prototype.update = function update () {
	      var swiper = this;
	      if (!swiper || swiper.destroyed) { return; }
	      var snapGrid = swiper.snapGrid;
	      var params = swiper.params;
	      // Breakpoints
	      if (params.breakpoints) {
	        swiper.setBreakpoint();
	      }
	      swiper.updateSize();
	      swiper.updateSlides();
	      swiper.updateProgress();
	      swiper.updateSlidesClasses();

	      function setTranslate() {
	        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
	        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
	        swiper.setTranslate(newTranslate);
	        swiper.updateActiveIndex();
	        swiper.updateSlidesClasses();
	      }
	      var translated;
	      if (swiper.params.freeMode) {
	        setTranslate();
	        if (swiper.params.autoHeight) {
	          swiper.updateAutoHeight();
	        }
	      } else {
	        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
	          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
	        } else {
	          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
	        }
	        if (!translated) {
	          setTranslate();
	        }
	      }
	      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
	        swiper.checkOverflow();
	      }
	      swiper.emit('update');
	    };

	    Swiper.prototype.changeDirection = function changeDirection (newDirection, needUpdate) {
	      if ( needUpdate === void 0 ) needUpdate = true;

	      var swiper = this;
	      var currentDirection = swiper.params.direction;
	      if (!newDirection) {
	        // eslint-disable-next-line
	        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
	      }
	      if ((newDirection === currentDirection) || (newDirection !== 'horizontal' && newDirection !== 'vertical')) {
	        return swiper;
	      }

	      swiper.$el
	        .removeClass(("" + (swiper.params.containerModifierClass) + currentDirection + " wp8-" + currentDirection))
	        .addClass(("" + (swiper.params.containerModifierClass) + newDirection));

	      if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
	        swiper.$el.addClass(((swiper.params.containerModifierClass) + "wp8-" + newDirection));
	      }

	      swiper.params.direction = newDirection;

	      swiper.slides.each(function (slideIndex, slideEl) {
	        if (newDirection === 'vertical') {
	          slideEl.style.width = '';
	        } else {
	          slideEl.style.height = '';
	        }
	      });

	      swiper.emit('changeDirection');
	      if (needUpdate) { swiper.update(); }

	      return swiper;
	    };

	    Swiper.prototype.init = function init () {
	      var swiper = this;
	      if (swiper.initialized) { return; }

	      swiper.emit('beforeInit');

	      // Set breakpoint
	      if (swiper.params.breakpoints) {
	        swiper.setBreakpoint();
	      }

	      // Add Classes
	      swiper.addClasses();

	      // Create loop
	      if (swiper.params.loop) {
	        swiper.loopCreate();
	      }

	      // Update size
	      swiper.updateSize();

	      // Update slides
	      swiper.updateSlides();

	      if (swiper.params.watchOverflow) {
	        swiper.checkOverflow();
	      }

	      // Set Grab Cursor
	      if (swiper.params.grabCursor) {
	        swiper.setGrabCursor();
	      }

	      if (swiper.params.preloadImages) {
	        swiper.preloadImages();
	      }

	      // Slide To Initial Slide
	      if (swiper.params.loop) {
	        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
	      } else {
	        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
	      }

	      // Attach events
	      swiper.attachEvents();

	      // Init Flag
	      swiper.initialized = true;

	      // Emit
	      swiper.emit('init');
	    };

	    Swiper.prototype.destroy = function destroy (deleteInstance, cleanStyles) {
	      if ( deleteInstance === void 0 ) deleteInstance = true;
	      if ( cleanStyles === void 0 ) cleanStyles = true;

	      var swiper = this;
	      var params = swiper.params;
	      var $el = swiper.$el;
	      var $wrapperEl = swiper.$wrapperEl;
	      var slides = swiper.slides;

	      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
	        return null;
	      }

	      swiper.emit('beforeDestroy');

	      // Init Flag
	      swiper.initialized = false;

	      // Detach events
	      swiper.detachEvents();

	      // Destroy loop
	      if (params.loop) {
	        swiper.loopDestroy();
	      }

	      // Cleanup styles
	      if (cleanStyles) {
	        swiper.removeClasses();
	        $el.removeAttr('style');
	        $wrapperEl.removeAttr('style');
	        if (slides && slides.length) {
	          slides
	            .removeClass([
	              params.slideVisibleClass,
	              params.slideActiveClass,
	              params.slideNextClass,
	              params.slidePrevClass ].join(' '))
	            .removeAttr('style')
	            .removeAttr('data-swiper-slide-index')
	            .removeAttr('data-swiper-column')
	            .removeAttr('data-swiper-row');
	        }
	      }

	      swiper.emit('destroy');

	      // Detach emitter events
	      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
	        swiper.off(eventName);
	      });

	      if (deleteInstance !== false) {
	        swiper.$el[0].swiper = null;
	        swiper.$el.data('swiper', null);
	        Utils.deleteProps(swiper);
	      }
	      swiper.destroyed = true;

	      return null;
	    };

	    Swiper.extendDefaults = function extendDefaults (newDefaults) {
	      Utils.extend(extendedDefaults, newDefaults);
	    };

	    staticAccessors.extendedDefaults.get = function () {
	      return extendedDefaults;
	    };

	    staticAccessors.defaults.get = function () {
	      return defaults;
	    };

	    staticAccessors.Class.get = function () {
	      return SwiperClass;
	    };

	    staticAccessors.$.get = function () {
	      return $;
	    };

	    Object.defineProperties( Swiper, staticAccessors );

	    return Swiper;
	  }(SwiperClass));

	  var Device$1 = {
	    name: 'device',
	    proto: {
	      device: Device,
	    },
	    static: {
	      device: Device,
	    },
	  };

	  var Support$1 = {
	    name: 'support',
	    proto: {
	      support: Support,
	    },
	    static: {
	      support: Support,
	    },
	  };

	  var Browser$1 = {
	    name: 'browser',
	    proto: {
	      browser: Browser,
	    },
	    static: {
	      browser: Browser,
	    },
	  };

	  var Resize = {
	    name: 'resize',
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        resize: {
	          resizeHandler: function resizeHandler() {
	            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
	            swiper.emit('beforeResize');
	            swiper.emit('resize');
	          },
	          orientationChangeHandler: function orientationChangeHandler() {
	            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
	            swiper.emit('orientationchange');
	          },
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        // Emit resize
	        win.addEventListener('resize', swiper.resize.resizeHandler);

	        // Emit orientationchange
	        win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        win.removeEventListener('resize', swiper.resize.resizeHandler);
	        win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
	      },
	    },
	  };

	  var Observer = {
	    func: win.MutationObserver || win.WebkitMutationObserver,
	    attach: function attach(target, options) {
	      if ( options === void 0 ) options = {};

	      var swiper = this;

	      var ObserverFunc = Observer.func;
	      var observer = new ObserverFunc(function (mutations) {
	        // The observerUpdate event should only be triggered
	        // once despite the number of mutations.  Additional
	        // triggers are redundant and are very costly
	        if (mutations.length === 1) {
	          swiper.emit('observerUpdate', mutations[0]);
	          return;
	        }
	        var observerUpdate = function observerUpdate() {
	          swiper.emit('observerUpdate', mutations[0]);
	        };

	        if (win.requestAnimationFrame) {
	          win.requestAnimationFrame(observerUpdate);
	        } else {
	          win.setTimeout(observerUpdate, 0);
	        }
	      });

	      observer.observe(target, {
	        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
	        childList: typeof options.childList === 'undefined' ? true : options.childList,
	        characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
	      });

	      swiper.observer.observers.push(observer);
	    },
	    init: function init() {
	      var swiper = this;
	      if (!Support.observer || !swiper.params.observer) { return; }
	      if (swiper.params.observeParents) {
	        var containerParents = swiper.$el.parents();
	        for (var i = 0; i < containerParents.length; i += 1) {
	          swiper.observer.attach(containerParents[i]);
	        }
	      }
	      // Observe container
	      swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren });

	      // Observe wrapper
	      swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
	    },
	    destroy: function destroy() {
	      var swiper = this;
	      swiper.observer.observers.forEach(function (observer) {
	        observer.disconnect();
	      });
	      swiper.observer.observers = [];
	    },
	  };

	  var Observer$1 = {
	    name: 'observer',
	    params: {
	      observer: false,
	      observeParents: false,
	      observeSlideChildren: false,
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        observer: {
	          init: Observer.init.bind(swiper),
	          attach: Observer.attach.bind(swiper),
	          destroy: Observer.destroy.bind(swiper),
	          observers: [],
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        swiper.observer.init();
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        swiper.observer.destroy();
	      },
	    },
	  };

	  var Virtual = {
	    update: function update(force) {
	      var swiper = this;
	      var ref = swiper.params;
	      var slidesPerView = ref.slidesPerView;
	      var slidesPerGroup = ref.slidesPerGroup;
	      var centeredSlides = ref.centeredSlides;
	      var ref$1 = swiper.params.virtual;
	      var addSlidesBefore = ref$1.addSlidesBefore;
	      var addSlidesAfter = ref$1.addSlidesAfter;
	      var ref$2 = swiper.virtual;
	      var previousFrom = ref$2.from;
	      var previousTo = ref$2.to;
	      var slides = ref$2.slides;
	      var previousSlidesGrid = ref$2.slidesGrid;
	      var renderSlide = ref$2.renderSlide;
	      var previousOffset = ref$2.offset;
	      swiper.updateActiveIndex();
	      var activeIndex = swiper.activeIndex || 0;

	      var offsetProp;
	      if (swiper.rtlTranslate) { offsetProp = 'right'; }
	      else { offsetProp = swiper.isHorizontal() ? 'left' : 'top'; }

	      var slidesAfter;
	      var slidesBefore;
	      if (centeredSlides) {
	        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
	        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
	      } else {
	        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
	        slidesBefore = slidesPerGroup + addSlidesAfter;
	      }
	      var from = Math.max((activeIndex || 0) - slidesBefore, 0);
	      var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
	      var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

	      Utils.extend(swiper.virtual, {
	        from: from,
	        to: to,
	        offset: offset,
	        slidesGrid: swiper.slidesGrid,
	      });

	      function onRendered() {
	        swiper.updateSlides();
	        swiper.updateProgress();
	        swiper.updateSlidesClasses();
	        if (swiper.lazy && swiper.params.lazy.enabled) {
	          swiper.lazy.load();
	        }
	      }

	      if (previousFrom === from && previousTo === to && !force) {
	        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
	          swiper.slides.css(offsetProp, (offset + "px"));
	        }
	        swiper.updateProgress();
	        return;
	      }
	      if (swiper.params.virtual.renderExternal) {
	        swiper.params.virtual.renderExternal.call(swiper, {
	          offset: offset,
	          from: from,
	          to: to,
	          slides: (function getSlides() {
	            var slidesToRender = [];
	            for (var i = from; i <= to; i += 1) {
	              slidesToRender.push(slides[i]);
	            }
	            return slidesToRender;
	          }()),
	        });
	        onRendered();
	        return;
	      }
	      var prependIndexes = [];
	      var appendIndexes = [];
	      if (force) {
	        swiper.$wrapperEl.find(("." + (swiper.params.slideClass))).remove();
	      } else {
	        for (var i = previousFrom; i <= previousTo; i += 1) {
	          if (i < from || i > to) {
	            swiper.$wrapperEl.find(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + i + "\"]")).remove();
	          }
	        }
	      }
	      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
	        if (i$1 >= from && i$1 <= to) {
	          if (typeof previousTo === 'undefined' || force) {
	            appendIndexes.push(i$1);
	          } else {
	            if (i$1 > previousTo) { appendIndexes.push(i$1); }
	            if (i$1 < previousFrom) { prependIndexes.push(i$1); }
	          }
	        }
	      }
	      appendIndexes.forEach(function (index) {
	        swiper.$wrapperEl.append(renderSlide(slides[index], index));
	      });
	      prependIndexes.sort(function (a, b) { return b - a; }).forEach(function (index) {
	        swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
	      });
	      swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, (offset + "px"));
	      onRendered();
	    },
	    renderSlide: function renderSlide(slide, index) {
	      var swiper = this;
	      var params = swiper.params.virtual;
	      if (params.cache && swiper.virtual.cache[index]) {
	        return swiper.virtual.cache[index];
	      }
	      var $slideEl = params.renderSlide
	        ? $(params.renderSlide.call(swiper, slide, index))
	        : $(("<div class=\"" + (swiper.params.slideClass) + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>"));
	      if (!$slideEl.attr('data-swiper-slide-index')) { $slideEl.attr('data-swiper-slide-index', index); }
	      if (params.cache) { swiper.virtual.cache[index] = $slideEl; }
	      return $slideEl;
	    },
	    appendSlide: function appendSlide(slides) {
	      var swiper = this;
	      if (typeof slides === 'object' && 'length' in slides) {
	        for (var i = 0; i < slides.length; i += 1) {
	          if (slides[i]) { swiper.virtual.slides.push(slides[i]); }
	        }
	      } else {
	        swiper.virtual.slides.push(slides);
	      }
	      swiper.virtual.update(true);
	    },
	    prependSlide: function prependSlide(slides) {
	      var swiper = this;
	      var activeIndex = swiper.activeIndex;
	      var newActiveIndex = activeIndex + 1;
	      var numberOfNewSlides = 1;

	      if (Array.isArray(slides)) {
	        for (var i = 0; i < slides.length; i += 1) {
	          if (slides[i]) { swiper.virtual.slides.unshift(slides[i]); }
	        }
	        newActiveIndex = activeIndex + slides.length;
	        numberOfNewSlides = slides.length;
	      } else {
	        swiper.virtual.slides.unshift(slides);
	      }
	      if (swiper.params.virtual.cache) {
	        var cache = swiper.virtual.cache;
	        var newCache = {};
	        Object.keys(cache).forEach(function (cachedIndex) {
	          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cache[cachedIndex];
	        });
	        swiper.virtual.cache = newCache;
	      }
	      swiper.virtual.update(true);
	      swiper.slideTo(newActiveIndex, 0);
	    },
	    removeSlide: function removeSlide(slidesIndexes) {
	      var swiper = this;
	      if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) { return; }
	      var activeIndex = swiper.activeIndex;
	      if (Array.isArray(slidesIndexes)) {
	        for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
	          swiper.virtual.slides.splice(slidesIndexes[i], 1);
	          if (swiper.params.virtual.cache) {
	            delete swiper.virtual.cache[slidesIndexes[i]];
	          }
	          if (slidesIndexes[i] < activeIndex) { activeIndex -= 1; }
	          activeIndex = Math.max(activeIndex, 0);
	        }
	      } else {
	        swiper.virtual.slides.splice(slidesIndexes, 1);
	        if (swiper.params.virtual.cache) {
	          delete swiper.virtual.cache[slidesIndexes];
	        }
	        if (slidesIndexes < activeIndex) { activeIndex -= 1; }
	        activeIndex = Math.max(activeIndex, 0);
	      }
	      swiper.virtual.update(true);
	      swiper.slideTo(activeIndex, 0);
	    },
	    removeAllSlides: function removeAllSlides() {
	      var swiper = this;
	      swiper.virtual.slides = [];
	      if (swiper.params.virtual.cache) {
	        swiper.virtual.cache = {};
	      }
	      swiper.virtual.update(true);
	      swiper.slideTo(0, 0);
	    },
	  };

	  var Virtual$1 = {
	    name: 'virtual',
	    params: {
	      virtual: {
	        enabled: false,
	        slides: [],
	        cache: true,
	        renderSlide: null,
	        renderExternal: null,
	        addSlidesBefore: 0,
	        addSlidesAfter: 0,
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        virtual: {
	          update: Virtual.update.bind(swiper),
	          appendSlide: Virtual.appendSlide.bind(swiper),
	          prependSlide: Virtual.prependSlide.bind(swiper),
	          removeSlide: Virtual.removeSlide.bind(swiper),
	          removeAllSlides: Virtual.removeAllSlides.bind(swiper),
	          renderSlide: Virtual.renderSlide.bind(swiper),
	          slides: swiper.params.virtual.slides,
	          cache: {},
	        },
	      });
	    },
	    on: {
	      beforeInit: function beforeInit() {
	        var swiper = this;
	        if (!swiper.params.virtual.enabled) { return; }
	        swiper.classNames.push(((swiper.params.containerModifierClass) + "virtual"));
	        var overwriteParams = {
	          watchSlidesProgress: true,
	        };
	        Utils.extend(swiper.params, overwriteParams);
	        Utils.extend(swiper.originalParams, overwriteParams);

	        if (!swiper.params.initialSlide) {
	          swiper.virtual.update();
	        }
	      },
	      setTranslate: function setTranslate() {
	        var swiper = this;
	        if (!swiper.params.virtual.enabled) { return; }
	        swiper.virtual.update();
	      },
	    },
	  };

	  var Keyboard = {
	    handle: function handle(event) {
	      var swiper = this;
	      var rtl = swiper.rtlTranslate;
	      var e = event;
	      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
	      var kc = e.keyCode || e.charCode;
	      // Directions locks
	      if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40) || kc === 34)) {
	        return false;
	      }
	      if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38) || kc === 33)) {
	        return false;
	      }
	      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
	        return undefined;
	      }
	      if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
	        return undefined;
	      }
	      if (swiper.params.keyboard.onlyInViewport && (kc === 33 || kc === 34 || kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
	        var inView = false;
	        // Check that swiper should be inside of visible area of window
	        if (swiper.$el.parents(("." + (swiper.params.slideClass))).length > 0 && swiper.$el.parents(("." + (swiper.params.slideActiveClass))).length === 0) {
	          return undefined;
	        }
	        var windowWidth = win.innerWidth;
	        var windowHeight = win.innerHeight;
	        var swiperOffset = swiper.$el.offset();
	        if (rtl) { swiperOffset.left -= swiper.$el[0].scrollLeft; }
	        var swiperCoord = [
	          [swiperOffset.left, swiperOffset.top],
	          [swiperOffset.left + swiper.width, swiperOffset.top],
	          [swiperOffset.left, swiperOffset.top + swiper.height],
	          [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height] ];
	        for (var i = 0; i < swiperCoord.length; i += 1) {
	          var point = swiperCoord[i];
	          if (
	            point[0] >= 0 && point[0] <= windowWidth
	            && point[1] >= 0 && point[1] <= windowHeight
	          ) {
	            inView = true;
	          }
	        }
	        if (!inView) { return undefined; }
	      }
	      if (swiper.isHorizontal()) {
	        if (kc === 33 || kc === 34 || kc === 37 || kc === 39) {
	          if (e.preventDefault) { e.preventDefault(); }
	          else { e.returnValue = false; }
	        }
	        if (((kc === 34 || kc === 39) && !rtl) || ((kc === 33 || kc === 37) && rtl)) { swiper.slideNext(); }
	        if (((kc === 33 || kc === 37) && !rtl) || ((kc === 34 || kc === 39) && rtl)) { swiper.slidePrev(); }
	      } else {
	        if (kc === 33 || kc === 34 || kc === 38 || kc === 40) {
	          if (e.preventDefault) { e.preventDefault(); }
	          else { e.returnValue = false; }
	        }
	        if (kc === 34 || kc === 40) { swiper.slideNext(); }
	        if (kc === 33 || kc === 38) { swiper.slidePrev(); }
	      }
	      swiper.emit('keyPress', kc);
	      return undefined;
	    },
	    enable: function enable() {
	      var swiper = this;
	      if (swiper.keyboard.enabled) { return; }
	      $(doc).on('keydown', swiper.keyboard.handle);
	      swiper.keyboard.enabled = true;
	    },
	    disable: function disable() {
	      var swiper = this;
	      if (!swiper.keyboard.enabled) { return; }
	      $(doc).off('keydown', swiper.keyboard.handle);
	      swiper.keyboard.enabled = false;
	    },
	  };

	  var Keyboard$1 = {
	    name: 'keyboard',
	    params: {
	      keyboard: {
	        enabled: false,
	        onlyInViewport: true,
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        keyboard: {
	          enabled: false,
	          enable: Keyboard.enable.bind(swiper),
	          disable: Keyboard.disable.bind(swiper),
	          handle: Keyboard.handle.bind(swiper),
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        if (swiper.params.keyboard.enabled) {
	          swiper.keyboard.enable();
	        }
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        if (swiper.keyboard.enabled) {
	          swiper.keyboard.disable();
	        }
	      },
	    },
	  };

	  function isEventSupported() {
	    var eventName = 'onwheel';
	    var isSupported = eventName in doc;

	    if (!isSupported) {
	      var element = doc.createElement('div');
	      element.setAttribute(eventName, 'return;');
	      isSupported = typeof element[eventName] === 'function';
	    }

	    if (!isSupported
	      && doc.implementation
	      && doc.implementation.hasFeature
	      // always returns true in newer browsers as per the standard.
	      // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	      && doc.implementation.hasFeature('', '') !== true
	    ) {
	      // This is the only way to test support for the `wheel` event in IE9+.
	      isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
	    }

	    return isSupported;
	  }
	  var Mousewheel = {
	    lastScrollTime: Utils.now(),
	    event: (function getEvent() {
	      if (win.navigator.userAgent.indexOf('firefox') > -1) { return 'DOMMouseScroll'; }
	      return isEventSupported() ? 'wheel' : 'mousewheel';
	    }()),
	    normalize: function normalize(e) {
	      // Reasonable defaults
	      var PIXEL_STEP = 10;
	      var LINE_HEIGHT = 40;
	      var PAGE_HEIGHT = 800;

	      var sX = 0;
	      var sY = 0; // spinX, spinY
	      var pX = 0;
	      var pY = 0; // pixelX, pixelY

	      // Legacy
	      if ('detail' in e) {
	        sY = e.detail;
	      }
	      if ('wheelDelta' in e) {
	        sY = -e.wheelDelta / 120;
	      }
	      if ('wheelDeltaY' in e) {
	        sY = -e.wheelDeltaY / 120;
	      }
	      if ('wheelDeltaX' in e) {
	        sX = -e.wheelDeltaX / 120;
	      }

	      // side scrolling on FF with DOMMouseScroll
	      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
	        sX = sY;
	        sY = 0;
	      }

	      pX = sX * PIXEL_STEP;
	      pY = sY * PIXEL_STEP;

	      if ('deltaY' in e) {
	        pY = e.deltaY;
	      }
	      if ('deltaX' in e) {
	        pX = e.deltaX;
	      }

	      if ((pX || pY) && e.deltaMode) {
	        if (e.deltaMode === 1) { // delta in LINE units
	          pX *= LINE_HEIGHT;
	          pY *= LINE_HEIGHT;
	        } else { // delta in PAGE units
	          pX *= PAGE_HEIGHT;
	          pY *= PAGE_HEIGHT;
	        }
	      }

	      // Fall-back if spin cannot be determined
	      if (pX && !sX) {
	        sX = (pX < 1) ? -1 : 1;
	      }
	      if (pY && !sY) {
	        sY = (pY < 1) ? -1 : 1;
	      }

	      return {
	        spinX: sX,
	        spinY: sY,
	        pixelX: pX,
	        pixelY: pY,
	      };
	    },
	    handleMouseEnter: function handleMouseEnter() {
	      var swiper = this;
	      swiper.mouseEntered = true;
	    },
	    handleMouseLeave: function handleMouseLeave() {
	      var swiper = this;
	      swiper.mouseEntered = false;
	    },
	    handle: function handle(event) {
	      var e = event;
	      var swiper = this;
	      var params = swiper.params.mousewheel;

	      if (!swiper.mouseEntered && !params.releaseOnEdges) { return true; }

	      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
	      var delta = 0;
	      var rtlFactor = swiper.rtlTranslate ? -1 : 1;

	      var data = Mousewheel.normalize(e);

	      if (params.forceToAxis) {
	        if (swiper.isHorizontal()) {
	          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) { delta = data.pixelX * rtlFactor; }
	          else { return true; }
	        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) { delta = data.pixelY; }
	        else { return true; }
	      } else {
	        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
	      }

	      if (delta === 0) { return true; }

	      if (params.invert) { delta = -delta; }

	      if (!swiper.params.freeMode) {
	        if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
	          if (delta < 0) {
	            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
	              swiper.slideNext();
	              swiper.emit('scroll', e);
	            } else if (params.releaseOnEdges) { return true; }
	          } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
	            swiper.slidePrev();
	            swiper.emit('scroll', e);
	          } else if (params.releaseOnEdges) { return true; }
	        }
	        swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
	      } else {
	        // Freemode or scrollContainer:
	        if (swiper.params.loop) {
	          swiper.loopFix();
	        }
	        var position = swiper.getTranslate() + (delta * params.sensitivity);
	        var wasBeginning = swiper.isBeginning;
	        var wasEnd = swiper.isEnd;

	        if (position >= swiper.minTranslate()) { position = swiper.minTranslate(); }
	        if (position <= swiper.maxTranslate()) { position = swiper.maxTranslate(); }

	        swiper.setTransition(0);
	        swiper.setTranslate(position);
	        swiper.updateProgress();
	        swiper.updateActiveIndex();
	        swiper.updateSlidesClasses();

	        if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
	          swiper.updateSlidesClasses();
	        }

	        if (swiper.params.freeModeSticky) {
	          clearTimeout(swiper.mousewheel.timeout);
	          swiper.mousewheel.timeout = Utils.nextTick(function () {
	            swiper.slideToClosest();
	          }, 300);
	        }
	        // Emit event
	        swiper.emit('scroll', e);

	        // Stop autoplay
	        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) { swiper.autoplay.stop(); }
	        // Return page scroll on edge positions
	        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) { return true; }
	      }

	      if (e.preventDefault) { e.preventDefault(); }
	      else { e.returnValue = false; }
	      return false;
	    },
	    enable: function enable() {
	      var swiper = this;
	      if (!Mousewheel.event) { return false; }
	      if (swiper.mousewheel.enabled) { return false; }
	      var target = swiper.$el;
	      if (swiper.params.mousewheel.eventsTarged !== 'container') {
	        target = $(swiper.params.mousewheel.eventsTarged);
	      }
	      target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
	      target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
	      target.on(Mousewheel.event, swiper.mousewheel.handle);
	      swiper.mousewheel.enabled = true;
	      return true;
	    },
	    disable: function disable() {
	      var swiper = this;
	      if (!Mousewheel.event) { return false; }
	      if (!swiper.mousewheel.enabled) { return false; }
	      var target = swiper.$el;
	      if (swiper.params.mousewheel.eventsTarged !== 'container') {
	        target = $(swiper.params.mousewheel.eventsTarged);
	      }
	      target.off(Mousewheel.event, swiper.mousewheel.handle);
	      swiper.mousewheel.enabled = false;
	      return true;
	    },
	  };

	  var Mousewheel$1 = {
	    name: 'mousewheel',
	    params: {
	      mousewheel: {
	        enabled: false,
	        releaseOnEdges: false,
	        invert: false,
	        forceToAxis: false,
	        sensitivity: 1,
	        eventsTarged: 'container',
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        mousewheel: {
	          enabled: false,
	          enable: Mousewheel.enable.bind(swiper),
	          disable: Mousewheel.disable.bind(swiper),
	          handle: Mousewheel.handle.bind(swiper),
	          handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
	          handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
	          lastScrollTime: Utils.now(),
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        if (swiper.params.mousewheel.enabled) { swiper.mousewheel.enable(); }
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        if (swiper.mousewheel.enabled) { swiper.mousewheel.disable(); }
	      },
	    },
	  };

	  var Navigation = {
	    update: function update() {
	      // Update Navigation Buttons
	      var swiper = this;
	      var params = swiper.params.navigation;

	      if (swiper.params.loop) { return; }
	      var ref = swiper.navigation;
	      var $nextEl = ref.$nextEl;
	      var $prevEl = ref.$prevEl;

	      if ($prevEl && $prevEl.length > 0) {
	        if (swiper.isBeginning) {
	          $prevEl.addClass(params.disabledClass);
	        } else {
	          $prevEl.removeClass(params.disabledClass);
	        }
	        $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
	      }
	      if ($nextEl && $nextEl.length > 0) {
	        if (swiper.isEnd) {
	          $nextEl.addClass(params.disabledClass);
	        } else {
	          $nextEl.removeClass(params.disabledClass);
	        }
	        $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
	      }
	    },
	    onPrevClick: function onPrevClick(e) {
	      var swiper = this;
	      e.preventDefault();
	      if (swiper.isBeginning && !swiper.params.loop) { return; }
	      swiper.slidePrev();
	    },
	    onNextClick: function onNextClick(e) {
	      var swiper = this;
	      e.preventDefault();
	      if (swiper.isEnd && !swiper.params.loop) { return; }
	      swiper.slideNext();
	    },
	    init: function init() {
	      var swiper = this;
	      var params = swiper.params.navigation;
	      if (!(params.nextEl || params.prevEl)) { return; }

	      var $nextEl;
	      var $prevEl;
	      if (params.nextEl) {
	        $nextEl = $(params.nextEl);
	        if (
	          swiper.params.uniqueNavElements
	          && typeof params.nextEl === 'string'
	          && $nextEl.length > 1
	          && swiper.$el.find(params.nextEl).length === 1
	        ) {
	          $nextEl = swiper.$el.find(params.nextEl);
	        }
	      }
	      if (params.prevEl) {
	        $prevEl = $(params.prevEl);
	        if (
	          swiper.params.uniqueNavElements
	          && typeof params.prevEl === 'string'
	          && $prevEl.length > 1
	          && swiper.$el.find(params.prevEl).length === 1
	        ) {
	          $prevEl = swiper.$el.find(params.prevEl);
	        }
	      }

	      if ($nextEl && $nextEl.length > 0) {
	        $nextEl.on('click', swiper.navigation.onNextClick);
	      }
	      if ($prevEl && $prevEl.length > 0) {
	        $prevEl.on('click', swiper.navigation.onPrevClick);
	      }

	      Utils.extend(swiper.navigation, {
	        $nextEl: $nextEl,
	        nextEl: $nextEl && $nextEl[0],
	        $prevEl: $prevEl,
	        prevEl: $prevEl && $prevEl[0],
	      });
	    },
	    destroy: function destroy() {
	      var swiper = this;
	      var ref = swiper.navigation;
	      var $nextEl = ref.$nextEl;
	      var $prevEl = ref.$prevEl;
	      if ($nextEl && $nextEl.length) {
	        $nextEl.off('click', swiper.navigation.onNextClick);
	        $nextEl.removeClass(swiper.params.navigation.disabledClass);
	      }
	      if ($prevEl && $prevEl.length) {
	        $prevEl.off('click', swiper.navigation.onPrevClick);
	        $prevEl.removeClass(swiper.params.navigation.disabledClass);
	      }
	    },
	  };

	  var Navigation$1 = {
	    name: 'navigation',
	    params: {
	      navigation: {
	        nextEl: null,
	        prevEl: null,

	        hideOnClick: false,
	        disabledClass: 'swiper-button-disabled',
	        hiddenClass: 'swiper-button-hidden',
	        lockClass: 'swiper-button-lock',
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        navigation: {
	          init: Navigation.init.bind(swiper),
	          update: Navigation.update.bind(swiper),
	          destroy: Navigation.destroy.bind(swiper),
	          onNextClick: Navigation.onNextClick.bind(swiper),
	          onPrevClick: Navigation.onPrevClick.bind(swiper),
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        swiper.navigation.init();
	        swiper.navigation.update();
	      },
	      toEdge: function toEdge() {
	        var swiper = this;
	        swiper.navigation.update();
	      },
	      fromEdge: function fromEdge() {
	        var swiper = this;
	        swiper.navigation.update();
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        swiper.navigation.destroy();
	      },
	      click: function click(e) {
	        var swiper = this;
	        var ref = swiper.navigation;
	        var $nextEl = ref.$nextEl;
	        var $prevEl = ref.$prevEl;
	        if (
	          swiper.params.navigation.hideOnClick
	          && !$(e.target).is($prevEl)
	          && !$(e.target).is($nextEl)
	        ) {
	          var isHidden;
	          if ($nextEl) {
	            isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
	          } else if ($prevEl) {
	            isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
	          }
	          if (isHidden === true) {
	            swiper.emit('navigationShow', swiper);
	          } else {
	            swiper.emit('navigationHide', swiper);
	          }
	          if ($nextEl) {
	            $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
	          }
	          if ($prevEl) {
	            $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
	          }
	        }
	      },
	    },
	  };

	  var Pagination = {
	    update: function update() {
	      // Render || Update Pagination bullets/items
	      var swiper = this;
	      var rtl = swiper.rtl;
	      var params = swiper.params.pagination;
	      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
	      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
	      var $el = swiper.pagination.$el;
	      // Current/Total
	      var current;
	      var total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
	      if (swiper.params.loop) {
	        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
	        if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
	          current -= (slidesLength - (swiper.loopedSlides * 2));
	        }
	        if (current > total - 1) { current -= total; }
	        if (current < 0 && swiper.params.paginationType !== 'bullets') { current = total + current; }
	      } else if (typeof swiper.snapIndex !== 'undefined') {
	        current = swiper.snapIndex;
	      } else {
	        current = swiper.activeIndex || 0;
	      }
	      // Types
	      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
	        var bullets = swiper.pagination.bullets;
	        var firstIndex;
	        var lastIndex;
	        var midIndex;
	        if (params.dynamicBullets) {
	          swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
	          $el.css(swiper.isHorizontal() ? 'width' : 'height', ((swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)) + "px"));
	          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
	            swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
	            if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
	              swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
	            } else if (swiper.pagination.dynamicBulletIndex < 0) {
	              swiper.pagination.dynamicBulletIndex = 0;
	            }
	          }
	          firstIndex = current - swiper.pagination.dynamicBulletIndex;
	          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
	          midIndex = (lastIndex + firstIndex) / 2;
	        }
	        bullets.removeClass(((params.bulletActiveClass) + " " + (params.bulletActiveClass) + "-next " + (params.bulletActiveClass) + "-next-next " + (params.bulletActiveClass) + "-prev " + (params.bulletActiveClass) + "-prev-prev " + (params.bulletActiveClass) + "-main"));
	        if ($el.length > 1) {
	          bullets.each(function (index, bullet) {
	            var $bullet = $(bullet);
	            var bulletIndex = $bullet.index();
	            if (bulletIndex === current) {
	              $bullet.addClass(params.bulletActiveClass);
	            }
	            if (params.dynamicBullets) {
	              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
	                $bullet.addClass(((params.bulletActiveClass) + "-main"));
	              }
	              if (bulletIndex === firstIndex) {
	                $bullet
	                  .prev()
	                  .addClass(((params.bulletActiveClass) + "-prev"))
	                  .prev()
	                  .addClass(((params.bulletActiveClass) + "-prev-prev"));
	              }
	              if (bulletIndex === lastIndex) {
	                $bullet
	                  .next()
	                  .addClass(((params.bulletActiveClass) + "-next"))
	                  .next()
	                  .addClass(((params.bulletActiveClass) + "-next-next"));
	              }
	            }
	          });
	        } else {
	          var $bullet = bullets.eq(current);
	          $bullet.addClass(params.bulletActiveClass);
	          if (params.dynamicBullets) {
	            var $firstDisplayedBullet = bullets.eq(firstIndex);
	            var $lastDisplayedBullet = bullets.eq(lastIndex);
	            for (var i = firstIndex; i <= lastIndex; i += 1) {
	              bullets.eq(i).addClass(((params.bulletActiveClass) + "-main"));
	            }
	            $firstDisplayedBullet
	              .prev()
	              .addClass(((params.bulletActiveClass) + "-prev"))
	              .prev()
	              .addClass(((params.bulletActiveClass) + "-prev-prev"));
	            $lastDisplayedBullet
	              .next()
	              .addClass(((params.bulletActiveClass) + "-next"))
	              .next()
	              .addClass(((params.bulletActiveClass) + "-next-next"));
	          }
	        }
	        if (params.dynamicBullets) {
	          var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
	          var bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
	          var offsetProp = rtl ? 'right' : 'left';
	          bullets.css(swiper.isHorizontal() ? offsetProp : 'top', (bulletsOffset + "px"));
	        }
	      }
	      if (params.type === 'fraction') {
	        $el.find(("." + (params.currentClass))).text(params.formatFractionCurrent(current + 1));
	        $el.find(("." + (params.totalClass))).text(params.formatFractionTotal(total));
	      }
	      if (params.type === 'progressbar') {
	        var progressbarDirection;
	        if (params.progressbarOpposite) {
	          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
	        } else {
	          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
	        }
	        var scale = (current + 1) / total;
	        var scaleX = 1;
	        var scaleY = 1;
	        if (progressbarDirection === 'horizontal') {
	          scaleX = scale;
	        } else {
	          scaleY = scale;
	        }
	        $el.find(("." + (params.progressbarFillClass))).transform(("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")")).transition(swiper.params.speed);
	      }
	      if (params.type === 'custom' && params.renderCustom) {
	        $el.html(params.renderCustom(swiper, current + 1, total));
	        swiper.emit('paginationRender', swiper, $el[0]);
	      } else {
	        swiper.emit('paginationUpdate', swiper, $el[0]);
	      }
	      $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
	    },
	    render: function render() {
	      // Render Container
	      var swiper = this;
	      var params = swiper.params.pagination;
	      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
	      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

	      var $el = swiper.pagination.$el;
	      var paginationHTML = '';
	      if (params.type === 'bullets') {
	        var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
	        for (var i = 0; i < numberOfBullets; i += 1) {
	          if (params.renderBullet) {
	            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
	          } else {
	            paginationHTML += "<" + (params.bulletElement) + " class=\"" + (params.bulletClass) + "\"></" + (params.bulletElement) + ">";
	          }
	        }
	        $el.html(paginationHTML);
	        swiper.pagination.bullets = $el.find(("." + (params.bulletClass)));
	      }
	      if (params.type === 'fraction') {
	        if (params.renderFraction) {
	          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
	        } else {
	          paginationHTML = "<span class=\"" + (params.currentClass) + "\"></span>"
	          + ' / '
	          + "<span class=\"" + (params.totalClass) + "\"></span>";
	        }
	        $el.html(paginationHTML);
	      }
	      if (params.type === 'progressbar') {
	        if (params.renderProgressbar) {
	          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
	        } else {
	          paginationHTML = "<span class=\"" + (params.progressbarFillClass) + "\"></span>";
	        }
	        $el.html(paginationHTML);
	      }
	      if (params.type !== 'custom') {
	        swiper.emit('paginationRender', swiper.pagination.$el[0]);
	      }
	    },
	    init: function init() {
	      var swiper = this;
	      var params = swiper.params.pagination;
	      if (!params.el) { return; }

	      var $el = $(params.el);
	      if ($el.length === 0) { return; }

	      if (
	        swiper.params.uniqueNavElements
	        && typeof params.el === 'string'
	        && $el.length > 1
	        && swiper.$el.find(params.el).length === 1
	      ) {
	        $el = swiper.$el.find(params.el);
	      }

	      if (params.type === 'bullets' && params.clickable) {
	        $el.addClass(params.clickableClass);
	      }

	      $el.addClass(params.modifierClass + params.type);

	      if (params.type === 'bullets' && params.dynamicBullets) {
	        $el.addClass(("" + (params.modifierClass) + (params.type) + "-dynamic"));
	        swiper.pagination.dynamicBulletIndex = 0;
	        if (params.dynamicMainBullets < 1) {
	          params.dynamicMainBullets = 1;
	        }
	      }
	      if (params.type === 'progressbar' && params.progressbarOpposite) {
	        $el.addClass(params.progressbarOppositeClass);
	      }

	      if (params.clickable) {
	        $el.on('click', ("." + (params.bulletClass)), function onClick(e) {
	          e.preventDefault();
	          var index = $(this).index() * swiper.params.slidesPerGroup;
	          if (swiper.params.loop) { index += swiper.loopedSlides; }
	          swiper.slideTo(index);
	        });
	      }

	      Utils.extend(swiper.pagination, {
	        $el: $el,
	        el: $el[0],
	      });
	    },
	    destroy: function destroy() {
	      var swiper = this;
	      var params = swiper.params.pagination;
	      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
	      var $el = swiper.pagination.$el;

	      $el.removeClass(params.hiddenClass);
	      $el.removeClass(params.modifierClass + params.type);
	      if (swiper.pagination.bullets) { swiper.pagination.bullets.removeClass(params.bulletActiveClass); }
	      if (params.clickable) {
	        $el.off('click', ("." + (params.bulletClass)));
	      }
	    },
	  };

	  var Pagination$1 = {
	    name: 'pagination',
	    params: {
	      pagination: {
	        el: null,
	        bulletElement: 'span',
	        clickable: false,
	        hideOnClick: false,
	        renderBullet: null,
	        renderProgressbar: null,
	        renderFraction: null,
	        renderCustom: null,
	        progressbarOpposite: false,
	        type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
	        dynamicBullets: false,
	        dynamicMainBullets: 1,
	        formatFractionCurrent: function (number) { return number; },
	        formatFractionTotal: function (number) { return number; },
	        bulletClass: 'swiper-pagination-bullet',
	        bulletActiveClass: 'swiper-pagination-bullet-active',
	        modifierClass: 'swiper-pagination-', // NEW
	        currentClass: 'swiper-pagination-current',
	        totalClass: 'swiper-pagination-total',
	        hiddenClass: 'swiper-pagination-hidden',
	        progressbarFillClass: 'swiper-pagination-progressbar-fill',
	        progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
	        clickableClass: 'swiper-pagination-clickable', // NEW
	        lockClass: 'swiper-pagination-lock',
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        pagination: {
	          init: Pagination.init.bind(swiper),
	          render: Pagination.render.bind(swiper),
	          update: Pagination.update.bind(swiper),
	          destroy: Pagination.destroy.bind(swiper),
	          dynamicBulletIndex: 0,
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        swiper.pagination.init();
	        swiper.pagination.render();
	        swiper.pagination.update();
	      },
	      activeIndexChange: function activeIndexChange() {
	        var swiper = this;
	        if (swiper.params.loop) {
	          swiper.pagination.update();
	        } else if (typeof swiper.snapIndex === 'undefined') {
	          swiper.pagination.update();
	        }
	      },
	      snapIndexChange: function snapIndexChange() {
	        var swiper = this;
	        if (!swiper.params.loop) {
	          swiper.pagination.update();
	        }
	      },
	      slidesLengthChange: function slidesLengthChange() {
	        var swiper = this;
	        if (swiper.params.loop) {
	          swiper.pagination.render();
	          swiper.pagination.update();
	        }
	      },
	      snapGridLengthChange: function snapGridLengthChange() {
	        var swiper = this;
	        if (!swiper.params.loop) {
	          swiper.pagination.render();
	          swiper.pagination.update();
	        }
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        swiper.pagination.destroy();
	      },
	      click: function click(e) {
	        var swiper = this;
	        if (
	          swiper.params.pagination.el
	          && swiper.params.pagination.hideOnClick
	          && swiper.pagination.$el.length > 0
	          && !$(e.target).hasClass(swiper.params.pagination.bulletClass)
	        ) {
	          var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
	          if (isHidden === true) {
	            swiper.emit('paginationShow', swiper);
	          } else {
	            swiper.emit('paginationHide', swiper);
	          }
	          swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
	        }
	      },
	    },
	  };

	  var Scrollbar = {
	    setTranslate: function setTranslate() {
	      var swiper = this;
	      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
	      var scrollbar = swiper.scrollbar;
	      var rtl = swiper.rtlTranslate;
	      var progress = swiper.progress;
	      var dragSize = scrollbar.dragSize;
	      var trackSize = scrollbar.trackSize;
	      var $dragEl = scrollbar.$dragEl;
	      var $el = scrollbar.$el;
	      var params = swiper.params.scrollbar;

	      var newSize = dragSize;
	      var newPos = (trackSize - dragSize) * progress;
	      if (rtl) {
	        newPos = -newPos;
	        if (newPos > 0) {
	          newSize = dragSize - newPos;
	          newPos = 0;
	        } else if (-newPos + dragSize > trackSize) {
	          newSize = trackSize + newPos;
	        }
	      } else if (newPos < 0) {
	        newSize = dragSize + newPos;
	        newPos = 0;
	      } else if (newPos + dragSize > trackSize) {
	        newSize = trackSize - newPos;
	      }
	      if (swiper.isHorizontal()) {
	        if (Support.transforms3d) {
	          $dragEl.transform(("translate3d(" + newPos + "px, 0, 0)"));
	        } else {
	          $dragEl.transform(("translateX(" + newPos + "px)"));
	        }
	        $dragEl[0].style.width = newSize + "px";
	      } else {
	        if (Support.transforms3d) {
	          $dragEl.transform(("translate3d(0px, " + newPos + "px, 0)"));
	        } else {
	          $dragEl.transform(("translateY(" + newPos + "px)"));
	        }
	        $dragEl[0].style.height = newSize + "px";
	      }
	      if (params.hide) {
	        clearTimeout(swiper.scrollbar.timeout);
	        $el[0].style.opacity = 1;
	        swiper.scrollbar.timeout = setTimeout(function () {
	          $el[0].style.opacity = 0;
	          $el.transition(400);
	        }, 1000);
	      }
	    },
	    setTransition: function setTransition(duration) {
	      var swiper = this;
	      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
	      swiper.scrollbar.$dragEl.transition(duration);
	    },
	    updateSize: function updateSize() {
	      var swiper = this;
	      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }

	      var scrollbar = swiper.scrollbar;
	      var $dragEl = scrollbar.$dragEl;
	      var $el = scrollbar.$el;

	      $dragEl[0].style.width = '';
	      $dragEl[0].style.height = '';
	      var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

	      var divider = swiper.size / swiper.virtualSize;
	      var moveDivider = divider * (trackSize / swiper.size);
	      var dragSize;
	      if (swiper.params.scrollbar.dragSize === 'auto') {
	        dragSize = trackSize * divider;
	      } else {
	        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
	      }

	      if (swiper.isHorizontal()) {
	        $dragEl[0].style.width = dragSize + "px";
	      } else {
	        $dragEl[0].style.height = dragSize + "px";
	      }

	      if (divider >= 1) {
	        $el[0].style.display = 'none';
	      } else {
	        $el[0].style.display = '';
	      }
	      if (swiper.params.scrollbar.hide) {
	        $el[0].style.opacity = 0;
	      }
	      Utils.extend(scrollbar, {
	        trackSize: trackSize,
	        divider: divider,
	        moveDivider: moveDivider,
	        dragSize: dragSize,
	      });
	      scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
	    },
	    getPointerPosition: function getPointerPosition(e) {
	      var swiper = this;
	      if (swiper.isHorizontal()) {
	        return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX);
	      }
	      return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
	    },
	    setDragPosition: function setDragPosition(e) {
	      var swiper = this;
	      var scrollbar = swiper.scrollbar;
	      var rtl = swiper.rtlTranslate;
	      var $el = scrollbar.$el;
	      var dragSize = scrollbar.dragSize;
	      var trackSize = scrollbar.trackSize;
	      var dragStartPos = scrollbar.dragStartPos;

	      var positionRatio;
	      positionRatio = ((scrollbar.getPointerPosition(e)) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top']
	        - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
	      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
	      if (rtl) {
	        positionRatio = 1 - positionRatio;
	      }

	      var position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);

	      swiper.updateProgress(position);
	      swiper.setTranslate(position);
	      swiper.updateActiveIndex();
	      swiper.updateSlidesClasses();
	    },
	    onDragStart: function onDragStart(e) {
	      var swiper = this;
	      var params = swiper.params.scrollbar;
	      var scrollbar = swiper.scrollbar;
	      var $wrapperEl = swiper.$wrapperEl;
	      var $el = scrollbar.$el;
	      var $dragEl = scrollbar.$dragEl;
	      swiper.scrollbar.isTouched = true;
	      swiper.scrollbar.dragStartPos = (e.target === $dragEl[0] || e.target === $dragEl)
	        ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
	      e.preventDefault();
	      e.stopPropagation();

	      $wrapperEl.transition(100);
	      $dragEl.transition(100);
	      scrollbar.setDragPosition(e);

	      clearTimeout(swiper.scrollbar.dragTimeout);

	      $el.transition(0);
	      if (params.hide) {
	        $el.css('opacity', 1);
	      }
	      swiper.emit('scrollbarDragStart', e);
	    },
	    onDragMove: function onDragMove(e) {
	      var swiper = this;
	      var scrollbar = swiper.scrollbar;
	      var $wrapperEl = swiper.$wrapperEl;
	      var $el = scrollbar.$el;
	      var $dragEl = scrollbar.$dragEl;

	      if (!swiper.scrollbar.isTouched) { return; }
	      if (e.preventDefault) { e.preventDefault(); }
	      else { e.returnValue = false; }
	      scrollbar.setDragPosition(e);
	      $wrapperEl.transition(0);
	      $el.transition(0);
	      $dragEl.transition(0);
	      swiper.emit('scrollbarDragMove', e);
	    },
	    onDragEnd: function onDragEnd(e) {
	      var swiper = this;

	      var params = swiper.params.scrollbar;
	      var scrollbar = swiper.scrollbar;
	      var $el = scrollbar.$el;

	      if (!swiper.scrollbar.isTouched) { return; }
	      swiper.scrollbar.isTouched = false;
	      if (params.hide) {
	        clearTimeout(swiper.scrollbar.dragTimeout);
	        swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
	          $el.css('opacity', 0);
	          $el.transition(400);
	        }, 1000);
	      }
	      swiper.emit('scrollbarDragEnd', e);
	      if (params.snapOnRelease) {
	        swiper.slideToClosest();
	      }
	    },
	    enableDraggable: function enableDraggable() {
	      var swiper = this;
	      if (!swiper.params.scrollbar.el) { return; }
	      var scrollbar = swiper.scrollbar;
	      var touchEventsTouch = swiper.touchEventsTouch;
	      var touchEventsDesktop = swiper.touchEventsDesktop;
	      var params = swiper.params;
	      var $el = scrollbar.$el;
	      var target = $el[0];
	      var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
	      var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
	      if (!Support.touch) {
	        target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
	        doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
	        doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
	      } else {
	        target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
	        target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
	        target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
	      }
	    },
	    disableDraggable: function disableDraggable() {
	      var swiper = this;
	      if (!swiper.params.scrollbar.el) { return; }
	      var scrollbar = swiper.scrollbar;
	      var touchEventsTouch = swiper.touchEventsTouch;
	      var touchEventsDesktop = swiper.touchEventsDesktop;
	      var params = swiper.params;
	      var $el = scrollbar.$el;
	      var target = $el[0];
	      var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
	      var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
	      if (!Support.touch) {
	        target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
	        doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
	        doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
	      } else {
	        target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
	        target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
	        target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
	      }
	    },
	    init: function init() {
	      var swiper = this;
	      if (!swiper.params.scrollbar.el) { return; }
	      var scrollbar = swiper.scrollbar;
	      var $swiperEl = swiper.$el;
	      var params = swiper.params.scrollbar;

	      var $el = $(params.el);
	      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
	        $el = $swiperEl.find(params.el);
	      }

	      var $dragEl = $el.find(("." + (swiper.params.scrollbar.dragClass)));
	      if ($dragEl.length === 0) {
	        $dragEl = $(("<div class=\"" + (swiper.params.scrollbar.dragClass) + "\"></div>"));
	        $el.append($dragEl);
	      }

	      Utils.extend(scrollbar, {
	        $el: $el,
	        el: $el[0],
	        $dragEl: $dragEl,
	        dragEl: $dragEl[0],
	      });

	      if (params.draggable) {
	        scrollbar.enableDraggable();
	      }
	    },
	    destroy: function destroy() {
	      var swiper = this;
	      swiper.scrollbar.disableDraggable();
	    },
	  };

	  var Scrollbar$1 = {
	    name: 'scrollbar',
	    params: {
	      scrollbar: {
	        el: null,
	        dragSize: 'auto',
	        hide: false,
	        draggable: false,
	        snapOnRelease: true,
	        lockClass: 'swiper-scrollbar-lock',
	        dragClass: 'swiper-scrollbar-drag',
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        scrollbar: {
	          init: Scrollbar.init.bind(swiper),
	          destroy: Scrollbar.destroy.bind(swiper),
	          updateSize: Scrollbar.updateSize.bind(swiper),
	          setTranslate: Scrollbar.setTranslate.bind(swiper),
	          setTransition: Scrollbar.setTransition.bind(swiper),
	          enableDraggable: Scrollbar.enableDraggable.bind(swiper),
	          disableDraggable: Scrollbar.disableDraggable.bind(swiper),
	          setDragPosition: Scrollbar.setDragPosition.bind(swiper),
	          getPointerPosition: Scrollbar.getPointerPosition.bind(swiper),
	          onDragStart: Scrollbar.onDragStart.bind(swiper),
	          onDragMove: Scrollbar.onDragMove.bind(swiper),
	          onDragEnd: Scrollbar.onDragEnd.bind(swiper),
	          isTouched: false,
	          timeout: null,
	          dragTimeout: null,
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        swiper.scrollbar.init();
	        swiper.scrollbar.updateSize();
	        swiper.scrollbar.setTranslate();
	      },
	      update: function update() {
	        var swiper = this;
	        swiper.scrollbar.updateSize();
	      },
	      resize: function resize() {
	        var swiper = this;
	        swiper.scrollbar.updateSize();
	      },
	      observerUpdate: function observerUpdate() {
	        var swiper = this;
	        swiper.scrollbar.updateSize();
	      },
	      setTranslate: function setTranslate() {
	        var swiper = this;
	        swiper.scrollbar.setTranslate();
	      },
	      setTransition: function setTransition(duration) {
	        var swiper = this;
	        swiper.scrollbar.setTransition(duration);
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        swiper.scrollbar.destroy();
	      },
	    },
	  };

	  var Parallax = {
	    setTransform: function setTransform(el, progress) {
	      var swiper = this;
	      var rtl = swiper.rtl;

	      var $el = $(el);
	      var rtlFactor = rtl ? -1 : 1;

	      var p = $el.attr('data-swiper-parallax') || '0';
	      var x = $el.attr('data-swiper-parallax-x');
	      var y = $el.attr('data-swiper-parallax-y');
	      var scale = $el.attr('data-swiper-parallax-scale');
	      var opacity = $el.attr('data-swiper-parallax-opacity');

	      if (x || y) {
	        x = x || '0';
	        y = y || '0';
	      } else if (swiper.isHorizontal()) {
	        x = p;
	        y = '0';
	      } else {
	        y = p;
	        x = '0';
	      }

	      if ((x).indexOf('%') >= 0) {
	        x = (parseInt(x, 10) * progress * rtlFactor) + "%";
	      } else {
	        x = (x * progress * rtlFactor) + "px";
	      }
	      if ((y).indexOf('%') >= 0) {
	        y = (parseInt(y, 10) * progress) + "%";
	      } else {
	        y = (y * progress) + "px";
	      }

	      if (typeof opacity !== 'undefined' && opacity !== null) {
	        var currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
	        $el[0].style.opacity = currentOpacity;
	      }
	      if (typeof scale === 'undefined' || scale === null) {
	        $el.transform(("translate3d(" + x + ", " + y + ", 0px)"));
	      } else {
	        var currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
	        $el.transform(("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"));
	      }
	    },
	    setTranslate: function setTranslate() {
	      var swiper = this;
	      var $el = swiper.$el;
	      var slides = swiper.slides;
	      var progress = swiper.progress;
	      var snapGrid = swiper.snapGrid;
	      $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
	        .each(function (index, el) {
	          swiper.parallax.setTransform(el, progress);
	        });
	      slides.each(function (slideIndex, slideEl) {
	        var slideProgress = slideEl.progress;
	        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
	          slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
	        }
	        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
	        $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
	          .each(function (index, el) {
	            swiper.parallax.setTransform(el, slideProgress);
	          });
	      });
	    },
	    setTransition: function setTransition(duration) {
	      if ( duration === void 0 ) duration = this.params.speed;

	      var swiper = this;
	      var $el = swiper.$el;
	      $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
	        .each(function (index, parallaxEl) {
	          var $parallaxEl = $(parallaxEl);
	          var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
	          if (duration === 0) { parallaxDuration = 0; }
	          $parallaxEl.transition(parallaxDuration);
	        });
	    },
	  };

	  var Parallax$1 = {
	    name: 'parallax',
	    params: {
	      parallax: {
	        enabled: false,
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        parallax: {
	          setTransform: Parallax.setTransform.bind(swiper),
	          setTranslate: Parallax.setTranslate.bind(swiper),
	          setTransition: Parallax.setTransition.bind(swiper),
	        },
	      });
	    },
	    on: {
	      beforeInit: function beforeInit() {
	        var swiper = this;
	        if (!swiper.params.parallax.enabled) { return; }
	        swiper.params.watchSlidesProgress = true;
	        swiper.originalParams.watchSlidesProgress = true;
	      },
	      init: function init() {
	        var swiper = this;
	        if (!swiper.params.parallax.enabled) { return; }
	        swiper.parallax.setTranslate();
	      },
	      setTranslate: function setTranslate() {
	        var swiper = this;
	        if (!swiper.params.parallax.enabled) { return; }
	        swiper.parallax.setTranslate();
	      },
	      setTransition: function setTransition(duration) {
	        var swiper = this;
	        if (!swiper.params.parallax.enabled) { return; }
	        swiper.parallax.setTransition(duration);
	      },
	    },
	  };

	  var Zoom = {
	    // Calc Scale From Multi-touches
	    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
	      if (e.targetTouches.length < 2) { return 1; }
	      var x1 = e.targetTouches[0].pageX;
	      var y1 = e.targetTouches[0].pageY;
	      var x2 = e.targetTouches[1].pageX;
	      var y2 = e.targetTouches[1].pageY;
	      var distance = Math.sqrt((Math.pow( (x2 - x1), 2 )) + (Math.pow( (y2 - y1), 2 )));
	      return distance;
	    },
	    // Events
	    onGestureStart: function onGestureStart(e) {
	      var swiper = this;
	      var params = swiper.params.zoom;
	      var zoom = swiper.zoom;
	      var gesture = zoom.gesture;
	      zoom.fakeGestureTouched = false;
	      zoom.fakeGestureMoved = false;
	      if (!Support.gestures) {
	        if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
	          return;
	        }
	        zoom.fakeGestureTouched = true;
	        gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
	      }
	      if (!gesture.$slideEl || !gesture.$slideEl.length) {
	        gesture.$slideEl = $(e.target).closest('.swiper-slide');
	        if (gesture.$slideEl.length === 0) { gesture.$slideEl = swiper.slides.eq(swiper.activeIndex); }
	        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
	        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
	        gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
	        if (gesture.$imageWrapEl.length === 0) {
	          gesture.$imageEl = undefined;
	          return;
	        }
	      }
	      gesture.$imageEl.transition(0);
	      swiper.zoom.isScaling = true;
	    },
	    onGestureChange: function onGestureChange(e) {
	      var swiper = this;
	      var params = swiper.params.zoom;
	      var zoom = swiper.zoom;
	      var gesture = zoom.gesture;
	      if (!Support.gestures) {
	        if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
	          return;
	        }
	        zoom.fakeGestureMoved = true;
	        gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
	      }
	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
	      if (Support.gestures) {
	        zoom.scale = e.scale * zoom.currentScale;
	      } else {
	        zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
	      }
	      if (zoom.scale > gesture.maxRatio) {
	        zoom.scale = (gesture.maxRatio - 1) + (Math.pow( ((zoom.scale - gesture.maxRatio) + 1), 0.5 ));
	      }
	      if (zoom.scale < params.minRatio) {
	        zoom.scale = (params.minRatio + 1) - (Math.pow( ((params.minRatio - zoom.scale) + 1), 0.5 ));
	      }
	      gesture.$imageEl.transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
	    },
	    onGestureEnd: function onGestureEnd(e) {
	      var swiper = this;
	      var params = swiper.params.zoom;
	      var zoom = swiper.zoom;
	      var gesture = zoom.gesture;
	      if (!Support.gestures) {
	        if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
	          return;
	        }
	        if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
	          return;
	        }
	        zoom.fakeGestureTouched = false;
	        zoom.fakeGestureMoved = false;
	      }
	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
	      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
	      gesture.$imageEl.transition(swiper.params.speed).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
	      zoom.currentScale = zoom.scale;
	      zoom.isScaling = false;
	      if (zoom.scale === 1) { gesture.$slideEl = undefined; }
	    },
	    onTouchStart: function onTouchStart(e) {
	      var swiper = this;
	      var zoom = swiper.zoom;
	      var gesture = zoom.gesture;
	      var image = zoom.image;
	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
	      if (image.isTouched) { return; }
	      if (Device.android) { e.preventDefault(); }
	      image.isTouched = true;
	      image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
	      image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
	    },
	    onTouchMove: function onTouchMove(e) {
	      var swiper = this;
	      var zoom = swiper.zoom;
	      var gesture = zoom.gesture;
	      var image = zoom.image;
	      var velocity = zoom.velocity;
	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
	      swiper.allowClick = false;
	      if (!image.isTouched || !gesture.$slideEl) { return; }

	      if (!image.isMoved) {
	        image.width = gesture.$imageEl[0].offsetWidth;
	        image.height = gesture.$imageEl[0].offsetHeight;
	        image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
	        image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
	        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
	        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
	        gesture.$imageWrapEl.transition(0);
	        if (swiper.rtl) {
	          image.startX = -image.startX;
	          image.startY = -image.startY;
	        }
	      }
	      // Define if we need image drag
	      var scaledWidth = image.width * zoom.scale;
	      var scaledHeight = image.height * zoom.scale;

	      if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) { return; }

	      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
	      image.maxX = -image.minX;
	      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
	      image.maxY = -image.minY;

	      image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	      image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

	      if (!image.isMoved && !zoom.isScaling) {
	        if (
	          swiper.isHorizontal()
	          && (
	            (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x)
	            || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
	          )
	        ) {
	          image.isTouched = false;
	          return;
	        } if (
	          !swiper.isHorizontal()
	          && (
	            (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y)
	            || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
	          )
	        ) {
	          image.isTouched = false;
	          return;
	        }
	      }
	      e.preventDefault();
	      e.stopPropagation();

	      image.isMoved = true;
	      image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
	      image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;

	      if (image.currentX < image.minX) {
	        image.currentX = (image.minX + 1) - (Math.pow( ((image.minX - image.currentX) + 1), 0.8 ));
	      }
	      if (image.currentX > image.maxX) {
	        image.currentX = (image.maxX - 1) + (Math.pow( ((image.currentX - image.maxX) + 1), 0.8 ));
	      }

	      if (image.currentY < image.minY) {
	        image.currentY = (image.minY + 1) - (Math.pow( ((image.minY - image.currentY) + 1), 0.8 ));
	      }
	      if (image.currentY > image.maxY) {
	        image.currentY = (image.maxY - 1) + (Math.pow( ((image.currentY - image.maxY) + 1), 0.8 ));
	      }

	      // Velocity
	      if (!velocity.prevPositionX) { velocity.prevPositionX = image.touchesCurrent.x; }
	      if (!velocity.prevPositionY) { velocity.prevPositionY = image.touchesCurrent.y; }
	      if (!velocity.prevTime) { velocity.prevTime = Date.now(); }
	      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
	      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
	      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) { velocity.x = 0; }
	      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) { velocity.y = 0; }
	      velocity.prevPositionX = image.touchesCurrent.x;
	      velocity.prevPositionY = image.touchesCurrent.y;
	      velocity.prevTime = Date.now();

	      gesture.$imageWrapEl.transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
	    },
	    onTouchEnd: function onTouchEnd() {
	      var swiper = this;
	      var zoom = swiper.zoom;
	      var gesture = zoom.gesture;
	      var image = zoom.image;
	      var velocity = zoom.velocity;
	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
	      if (!image.isTouched || !image.isMoved) {
	        image.isTouched = false;
	        image.isMoved = false;
	        return;
	      }
	      image.isTouched = false;
	      image.isMoved = false;
	      var momentumDurationX = 300;
	      var momentumDurationY = 300;
	      var momentumDistanceX = velocity.x * momentumDurationX;
	      var newPositionX = image.currentX + momentumDistanceX;
	      var momentumDistanceY = velocity.y * momentumDurationY;
	      var newPositionY = image.currentY + momentumDistanceY;

	      // Fix duration
	      if (velocity.x !== 0) { momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x); }
	      if (velocity.y !== 0) { momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y); }
	      var momentumDuration = Math.max(momentumDurationX, momentumDurationY);

	      image.currentX = newPositionX;
	      image.currentY = newPositionY;

	      // Define if we need image drag
	      var scaledWidth = image.width * zoom.scale;
	      var scaledHeight = image.height * zoom.scale;
	      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
	      image.maxX = -image.minX;
	      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
	      image.maxY = -image.minY;
	      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
	      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

	      gesture.$imageWrapEl.transition(momentumDuration).transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
	    },
	    onTransitionEnd: function onTransitionEnd() {
	      var swiper = this;
	      var zoom = swiper.zoom;
	      var gesture = zoom.gesture;
	      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
	        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
	        gesture.$imageWrapEl.transform('translate3d(0,0,0)');

	        zoom.scale = 1;
	        zoom.currentScale = 1;

	        gesture.$slideEl = undefined;
	        gesture.$imageEl = undefined;
	        gesture.$imageWrapEl = undefined;
	      }
	    },
	    // Toggle Zoom
	    toggle: function toggle(e) {
	      var swiper = this;
	      var zoom = swiper.zoom;

	      if (zoom.scale && zoom.scale !== 1) {
	        // Zoom Out
	        zoom.out();
	      } else {
	        // Zoom In
	        zoom.in(e);
	      }
	    },
	    in: function in$1(e) {
	      var swiper = this;

	      var zoom = swiper.zoom;
	      var params = swiper.params.zoom;
	      var gesture = zoom.gesture;
	      var image = zoom.image;

	      if (!gesture.$slideEl) {
	        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
	        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
	        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
	      }
	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

	      gesture.$slideEl.addClass(("" + (params.zoomedSlideClass)));

	      var touchX;
	      var touchY;
	      var offsetX;
	      var offsetY;
	      var diffX;
	      var diffY;
	      var translateX;
	      var translateY;
	      var imageWidth;
	      var imageHeight;
	      var scaledWidth;
	      var scaledHeight;
	      var translateMinX;
	      var translateMinY;
	      var translateMaxX;
	      var translateMaxY;
	      var slideWidth;
	      var slideHeight;

	      if (typeof image.touchesStart.x === 'undefined' && e) {
	        touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
	        touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
	      } else {
	        touchX = image.touchesStart.x;
	        touchY = image.touchesStart.y;
	      }

	      zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
	      zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
	      if (e) {
	        slideWidth = gesture.$slideEl[0].offsetWidth;
	        slideHeight = gesture.$slideEl[0].offsetHeight;
	        offsetX = gesture.$slideEl.offset().left;
	        offsetY = gesture.$slideEl.offset().top;
	        diffX = (offsetX + (slideWidth / 2)) - touchX;
	        diffY = (offsetY + (slideHeight / 2)) - touchY;

	        imageWidth = gesture.$imageEl[0].offsetWidth;
	        imageHeight = gesture.$imageEl[0].offsetHeight;
	        scaledWidth = imageWidth * zoom.scale;
	        scaledHeight = imageHeight * zoom.scale;

	        translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
	        translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
	        translateMaxX = -translateMinX;
	        translateMaxY = -translateMinY;

	        translateX = diffX * zoom.scale;
	        translateY = diffY * zoom.scale;

	        if (translateX < translateMinX) {
	          translateX = translateMinX;
	        }
	        if (translateX > translateMaxX) {
	          translateX = translateMaxX;
	        }

	        if (translateY < translateMinY) {
	          translateY = translateMinY;
	        }
	        if (translateY > translateMaxY) {
	          translateY = translateMaxY;
	        }
	      } else {
	        translateX = 0;
	        translateY = 0;
	      }
	      gesture.$imageWrapEl.transition(300).transform(("translate3d(" + translateX + "px, " + translateY + "px,0)"));
	      gesture.$imageEl.transition(300).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
	    },
	    out: function out() {
	      var swiper = this;

	      var zoom = swiper.zoom;
	      var params = swiper.params.zoom;
	      var gesture = zoom.gesture;

	      if (!gesture.$slideEl) {
	        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
	        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
	        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
	      }
	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

	      zoom.scale = 1;
	      zoom.currentScale = 1;
	      gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
	      gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
	      gesture.$slideEl.removeClass(("" + (params.zoomedSlideClass)));
	      gesture.$slideEl = undefined;
	    },
	    // Attach/Detach Events
	    enable: function enable() {
	      var swiper = this;
	      var zoom = swiper.zoom;
	      if (zoom.enabled) { return; }
	      zoom.enabled = true;

	      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

	      // Scale image
	      if (Support.gestures) {
	        swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
	        swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
	        swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
	      } else if (swiper.touchEvents.start === 'touchstart') {
	        swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
	        swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
	        swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
	      }

	      // Move image
	      swiper.$wrapperEl.on(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
	    },
	    disable: function disable() {
	      var swiper = this;
	      var zoom = swiper.zoom;
	      if (!zoom.enabled) { return; }

	      swiper.zoom.enabled = false;

	      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

	      // Scale image
	      if (Support.gestures) {
	        swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
	        swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
	        swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
	      } else if (swiper.touchEvents.start === 'touchstart') {
	        swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
	        swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
	        swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
	      }

	      // Move image
	      swiper.$wrapperEl.off(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
	    },
	  };

	  var Zoom$1 = {
	    name: 'zoom',
	    params: {
	      zoom: {
	        enabled: false,
	        maxRatio: 3,
	        minRatio: 1,
	        toggle: true,
	        containerClass: 'swiper-zoom-container',
	        zoomedSlideClass: 'swiper-slide-zoomed',
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      var zoom = {
	        enabled: false,
	        scale: 1,
	        currentScale: 1,
	        isScaling: false,
	        gesture: {
	          $slideEl: undefined,
	          slideWidth: undefined,
	          slideHeight: undefined,
	          $imageEl: undefined,
	          $imageWrapEl: undefined,
	          maxRatio: 3,
	        },
	        image: {
	          isTouched: undefined,
	          isMoved: undefined,
	          currentX: undefined,
	          currentY: undefined,
	          minX: undefined,
	          minY: undefined,
	          maxX: undefined,
	          maxY: undefined,
	          width: undefined,
	          height: undefined,
	          startX: undefined,
	          startY: undefined,
	          touchesStart: {},
	          touchesCurrent: {},
	        },
	        velocity: {
	          x: undefined,
	          y: undefined,
	          prevPositionX: undefined,
	          prevPositionY: undefined,
	          prevTime: undefined,
	        },
	      };

	      ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function (methodName) {
	        zoom[methodName] = Zoom[methodName].bind(swiper);
	      });
	      Utils.extend(swiper, {
	        zoom: zoom,
	      });

	      var scale = 1;
	      Object.defineProperty(swiper.zoom, 'scale', {
	        get: function get() {
	          return scale;
	        },
	        set: function set(value) {
	          if (scale !== value) {
	            var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
	            var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
	            swiper.emit('zoomChange', value, imageEl, slideEl);
	          }
	          scale = value;
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        if (swiper.params.zoom.enabled) {
	          swiper.zoom.enable();
	        }
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        swiper.zoom.disable();
	      },
	      touchStart: function touchStart(e) {
	        var swiper = this;
	        if (!swiper.zoom.enabled) { return; }
	        swiper.zoom.onTouchStart(e);
	      },
	      touchEnd: function touchEnd(e) {
	        var swiper = this;
	        if (!swiper.zoom.enabled) { return; }
	        swiper.zoom.onTouchEnd(e);
	      },
	      doubleTap: function doubleTap(e) {
	        var swiper = this;
	        if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
	          swiper.zoom.toggle(e);
	        }
	      },
	      transitionEnd: function transitionEnd() {
	        var swiper = this;
	        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
	          swiper.zoom.onTransitionEnd();
	        }
	      },
	    },
	  };

	  var Lazy = {
	    loadInSlide: function loadInSlide(index, loadInDuplicate) {
	      if ( loadInDuplicate === void 0 ) loadInDuplicate = true;

	      var swiper = this;
	      var params = swiper.params.lazy;
	      if (typeof index === 'undefined') { return; }
	      if (swiper.slides.length === 0) { return; }
	      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

	      var $slideEl = isVirtual
	        ? swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]"))
	        : swiper.slides.eq(index);

	      var $images = $slideEl.find(("." + (params.elementClass) + ":not(." + (params.loadedClass) + "):not(." + (params.loadingClass) + ")"));
	      if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
	        $images = $images.add($slideEl[0]);
	      }
	      if ($images.length === 0) { return; }

	      $images.each(function (imageIndex, imageEl) {
	        var $imageEl = $(imageEl);
	        $imageEl.addClass(params.loadingClass);

	        var background = $imageEl.attr('data-background');
	        var src = $imageEl.attr('data-src');
	        var srcset = $imageEl.attr('data-srcset');
	        var sizes = $imageEl.attr('data-sizes');

	        swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, function () {
	          if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) { return; }
	          if (background) {
	            $imageEl.css('background-image', ("url(\"" + background + "\")"));
	            $imageEl.removeAttr('data-background');
	          } else {
	            if (srcset) {
	              $imageEl.attr('srcset', srcset);
	              $imageEl.removeAttr('data-srcset');
	            }
	            if (sizes) {
	              $imageEl.attr('sizes', sizes);
	              $imageEl.removeAttr('data-sizes');
	            }
	            if (src) {
	              $imageEl.attr('src', src);
	              $imageEl.removeAttr('data-src');
	            }
	          }

	          $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
	          $slideEl.find(("." + (params.preloaderClass))).remove();
	          if (swiper.params.loop && loadInDuplicate) {
	            var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
	            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
	              var originalSlide = swiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + (swiper.params.slideDuplicateClass) + ")"));
	              swiper.lazy.loadInSlide(originalSlide.index(), false);
	            } else {
	              var duplicatedSlide = swiper.$wrapperEl.children(("." + (swiper.params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]"));
	              swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
	            }
	          }
	          swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
	        });

	        swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
	      });
	    },
	    load: function load() {
	      var swiper = this;
	      var $wrapperEl = swiper.$wrapperEl;
	      var swiperParams = swiper.params;
	      var slides = swiper.slides;
	      var activeIndex = swiper.activeIndex;
	      var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
	      var params = swiperParams.lazy;

	      var slidesPerView = swiperParams.slidesPerView;
	      if (slidesPerView === 'auto') {
	        slidesPerView = 0;
	      }

	      function slideExist(index) {
	        if (isVirtual) {
	          if ($wrapperEl.children(("." + (swiperParams.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")).length) {
	            return true;
	          }
	        } else if (slides[index]) { return true; }
	        return false;
	      }
	      function slideIndex(slideEl) {
	        if (isVirtual) {
	          return $(slideEl).attr('data-swiper-slide-index');
	        }
	        return $(slideEl).index();
	      }

	      if (!swiper.lazy.initialImageLoaded) { swiper.lazy.initialImageLoaded = true; }
	      if (swiper.params.watchSlidesVisibility) {
	        $wrapperEl.children(("." + (swiperParams.slideVisibleClass))).each(function (elIndex, slideEl) {
	          var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
	          swiper.lazy.loadInSlide(index);
	        });
	      } else if (slidesPerView > 1) {
	        for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
	          if (slideExist(i)) { swiper.lazy.loadInSlide(i); }
	        }
	      } else {
	        swiper.lazy.loadInSlide(activeIndex);
	      }
	      if (params.loadPrevNext) {
	        if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
	          var amount = params.loadPrevNextAmount;
	          var spv = slidesPerView;
	          var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
	          var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
	          // Next Slides
	          for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
	            if (slideExist(i$1)) { swiper.lazy.loadInSlide(i$1); }
	          }
	          // Prev Slides
	          for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
	            if (slideExist(i$2)) { swiper.lazy.loadInSlide(i$2); }
	          }
	        } else {
	          var nextSlide = $wrapperEl.children(("." + (swiperParams.slideNextClass)));
	          if (nextSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(nextSlide)); }

	          var prevSlide = $wrapperEl.children(("." + (swiperParams.slidePrevClass)));
	          if (prevSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(prevSlide)); }
	        }
	      }
	    },
	  };

	  var Lazy$1 = {
	    name: 'lazy',
	    params: {
	      lazy: {
	        enabled: false,
	        loadPrevNext: false,
	        loadPrevNextAmount: 1,
	        loadOnTransitionStart: false,

	        elementClass: 'swiper-lazy',
	        loadingClass: 'swiper-lazy-loading',
	        loadedClass: 'swiper-lazy-loaded',
	        preloaderClass: 'swiper-lazy-preloader',
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        lazy: {
	          initialImageLoaded: false,
	          load: Lazy.load.bind(swiper),
	          loadInSlide: Lazy.loadInSlide.bind(swiper),
	        },
	      });
	    },
	    on: {
	      beforeInit: function beforeInit() {
	        var swiper = this;
	        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
	          swiper.params.preloadImages = false;
	        }
	      },
	      init: function init() {
	        var swiper = this;
	        if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
	          swiper.lazy.load();
	        }
	      },
	      scroll: function scroll() {
	        var swiper = this;
	        if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
	          swiper.lazy.load();
	        }
	      },
	      resize: function resize() {
	        var swiper = this;
	        if (swiper.params.lazy.enabled) {
	          swiper.lazy.load();
	        }
	      },
	      scrollbarDragMove: function scrollbarDragMove() {
	        var swiper = this;
	        if (swiper.params.lazy.enabled) {
	          swiper.lazy.load();
	        }
	      },
	      transitionStart: function transitionStart() {
	        var swiper = this;
	        if (swiper.params.lazy.enabled) {
	          if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
	            swiper.lazy.load();
	          }
	        }
	      },
	      transitionEnd: function transitionEnd() {
	        var swiper = this;
	        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
	          swiper.lazy.load();
	        }
	      },
	    },
	  };

	  /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

	  var Controller = {
	    LinearSpline: function LinearSpline(x, y) {
	      var binarySearch = (function search() {
	        var maxIndex;
	        var minIndex;
	        var guess;
	        return function (array, val) {
	          minIndex = -1;
	          maxIndex = array.length;
	          while (maxIndex - minIndex > 1) {
	            guess = maxIndex + minIndex >> 1;
	            if (array[guess] <= val) {
	              minIndex = guess;
	            } else {
	              maxIndex = guess;
	            }
	          }
	          return maxIndex;
	        };
	      }());
	      this.x = x;
	      this.y = y;
	      this.lastIndex = x.length - 1;
	      // Given an x value (x2), return the expected y2 value:
	      // (x1,y1) is the known point before given value,
	      // (x3,y3) is the known point after given value.
	      var i1;
	      var i3;

	      this.interpolate = function interpolate(x2) {
	        if (!x2) { return 0; }

	        // Get the indexes of x1 and x3 (the array indexes before and after given x2):
	        i3 = binarySearch(this.x, x2);
	        i1 = i3 - 1;

	        // We have our indexes i1 & i3, so we can calculate already:
	        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
	        return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
	      };
	      return this;
	    },
	    // xxx: for now i will just save one spline function to to
	    getInterpolateFunction: function getInterpolateFunction(c) {
	      var swiper = this;
	      if (!swiper.controller.spline) {
	        swiper.controller.spline = swiper.params.loop
	          ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
	          : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
	      }
	    },
	    setTranslate: function setTranslate(setTranslate$1, byController) {
	      var swiper = this;
	      var controlled = swiper.controller.control;
	      var multiplier;
	      var controlledTranslate;
	      function setControlledTranslate(c) {
	        // this will create an Interpolate function based on the snapGrids
	        // x is the Grid of the scrolled scroller and y will be the controlled scroller
	        // it makes sense to create this only once and recall it for the interpolation
	        // the function does a lot of value caching for performance
	        var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
	        if (swiper.params.controller.by === 'slide') {
	          swiper.controller.getInterpolateFunction(c);
	          // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
	          // but it did not work out
	          controlledTranslate = -swiper.controller.spline.interpolate(-translate);
	        }

	        if (!controlledTranslate || swiper.params.controller.by === 'container') {
	          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
	          controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
	        }

	        if (swiper.params.controller.inverse) {
	          controlledTranslate = c.maxTranslate() - controlledTranslate;
	        }
	        c.updateProgress(controlledTranslate);
	        c.setTranslate(controlledTranslate, swiper);
	        c.updateActiveIndex();
	        c.updateSlidesClasses();
	      }
	      if (Array.isArray(controlled)) {
	        for (var i = 0; i < controlled.length; i += 1) {
	          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
	            setControlledTranslate(controlled[i]);
	          }
	        }
	      } else if (controlled instanceof Swiper && byController !== controlled) {
	        setControlledTranslate(controlled);
	      }
	    },
	    setTransition: function setTransition(duration, byController) {
	      var swiper = this;
	      var controlled = swiper.controller.control;
	      var i;
	      function setControlledTransition(c) {
	        c.setTransition(duration, swiper);
	        if (duration !== 0) {
	          c.transitionStart();
	          if (c.params.autoHeight) {
	            Utils.nextTick(function () {
	              c.updateAutoHeight();
	            });
	          }
	          c.$wrapperEl.transitionEnd(function () {
	            if (!controlled) { return; }
	            if (c.params.loop && swiper.params.controller.by === 'slide') {
	              c.loopFix();
	            }
	            c.transitionEnd();
	          });
	        }
	      }
	      if (Array.isArray(controlled)) {
	        for (i = 0; i < controlled.length; i += 1) {
	          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
	            setControlledTransition(controlled[i]);
	          }
	        }
	      } else if (controlled instanceof Swiper && byController !== controlled) {
	        setControlledTransition(controlled);
	      }
	    },
	  };
	  var Controller$1 = {
	    name: 'controller',
	    params: {
	      controller: {
	        control: undefined,
	        inverse: false,
	        by: 'slide', // or 'container'
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        controller: {
	          control: swiper.params.controller.control,
	          getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
	          setTranslate: Controller.setTranslate.bind(swiper),
	          setTransition: Controller.setTransition.bind(swiper),
	        },
	      });
	    },
	    on: {
	      update: function update() {
	        var swiper = this;
	        if (!swiper.controller.control) { return; }
	        if (swiper.controller.spline) {
	          swiper.controller.spline = undefined;
	          delete swiper.controller.spline;
	        }
	      },
	      resize: function resize() {
	        var swiper = this;
	        if (!swiper.controller.control) { return; }
	        if (swiper.controller.spline) {
	          swiper.controller.spline = undefined;
	          delete swiper.controller.spline;
	        }
	      },
	      observerUpdate: function observerUpdate() {
	        var swiper = this;
	        if (!swiper.controller.control) { return; }
	        if (swiper.controller.spline) {
	          swiper.controller.spline = undefined;
	          delete swiper.controller.spline;
	        }
	      },
	      setTranslate: function setTranslate(translate, byController) {
	        var swiper = this;
	        if (!swiper.controller.control) { return; }
	        swiper.controller.setTranslate(translate, byController);
	      },
	      setTransition: function setTransition(duration, byController) {
	        var swiper = this;
	        if (!swiper.controller.control) { return; }
	        swiper.controller.setTransition(duration, byController);
	      },
	    },
	  };

	  var a11y = {
	    makeElFocusable: function makeElFocusable($el) {
	      $el.attr('tabIndex', '0');
	      return $el;
	    },
	    addElRole: function addElRole($el, role) {
	      $el.attr('role', role);
	      return $el;
	    },
	    addElLabel: function addElLabel($el, label) {
	      $el.attr('aria-label', label);
	      return $el;
	    },
	    disableEl: function disableEl($el) {
	      $el.attr('aria-disabled', true);
	      return $el;
	    },
	    enableEl: function enableEl($el) {
	      $el.attr('aria-disabled', false);
	      return $el;
	    },
	    onEnterKey: function onEnterKey(e) {
	      var swiper = this;
	      var params = swiper.params.a11y;
	      if (e.keyCode !== 13) { return; }
	      var $targetEl = $(e.target);
	      if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
	        if (!(swiper.isEnd && !swiper.params.loop)) {
	          swiper.slideNext();
	        }
	        if (swiper.isEnd) {
	          swiper.a11y.notify(params.lastSlideMessage);
	        } else {
	          swiper.a11y.notify(params.nextSlideMessage);
	        }
	      }
	      if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
	        if (!(swiper.isBeginning && !swiper.params.loop)) {
	          swiper.slidePrev();
	        }
	        if (swiper.isBeginning) {
	          swiper.a11y.notify(params.firstSlideMessage);
	        } else {
	          swiper.a11y.notify(params.prevSlideMessage);
	        }
	      }
	      if (swiper.pagination && $targetEl.is(("." + (swiper.params.pagination.bulletClass)))) {
	        $targetEl[0].click();
	      }
	    },
	    notify: function notify(message) {
	      var swiper = this;
	      var notification = swiper.a11y.liveRegion;
	      if (notification.length === 0) { return; }
	      notification.html('');
	      notification.html(message);
	    },
	    updateNavigation: function updateNavigation() {
	      var swiper = this;

	      if (swiper.params.loop) { return; }
	      var ref = swiper.navigation;
	      var $nextEl = ref.$nextEl;
	      var $prevEl = ref.$prevEl;

	      if ($prevEl && $prevEl.length > 0) {
	        if (swiper.isBeginning) {
	          swiper.a11y.disableEl($prevEl);
	        } else {
	          swiper.a11y.enableEl($prevEl);
	        }
	      }
	      if ($nextEl && $nextEl.length > 0) {
	        if (swiper.isEnd) {
	          swiper.a11y.disableEl($nextEl);
	        } else {
	          swiper.a11y.enableEl($nextEl);
	        }
	      }
	    },
	    updatePagination: function updatePagination() {
	      var swiper = this;
	      var params = swiper.params.a11y;
	      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
	        swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
	          var $bulletEl = $(bulletEl);
	          swiper.a11y.makeElFocusable($bulletEl);
	          swiper.a11y.addElRole($bulletEl, 'button');
	          swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
	        });
	      }
	    },
	    init: function init() {
	      var swiper = this;

	      swiper.$el.append(swiper.a11y.liveRegion);

	      // Navigation
	      var params = swiper.params.a11y;
	      var $nextEl;
	      var $prevEl;
	      if (swiper.navigation && swiper.navigation.$nextEl) {
	        $nextEl = swiper.navigation.$nextEl;
	      }
	      if (swiper.navigation && swiper.navigation.$prevEl) {
	        $prevEl = swiper.navigation.$prevEl;
	      }
	      if ($nextEl) {
	        swiper.a11y.makeElFocusable($nextEl);
	        swiper.a11y.addElRole($nextEl, 'button');
	        swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
	        $nextEl.on('keydown', swiper.a11y.onEnterKey);
	      }
	      if ($prevEl) {
	        swiper.a11y.makeElFocusable($prevEl);
	        swiper.a11y.addElRole($prevEl, 'button');
	        swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
	        $prevEl.on('keydown', swiper.a11y.onEnterKey);
	      }

	      // Pagination
	      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
	        swiper.pagination.$el.on('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
	      }
	    },
	    destroy: function destroy() {
	      var swiper = this;
	      if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) { swiper.a11y.liveRegion.remove(); }

	      var $nextEl;
	      var $prevEl;
	      if (swiper.navigation && swiper.navigation.$nextEl) {
	        $nextEl = swiper.navigation.$nextEl;
	      }
	      if (swiper.navigation && swiper.navigation.$prevEl) {
	        $prevEl = swiper.navigation.$prevEl;
	      }
	      if ($nextEl) {
	        $nextEl.off('keydown', swiper.a11y.onEnterKey);
	      }
	      if ($prevEl) {
	        $prevEl.off('keydown', swiper.a11y.onEnterKey);
	      }

	      // Pagination
	      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
	        swiper.pagination.$el.off('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
	      }
	    },
	  };
	  var A11y = {
	    name: 'a11y',
	    params: {
	      a11y: {
	        enabled: true,
	        notificationClass: 'swiper-notification',
	        prevSlideMessage: 'Previous slide',
	        nextSlideMessage: 'Next slide',
	        firstSlideMessage: 'This is the first slide',
	        lastSlideMessage: 'This is the last slide',
	        paginationBulletMessage: 'Go to slide {{index}}',
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        a11y: {
	          liveRegion: $(("<span class=\"" + (swiper.params.a11y.notificationClass) + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")),
	        },
	      });
	      Object.keys(a11y).forEach(function (methodName) {
	        swiper.a11y[methodName] = a11y[methodName].bind(swiper);
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        if (!swiper.params.a11y.enabled) { return; }
	        swiper.a11y.init();
	        swiper.a11y.updateNavigation();
	      },
	      toEdge: function toEdge() {
	        var swiper = this;
	        if (!swiper.params.a11y.enabled) { return; }
	        swiper.a11y.updateNavigation();
	      },
	      fromEdge: function fromEdge() {
	        var swiper = this;
	        if (!swiper.params.a11y.enabled) { return; }
	        swiper.a11y.updateNavigation();
	      },
	      paginationUpdate: function paginationUpdate() {
	        var swiper = this;
	        if (!swiper.params.a11y.enabled) { return; }
	        swiper.a11y.updatePagination();
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        if (!swiper.params.a11y.enabled) { return; }
	        swiper.a11y.destroy();
	      },
	    },
	  };

	  var History = {
	    init: function init() {
	      var swiper = this;
	      if (!swiper.params.history) { return; }
	      if (!win.history || !win.history.pushState) {
	        swiper.params.history.enabled = false;
	        swiper.params.hashNavigation.enabled = true;
	        return;
	      }
	      var history = swiper.history;
	      history.initialized = true;
	      history.paths = History.getPathValues();
	      if (!history.paths.key && !history.paths.value) { return; }
	      history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
	      if (!swiper.params.history.replaceState) {
	        win.addEventListener('popstate', swiper.history.setHistoryPopState);
	      }
	    },
	    destroy: function destroy() {
	      var swiper = this;
	      if (!swiper.params.history.replaceState) {
	        win.removeEventListener('popstate', swiper.history.setHistoryPopState);
	      }
	    },
	    setHistoryPopState: function setHistoryPopState() {
	      var swiper = this;
	      swiper.history.paths = History.getPathValues();
	      swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
	    },
	    getPathValues: function getPathValues() {
	      var pathArray = win.location.pathname.slice(1).split('/').filter(function (part) { return part !== ''; });
	      var total = pathArray.length;
	      var key = pathArray[total - 2];
	      var value = pathArray[total - 1];
	      return { key: key, value: value };
	    },
	    setHistory: function setHistory(key, index) {
	      var swiper = this;
	      if (!swiper.history.initialized || !swiper.params.history.enabled) { return; }
	      var slide = swiper.slides.eq(index);
	      var value = History.slugify(slide.attr('data-history'));
	      if (!win.location.pathname.includes(key)) {
	        value = key + "/" + value;
	      }
	      var currentState = win.history.state;
	      if (currentState && currentState.value === value) {
	        return;
	      }
	      if (swiper.params.history.replaceState) {
	        win.history.replaceState({ value: value }, null, value);
	      } else {
	        win.history.pushState({ value: value }, null, value);
	      }
	    },
	    slugify: function slugify(text) {
	      return text.toString()
	        .replace(/\s+/g, '-')
	        .replace(/[^\w-]+/g, '')
	        .replace(/--+/g, '-')
	        .replace(/^-+/, '')
	        .replace(/-+$/, '');
	    },
	    scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
	      var swiper = this;
	      if (value) {
	        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
	          var slide = swiper.slides.eq(i);
	          var slideHistory = History.slugify(slide.attr('data-history'));
	          if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
	            var index = slide.index();
	            swiper.slideTo(index, speed, runCallbacks);
	          }
	        }
	      } else {
	        swiper.slideTo(0, speed, runCallbacks);
	      }
	    },
	  };

	  var History$1 = {
	    name: 'history',
	    params: {
	      history: {
	        enabled: false,
	        replaceState: false,
	        key: 'slides',
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        history: {
	          init: History.init.bind(swiper),
	          setHistory: History.setHistory.bind(swiper),
	          setHistoryPopState: History.setHistoryPopState.bind(swiper),
	          scrollToSlide: History.scrollToSlide.bind(swiper),
	          destroy: History.destroy.bind(swiper),
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        if (swiper.params.history.enabled) {
	          swiper.history.init();
	        }
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        if (swiper.params.history.enabled) {
	          swiper.history.destroy();
	        }
	      },
	      transitionEnd: function transitionEnd() {
	        var swiper = this;
	        if (swiper.history.initialized) {
	          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
	        }
	      },
	    },
	  };

	  var HashNavigation = {
	    onHashCange: function onHashCange() {
	      var swiper = this;
	      var newHash = doc.location.hash.replace('#', '');
	      var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
	      if (newHash !== activeSlideHash) {
	        var newIndex = swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-hash=\"" + newHash + "\"]")).index();
	        if (typeof newIndex === 'undefined') { return; }
	        swiper.slideTo(newIndex);
	      }
	    },
	    setHash: function setHash() {
	      var swiper = this;
	      if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) { return; }
	      if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
	        win.history.replaceState(null, null, (("#" + (swiper.slides.eq(swiper.activeIndex).attr('data-hash'))) || ''));
	      } else {
	        var slide = swiper.slides.eq(swiper.activeIndex);
	        var hash = slide.attr('data-hash') || slide.attr('data-history');
	        doc.location.hash = hash || '';
	      }
	    },
	    init: function init() {
	      var swiper = this;
	      if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) { return; }
	      swiper.hashNavigation.initialized = true;
	      var hash = doc.location.hash.replace('#', '');
	      if (hash) {
	        var speed = 0;
	        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
	          var slide = swiper.slides.eq(i);
	          var slideHash = slide.attr('data-hash') || slide.attr('data-history');
	          if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
	            var index = slide.index();
	            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
	          }
	        }
	      }
	      if (swiper.params.hashNavigation.watchState) {
	        $(win).on('hashchange', swiper.hashNavigation.onHashCange);
	      }
	    },
	    destroy: function destroy() {
	      var swiper = this;
	      if (swiper.params.hashNavigation.watchState) {
	        $(win).off('hashchange', swiper.hashNavigation.onHashCange);
	      }
	    },
	  };
	  var HashNavigation$1 = {
	    name: 'hash-navigation',
	    params: {
	      hashNavigation: {
	        enabled: false,
	        replaceState: false,
	        watchState: false,
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        hashNavigation: {
	          initialized: false,
	          init: HashNavigation.init.bind(swiper),
	          destroy: HashNavigation.destroy.bind(swiper),
	          setHash: HashNavigation.setHash.bind(swiper),
	          onHashCange: HashNavigation.onHashCange.bind(swiper),
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        if (swiper.params.hashNavigation.enabled) {
	          swiper.hashNavigation.init();
	        }
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        if (swiper.params.hashNavigation.enabled) {
	          swiper.hashNavigation.destroy();
	        }
	      },
	      transitionEnd: function transitionEnd() {
	        var swiper = this;
	        if (swiper.hashNavigation.initialized) {
	          swiper.hashNavigation.setHash();
	        }
	      },
	    },
	  };

	  /* eslint no-underscore-dangle: "off" */

	  var Autoplay = {
	    run: function run() {
	      var swiper = this;
	      var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
	      var delay = swiper.params.autoplay.delay;
	      if ($activeSlideEl.attr('data-swiper-autoplay')) {
	        delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
	      }
	      clearTimeout(swiper.autoplay.timeout);
	      swiper.autoplay.timeout = Utils.nextTick(function () {
	        if (swiper.params.autoplay.reverseDirection) {
	          if (swiper.params.loop) {
	            swiper.loopFix();
	            swiper.slidePrev(swiper.params.speed, true, true);
	            swiper.emit('autoplay');
	          } else if (!swiper.isBeginning) {
	            swiper.slidePrev(swiper.params.speed, true, true);
	            swiper.emit('autoplay');
	          } else if (!swiper.params.autoplay.stopOnLastSlide) {
	            swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
	            swiper.emit('autoplay');
	          } else {
	            swiper.autoplay.stop();
	          }
	        } else if (swiper.params.loop) {
	          swiper.loopFix();
	          swiper.slideNext(swiper.params.speed, true, true);
	          swiper.emit('autoplay');
	        } else if (!swiper.isEnd) {
	          swiper.slideNext(swiper.params.speed, true, true);
	          swiper.emit('autoplay');
	        } else if (!swiper.params.autoplay.stopOnLastSlide) {
	          swiper.slideTo(0, swiper.params.speed, true, true);
	          swiper.emit('autoplay');
	        } else {
	          swiper.autoplay.stop();
	        }
	      }, delay);
	    },
	    start: function start() {
	      var swiper = this;
	      if (typeof swiper.autoplay.timeout !== 'undefined') { return false; }
	      if (swiper.autoplay.running) { return false; }
	      swiper.autoplay.running = true;
	      swiper.emit('autoplayStart');
	      swiper.autoplay.run();
	      return true;
	    },
	    stop: function stop() {
	      var swiper = this;
	      if (!swiper.autoplay.running) { return false; }
	      if (typeof swiper.autoplay.timeout === 'undefined') { return false; }

	      if (swiper.autoplay.timeout) {
	        clearTimeout(swiper.autoplay.timeout);
	        swiper.autoplay.timeout = undefined;
	      }
	      swiper.autoplay.running = false;
	      swiper.emit('autoplayStop');
	      return true;
	    },
	    pause: function pause(speed) {
	      var swiper = this;
	      if (!swiper.autoplay.running) { return; }
	      if (swiper.autoplay.paused) { return; }
	      if (swiper.autoplay.timeout) { clearTimeout(swiper.autoplay.timeout); }
	      swiper.autoplay.paused = true;
	      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
	        swiper.autoplay.paused = false;
	        swiper.autoplay.run();
	      } else {
	        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
	        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
	      }
	    },
	  };

	  var Autoplay$1 = {
	    name: 'autoplay',
	    params: {
	      autoplay: {
	        enabled: false,
	        delay: 3000,
	        waitForTransition: true,
	        disableOnInteraction: true,
	        stopOnLastSlide: false,
	        reverseDirection: false,
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        autoplay: {
	          running: false,
	          paused: false,
	          run: Autoplay.run.bind(swiper),
	          start: Autoplay.start.bind(swiper),
	          stop: Autoplay.stop.bind(swiper),
	          pause: Autoplay.pause.bind(swiper),
	          onTransitionEnd: function onTransitionEnd(e) {
	            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) { return; }
	            if (e.target !== this) { return; }
	            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
	            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
	            swiper.autoplay.paused = false;
	            if (!swiper.autoplay.running) {
	              swiper.autoplay.stop();
	            } else {
	              swiper.autoplay.run();
	            }
	          },
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        if (swiper.params.autoplay.enabled) {
	          swiper.autoplay.start();
	        }
	      },
	      beforeTransitionStart: function beforeTransitionStart(speed, internal) {
	        var swiper = this;
	        if (swiper.autoplay.running) {
	          if (internal || !swiper.params.autoplay.disableOnInteraction) {
	            swiper.autoplay.pause(speed);
	          } else {
	            swiper.autoplay.stop();
	          }
	        }
	      },
	      sliderFirstMove: function sliderFirstMove() {
	        var swiper = this;
	        if (swiper.autoplay.running) {
	          if (swiper.params.autoplay.disableOnInteraction) {
	            swiper.autoplay.stop();
	          } else {
	            swiper.autoplay.pause();
	          }
	        }
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        if (swiper.autoplay.running) {
	          swiper.autoplay.stop();
	        }
	      },
	    },
	  };

	  var Fade = {
	    setTranslate: function setTranslate() {
	      var swiper = this;
	      var slides = swiper.slides;
	      for (var i = 0; i < slides.length; i += 1) {
	        var $slideEl = swiper.slides.eq(i);
	        var offset = $slideEl[0].swiperSlideOffset;
	        var tx = -offset;
	        if (!swiper.params.virtualTranslate) { tx -= swiper.translate; }
	        var ty = 0;
	        if (!swiper.isHorizontal()) {
	          ty = tx;
	          tx = 0;
	        }
	        var slideOpacity = swiper.params.fadeEffect.crossFade
	          ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
	          : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
	        $slideEl
	          .css({
	            opacity: slideOpacity,
	          })
	          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px)"));
	      }
	    },
	    setTransition: function setTransition(duration) {
	      var swiper = this;
	      var slides = swiper.slides;
	      var $wrapperEl = swiper.$wrapperEl;
	      slides.transition(duration);
	      if (swiper.params.virtualTranslate && duration !== 0) {
	        var eventTriggered = false;
	        slides.transitionEnd(function () {
	          if (eventTriggered) { return; }
	          if (!swiper || swiper.destroyed) { return; }
	          eventTriggered = true;
	          swiper.animating = false;
	          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
	          for (var i = 0; i < triggerEvents.length; i += 1) {
	            $wrapperEl.trigger(triggerEvents[i]);
	          }
	        });
	      }
	    },
	  };

	  var EffectFade = {
	    name: 'effect-fade',
	    params: {
	      fadeEffect: {
	        crossFade: false,
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        fadeEffect: {
	          setTranslate: Fade.setTranslate.bind(swiper),
	          setTransition: Fade.setTransition.bind(swiper),
	        },
	      });
	    },
	    on: {
	      beforeInit: function beforeInit() {
	        var swiper = this;
	        if (swiper.params.effect !== 'fade') { return; }
	        swiper.classNames.push(((swiper.params.containerModifierClass) + "fade"));
	        var overwriteParams = {
	          slidesPerView: 1,
	          slidesPerColumn: 1,
	          slidesPerGroup: 1,
	          watchSlidesProgress: true,
	          spaceBetween: 0,
	          virtualTranslate: true,
	        };
	        Utils.extend(swiper.params, overwriteParams);
	        Utils.extend(swiper.originalParams, overwriteParams);
	      },
	      setTranslate: function setTranslate() {
	        var swiper = this;
	        if (swiper.params.effect !== 'fade') { return; }
	        swiper.fadeEffect.setTranslate();
	      },
	      setTransition: function setTransition(duration) {
	        var swiper = this;
	        if (swiper.params.effect !== 'fade') { return; }
	        swiper.fadeEffect.setTransition(duration);
	      },
	    },
	  };

	  var Cube = {
	    setTranslate: function setTranslate() {
	      var swiper = this;
	      var $el = swiper.$el;
	      var $wrapperEl = swiper.$wrapperEl;
	      var slides = swiper.slides;
	      var swiperWidth = swiper.width;
	      var swiperHeight = swiper.height;
	      var rtl = swiper.rtlTranslate;
	      var swiperSize = swiper.size;
	      var params = swiper.params.cubeEffect;
	      var isHorizontal = swiper.isHorizontal();
	      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
	      var wrapperRotate = 0;
	      var $cubeShadowEl;
	      if (params.shadow) {
	        if (isHorizontal) {
	          $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
	          if ($cubeShadowEl.length === 0) {
	            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
	            $wrapperEl.append($cubeShadowEl);
	          }
	          $cubeShadowEl.css({ height: (swiperWidth + "px") });
	        } else {
	          $cubeShadowEl = $el.find('.swiper-cube-shadow');
	          if ($cubeShadowEl.length === 0) {
	            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
	            $el.append($cubeShadowEl);
	          }
	        }
	      }
	      for (var i = 0; i < slides.length; i += 1) {
	        var $slideEl = slides.eq(i);
	        var slideIndex = i;
	        if (isVirtual) {
	          slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
	        }
	        var slideAngle = slideIndex * 90;
	        var round = Math.floor(slideAngle / 360);
	        if (rtl) {
	          slideAngle = -slideAngle;
	          round = Math.floor(-slideAngle / 360);
	        }
	        var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
	        var tx = 0;
	        var ty = 0;
	        var tz = 0;
	        if (slideIndex % 4 === 0) {
	          tx = -round * 4 * swiperSize;
	          tz = 0;
	        } else if ((slideIndex - 1) % 4 === 0) {
	          tx = 0;
	          tz = -round * 4 * swiperSize;
	        } else if ((slideIndex - 2) % 4 === 0) {
	          tx = swiperSize + (round * 4 * swiperSize);
	          tz = swiperSize;
	        } else if ((slideIndex - 3) % 4 === 0) {
	          tx = -swiperSize;
	          tz = (3 * swiperSize) + (swiperSize * 4 * round);
	        }
	        if (rtl) {
	          tx = -tx;
	        }

	        if (!isHorizontal) {
	          ty = tx;
	          tx = 0;
	        }

	        var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
	        if (progress <= 1 && progress > -1) {
	          wrapperRotate = (slideIndex * 90) + (progress * 90);
	          if (rtl) { wrapperRotate = (-slideIndex * 90) - (progress * 90); }
	        }
	        $slideEl.transform(transform);
	        if (params.slideShadows) {
	          // Set shadows
	          var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
	          var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
	          if (shadowBefore.length === 0) {
	            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
	            $slideEl.append(shadowBefore);
	          }
	          if (shadowAfter.length === 0) {
	            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
	            $slideEl.append(shadowAfter);
	          }
	          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
	          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
	        }
	      }
	      $wrapperEl.css({
	        '-webkit-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
	        '-moz-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
	        '-ms-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
	        'transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
	      });

	      if (params.shadow) {
	        if (isHorizontal) {
	          $cubeShadowEl.transform(("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + (-swiperWidth / 2) + "px) rotateX(90deg) rotateZ(0deg) scale(" + (params.shadowScale) + ")"));
	        } else {
	          var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
	          var multiplier = 1.5 - (
	            (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
	            + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
	          );
	          var scale1 = params.shadowScale;
	          var scale2 = params.shadowScale / multiplier;
	          var offset = params.shadowOffset;
	          $cubeShadowEl.transform(("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset) + "px, " + (-swiperHeight / 2 / scale2) + "px) rotateX(-90deg)"));
	        }
	      }
	      var zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
	      $wrapperEl
	        .transform(("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)"));
	    },
	    setTransition: function setTransition(duration) {
	      var swiper = this;
	      var $el = swiper.$el;
	      var slides = swiper.slides;
	      slides
	        .transition(duration)
	        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
	        .transition(duration);
	      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
	        $el.find('.swiper-cube-shadow').transition(duration);
	      }
	    },
	  };

	  var EffectCube = {
	    name: 'effect-cube',
	    params: {
	      cubeEffect: {
	        slideShadows: true,
	        shadow: true,
	        shadowOffset: 20,
	        shadowScale: 0.94,
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        cubeEffect: {
	          setTranslate: Cube.setTranslate.bind(swiper),
	          setTransition: Cube.setTransition.bind(swiper),
	        },
	      });
	    },
	    on: {
	      beforeInit: function beforeInit() {
	        var swiper = this;
	        if (swiper.params.effect !== 'cube') { return; }
	        swiper.classNames.push(((swiper.params.containerModifierClass) + "cube"));
	        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
	        var overwriteParams = {
	          slidesPerView: 1,
	          slidesPerColumn: 1,
	          slidesPerGroup: 1,
	          watchSlidesProgress: true,
	          resistanceRatio: 0,
	          spaceBetween: 0,
	          centeredSlides: false,
	          virtualTranslate: true,
	        };
	        Utils.extend(swiper.params, overwriteParams);
	        Utils.extend(swiper.originalParams, overwriteParams);
	      },
	      setTranslate: function setTranslate() {
	        var swiper = this;
	        if (swiper.params.effect !== 'cube') { return; }
	        swiper.cubeEffect.setTranslate();
	      },
	      setTransition: function setTransition(duration) {
	        var swiper = this;
	        if (swiper.params.effect !== 'cube') { return; }
	        swiper.cubeEffect.setTransition(duration);
	      },
	    },
	  };

	  var Flip = {
	    setTranslate: function setTranslate() {
	      var swiper = this;
	      var slides = swiper.slides;
	      var rtl = swiper.rtlTranslate;
	      for (var i = 0; i < slides.length; i += 1) {
	        var $slideEl = slides.eq(i);
	        var progress = $slideEl[0].progress;
	        if (swiper.params.flipEffect.limitRotation) {
	          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
	        }
	        var offset = $slideEl[0].swiperSlideOffset;
	        var rotate = -180 * progress;
	        var rotateY = rotate;
	        var rotateX = 0;
	        var tx = -offset;
	        var ty = 0;
	        if (!swiper.isHorizontal()) {
	          ty = tx;
	          tx = 0;
	          rotateX = -rotateY;
	          rotateY = 0;
	        } else if (rtl) {
	          rotateY = -rotateY;
	        }

	        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

	        if (swiper.params.flipEffect.slideShadows) {
	          // Set shadows
	          var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
	          var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
	          if (shadowBefore.length === 0) {
	            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>"));
	            $slideEl.append(shadowBefore);
	          }
	          if (shadowAfter.length === 0) {
	            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>"));
	            $slideEl.append(shadowAfter);
	          }
	          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
	          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
	        }
	        $slideEl
	          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"));
	      }
	    },
	    setTransition: function setTransition(duration) {
	      var swiper = this;
	      var slides = swiper.slides;
	      var activeIndex = swiper.activeIndex;
	      var $wrapperEl = swiper.$wrapperEl;
	      slides
	        .transition(duration)
	        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
	        .transition(duration);
	      if (swiper.params.virtualTranslate && duration !== 0) {
	        var eventTriggered = false;
	        // eslint-disable-next-line
	        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
	          if (eventTriggered) { return; }
	          if (!swiper || swiper.destroyed) { return; }
	          // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
	          eventTriggered = true;
	          swiper.animating = false;
	          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
	          for (var i = 0; i < triggerEvents.length; i += 1) {
	            $wrapperEl.trigger(triggerEvents[i]);
	          }
	        });
	      }
	    },
	  };

	  var EffectFlip = {
	    name: 'effect-flip',
	    params: {
	      flipEffect: {
	        slideShadows: true,
	        limitRotation: true,
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        flipEffect: {
	          setTranslate: Flip.setTranslate.bind(swiper),
	          setTransition: Flip.setTransition.bind(swiper),
	        },
	      });
	    },
	    on: {
	      beforeInit: function beforeInit() {
	        var swiper = this;
	        if (swiper.params.effect !== 'flip') { return; }
	        swiper.classNames.push(((swiper.params.containerModifierClass) + "flip"));
	        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
	        var overwriteParams = {
	          slidesPerView: 1,
	          slidesPerColumn: 1,
	          slidesPerGroup: 1,
	          watchSlidesProgress: true,
	          spaceBetween: 0,
	          virtualTranslate: true,
	        };
	        Utils.extend(swiper.params, overwriteParams);
	        Utils.extend(swiper.originalParams, overwriteParams);
	      },
	      setTranslate: function setTranslate() {
	        var swiper = this;
	        if (swiper.params.effect !== 'flip') { return; }
	        swiper.flipEffect.setTranslate();
	      },
	      setTransition: function setTransition(duration) {
	        var swiper = this;
	        if (swiper.params.effect !== 'flip') { return; }
	        swiper.flipEffect.setTransition(duration);
	      },
	    },
	  };

	  var Coverflow = {
	    setTranslate: function setTranslate() {
	      var swiper = this;
	      var swiperWidth = swiper.width;
	      var swiperHeight = swiper.height;
	      var slides = swiper.slides;
	      var $wrapperEl = swiper.$wrapperEl;
	      var slidesSizesGrid = swiper.slidesSizesGrid;
	      var params = swiper.params.coverflowEffect;
	      var isHorizontal = swiper.isHorizontal();
	      var transform = swiper.translate;
	      var center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
	      var rotate = isHorizontal ? params.rotate : -params.rotate;
	      var translate = params.depth;
	      // Each slide offset from center
	      for (var i = 0, length = slides.length; i < length; i += 1) {
	        var $slideEl = slides.eq(i);
	        var slideSize = slidesSizesGrid[i];
	        var slideOffset = $slideEl[0].swiperSlideOffset;
	        var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

	        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
	        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
	        // var rotateZ = 0
	        var translateZ = -translate * Math.abs(offsetMultiplier);

	        var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
	        var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

	        // Fix for ultra small values
	        if (Math.abs(translateX) < 0.001) { translateX = 0; }
	        if (Math.abs(translateY) < 0.001) { translateY = 0; }
	        if (Math.abs(translateZ) < 0.001) { translateZ = 0; }
	        if (Math.abs(rotateY) < 0.001) { rotateY = 0; }
	        if (Math.abs(rotateX) < 0.001) { rotateX = 0; }

	        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

	        $slideEl.transform(slideTransform);
	        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
	        if (params.slideShadows) {
	          // Set shadows
	          var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
	          var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
	          if ($shadowBeforeEl.length === 0) {
	            $shadowBeforeEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
	            $slideEl.append($shadowBeforeEl);
	          }
	          if ($shadowAfterEl.length === 0) {
	            $shadowAfterEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
	            $slideEl.append($shadowAfterEl);
	          }
	          if ($shadowBeforeEl.length) { $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0; }
	          if ($shadowAfterEl.length) { $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0; }
	        }
	      }

	      // Set correct perspective for IE10
	      if (Support.pointerEvents || Support.prefixedPointerEvents) {
	        var ws = $wrapperEl[0].style;
	        ws.perspectiveOrigin = center + "px 50%";
	      }
	    },
	    setTransition: function setTransition(duration) {
	      var swiper = this;
	      swiper.slides
	        .transition(duration)
	        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
	        .transition(duration);
	    },
	  };

	  var EffectCoverflow = {
	    name: 'effect-coverflow',
	    params: {
	      coverflowEffect: {
	        rotate: 50,
	        stretch: 0,
	        depth: 100,
	        modifier: 1,
	        slideShadows: true,
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        coverflowEffect: {
	          setTranslate: Coverflow.setTranslate.bind(swiper),
	          setTransition: Coverflow.setTransition.bind(swiper),
	        },
	      });
	    },
	    on: {
	      beforeInit: function beforeInit() {
	        var swiper = this;
	        if (swiper.params.effect !== 'coverflow') { return; }

	        swiper.classNames.push(((swiper.params.containerModifierClass) + "coverflow"));
	        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));

	        swiper.params.watchSlidesProgress = true;
	        swiper.originalParams.watchSlidesProgress = true;
	      },
	      setTranslate: function setTranslate() {
	        var swiper = this;
	        if (swiper.params.effect !== 'coverflow') { return; }
	        swiper.coverflowEffect.setTranslate();
	      },
	      setTransition: function setTransition(duration) {
	        var swiper = this;
	        if (swiper.params.effect !== 'coverflow') { return; }
	        swiper.coverflowEffect.setTransition(duration);
	      },
	    },
	  };

	  var Thumbs = {
	    init: function init() {
	      var swiper = this;
	      var ref = swiper.params;
	      var thumbsParams = ref.thumbs;
	      var SwiperClass = swiper.constructor;
	      if (thumbsParams.swiper instanceof SwiperClass) {
	        swiper.thumbs.swiper = thumbsParams.swiper;
	        Utils.extend(swiper.thumbs.swiper.originalParams, {
	          watchSlidesProgress: true,
	          slideToClickedSlide: false,
	        });
	        Utils.extend(swiper.thumbs.swiper.params, {
	          watchSlidesProgress: true,
	          slideToClickedSlide: false,
	        });
	      } else if (Utils.isObject(thumbsParams.swiper)) {
	        swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
	          watchSlidesVisibility: true,
	          watchSlidesProgress: true,
	          slideToClickedSlide: false,
	        }));
	        swiper.thumbs.swiperCreated = true;
	      }
	      swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
	      swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
	    },
	    onThumbClick: function onThumbClick() {
	      var swiper = this;
	      var thumbsSwiper = swiper.thumbs.swiper;
	      if (!thumbsSwiper) { return; }
	      var clickedIndex = thumbsSwiper.clickedIndex;
	      var clickedSlide = thumbsSwiper.clickedSlide;
	      if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) { return; }
	      if (typeof clickedIndex === 'undefined' || clickedIndex === null) { return; }
	      var slideToIndex;
	      if (thumbsSwiper.params.loop) {
	        slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
	      } else {
	        slideToIndex = clickedIndex;
	      }
	      if (swiper.params.loop) {
	        var currentIndex = swiper.activeIndex;
	        if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
	          swiper.loopFix();
	          // eslint-disable-next-line
	          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
	          currentIndex = swiper.activeIndex;
	        }
	        var prevIndex = swiper.slides.eq(currentIndex).prevAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
	        var nextIndex = swiper.slides.eq(currentIndex).nextAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
	        if (typeof prevIndex === 'undefined') { slideToIndex = nextIndex; }
	        else if (typeof nextIndex === 'undefined') { slideToIndex = prevIndex; }
	        else if (nextIndex - currentIndex < currentIndex - prevIndex) { slideToIndex = nextIndex; }
	        else { slideToIndex = prevIndex; }
	      }
	      swiper.slideTo(slideToIndex);
	    },
	    update: function update(initial) {
	      var swiper = this;
	      var thumbsSwiper = swiper.thumbs.swiper;
	      if (!thumbsSwiper) { return; }

	      var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto'
	        ? thumbsSwiper.slidesPerViewDynamic()
	        : thumbsSwiper.params.slidesPerView;

	      if (swiper.realIndex !== thumbsSwiper.realIndex) {
	        var currentThumbsIndex = thumbsSwiper.activeIndex;
	        var newThumbsIndex;
	        if (thumbsSwiper.params.loop) {
	          if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
	            thumbsSwiper.loopFix();
	            // eslint-disable-next-line
	            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
	            currentThumbsIndex = thumbsSwiper.activeIndex;
	          }
	          // Find actual thumbs index to slide to
	          var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
	          var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
	          if (typeof prevThumbsIndex === 'undefined') { newThumbsIndex = nextThumbsIndex; }
	          else if (typeof nextThumbsIndex === 'undefined') { newThumbsIndex = prevThumbsIndex; }
	          else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = currentThumbsIndex; }
	          else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = nextThumbsIndex; }
	          else { newThumbsIndex = prevThumbsIndex; }
	        } else {
	          newThumbsIndex = swiper.realIndex;
	        }
	        if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
	          if (thumbsSwiper.params.centeredSlides) {
	            if (newThumbsIndex > currentThumbsIndex) {
	              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
	            } else {
	              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
	            }
	          } else if (newThumbsIndex > currentThumbsIndex) {
	            newThumbsIndex = newThumbsIndex - slidesPerView + 1;
	          }
	          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
	        }
	      }

	      // Activate thumbs
	      var thumbsToActivate = 1;
	      var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

	      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
	        thumbsToActivate = swiper.params.slidesPerView;
	      }

	      thumbsSwiper.slides.removeClass(thumbActiveClass);
	      if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual) {
	        for (var i = 0; i < thumbsToActivate; i += 1) {
	          thumbsSwiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]")).addClass(thumbActiveClass);
	        }
	      } else {
	        for (var i$1 = 0; i$1 < thumbsToActivate; i$1 += 1) {
	          thumbsSwiper.slides.eq(swiper.realIndex + i$1).addClass(thumbActiveClass);
	        }
	      }
	    },
	  };
	  var Thumbs$1 = {
	    name: 'thumbs',
	    params: {
	      thumbs: {
	        swiper: null,
	        slideThumbActiveClass: 'swiper-slide-thumb-active',
	        thumbsContainerClass: 'swiper-container-thumbs',
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        thumbs: {
	          swiper: null,
	          init: Thumbs.init.bind(swiper),
	          update: Thumbs.update.bind(swiper),
	          onThumbClick: Thumbs.onThumbClick.bind(swiper),
	        },
	      });
	    },
	    on: {
	      beforeInit: function beforeInit() {
	        var swiper = this;
	        var ref = swiper.params;
	        var thumbs = ref.thumbs;
	        if (!thumbs || !thumbs.swiper) { return; }
	        swiper.thumbs.init();
	        swiper.thumbs.update(true);
	      },
	      slideChange: function slideChange() {
	        var swiper = this;
	        if (!swiper.thumbs.swiper) { return; }
	        swiper.thumbs.update();
	      },
	      update: function update() {
	        var swiper = this;
	        if (!swiper.thumbs.swiper) { return; }
	        swiper.thumbs.update();
	      },
	      resize: function resize() {
	        var swiper = this;
	        if (!swiper.thumbs.swiper) { return; }
	        swiper.thumbs.update();
	      },
	      observerUpdate: function observerUpdate() {
	        var swiper = this;
	        if (!swiper.thumbs.swiper) { return; }
	        swiper.thumbs.update();
	      },
	      setTransition: function setTransition(duration) {
	        var swiper = this;
	        var thumbsSwiper = swiper.thumbs.swiper;
	        if (!thumbsSwiper) { return; }
	        thumbsSwiper.setTransition(duration);
	      },
	      beforeDestroy: function beforeDestroy() {
	        var swiper = this;
	        var thumbsSwiper = swiper.thumbs.swiper;
	        if (!thumbsSwiper) { return; }
	        if (swiper.thumbs.swiperCreated && thumbsSwiper) {
	          thumbsSwiper.destroy();
	        }
	      },
	    },
	  };

	  // Swiper Class

	  var components = [
	    Device$1,
	    Support$1,
	    Browser$1,
	    Resize,
	    Observer$1,
	    Virtual$1,
	    Keyboard$1,
	    Mousewheel$1,
	    Navigation$1,
	    Pagination$1,
	    Scrollbar$1,
	    Parallax$1,
	    Zoom$1,
	    Lazy$1,
	    Controller$1,
	    A11y,
	    History$1,
	    HashNavigation$1,
	    Autoplay$1,
	    EffectFade,
	    EffectCube,
	    EffectFlip,
	    EffectCoverflow,
	    Thumbs$1
	  ];

	  if (typeof Swiper.use === 'undefined') {
	    Swiper.use = Swiper.Class.use;
	    Swiper.installModule = Swiper.Class.installModule;
	  }

	  Swiper.use(components);

	  return Swiper;

	}));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(6);

	var loadFonts = function loadFonts() {
	    WebFont.load({
	        google: {
	            families: ['Roboto:300,400,500,700']
	        }
	    });
	};

		module.exports = loadFonts;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
	function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
	function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
	function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
	function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
	O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
	function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
	W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
	function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
	X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
	ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
	d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
	function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
	var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
	Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
	function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
	g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return Z}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(8);

	__webpack_require__(10);

	$('.range-slide').ionRangeSlider();
	$('.custom-select').selectize();
	var filter = $('.filter');
	if (filter.length) {
	    var filterW = filter.outerWidth();
	    filter.css({
	        right: -filterW
	    });
	    $('.btn-filter').on('click', function () {
	        if (filter.is('.is-open')) {
	            filter.stop().animate({
	                right: -filterW
	            }, function () {
	                $(this).removeClass('is-open');
	            });
	        } else {
	            filter.stop().animate({
	                right: 0
	            }, function () {
	                $(this).addClass('is-open');
	            });
	        }
	    });

	    $(document).mouseup(function (e) {
	        var container = $(filter);
	        if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	            {
	                filter.stop().animate({
	                    right: -filterW
	                }, function () {
	                    $(this).removeClass('is-open');
	                });
	            }
	    });
	    if ($(window).height() < filter.offset().top + filter.outerHeight()) {
	        filter.css({
	            height: $(window).height() - filter.offset().top,
	            'overflow': 'auto'
	        });
	    }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(jQuery) {// Ion.RangeSlider
	// version 2.3.1 Build: 382
	// © Denis Ineshin, 2019
	// https://github.com/IonDen
	//
	// Project page:    http://ionden.com/a/plugins/ion.rangeSlider/en.html
	// GitHub page:     https://github.com/IonDen/ion.rangeSlider
	//
	// Released under MIT licence:
	// http://ionden.com/a/plugins/licence-en.html
	// =====================================================================================================================

	;(function(factory) {
	    if ((typeof jQuery === 'undefined' || !jQuery) && "function" === "function" && __webpack_require__(9)) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (jQuery) {
	            return factory(jQuery, document, window, navigator);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if ((typeof jQuery === 'undefined' || !jQuery) && typeof exports === "object") {
	        factory(__webpack_require__(2), document, window, navigator);
	    } else {
	        factory(jQuery, document, window, navigator);
	    }
	} (function ($, document, window, navigator, undefined) {
	    "use strict";

	    // =================================================================================================================
	    // Service

	    var plugin_count = 0;

	    // IE8 fix
	    var is_old_ie = (function () {
	        var n = navigator.userAgent,
	            r = /msie\s\d+/i,
	            v;
	        if (n.search(r) > 0) {
	            v = r.exec(n).toString();
	            v = v.split(" ")[1];
	            if (v < 9) {
	                $("html").addClass("lt-ie9");
	                return true;
	            }
	        }
	        return false;
	    } ());
	    if (!Function.prototype.bind) {
	        Function.prototype.bind = function bind(that) {

	            var target = this;
	            var slice = [].slice;

	            if (typeof target != "function") {
	                throw new TypeError();
	            }

	            var args = slice.call(arguments, 1),
	                bound = function () {

	                    if (this instanceof bound) {

	                        var F = function(){};
	                        F.prototype = target.prototype;
	                        var self = new F();

	                        var result = target.apply(
	                            self,
	                            args.concat(slice.call(arguments))
	                        );
	                        if (Object(result) === result) {
	                            return result;
	                        }
	                        return self;

	                    } else {

	                        return target.apply(
	                            that,
	                            args.concat(slice.call(arguments))
	                        );

	                    }

	                };

	            return bound;
	        };
	    }
	    if (!Array.prototype.indexOf) {
	        Array.prototype.indexOf = function(searchElement, fromIndex) {
	            var k;
	            if (this == null) {
	                throw new TypeError('"this" is null or not defined');
	            }
	            var O = Object(this);
	            var len = O.length >>> 0;
	            if (len === 0) {
	                return -1;
	            }
	            var n = +fromIndex || 0;
	            if (Math.abs(n) === Infinity) {
	                n = 0;
	            }
	            if (n >= len) {
	                return -1;
	            }
	            k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
	            while (k < len) {
	                if (k in O && O[k] === searchElement) {
	                    return k;
	                }
	                k++;
	            }
	            return -1;
	        };
	    }



	    // =================================================================================================================
	    // Template

	    var base_html =
	        '<span class="irs">' +
	        '<span class="irs-line" tabindex="0"></span>' +
	        '<span class="irs-min">0</span><span class="irs-max">1</span>' +
	        '<span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span>' +
	        '</span>' +
	        '<span class="irs-grid"></span>';

	    var single_html =
	        '<span class="irs-bar irs-bar--single"></span>' +
	        '<span class="irs-shadow shadow-single"></span>' +
	        '<span class="irs-handle single"><i></i><i></i><i></i></span>';

	    var double_html =
	        '<span class="irs-bar"></span>' +
	        '<span class="irs-shadow shadow-from"></span>' +
	        '<span class="irs-shadow shadow-to"></span>' +
	        '<span class="irs-handle from"><i></i><i></i><i></i></span>' +
	        '<span class="irs-handle to"><i></i><i></i><i></i></span>';

	    var disable_html =
	        '<span class="irs-disable-mask"></span>';



	    // =================================================================================================================
	    // Core

	    /**
	     * Main plugin constructor
	     *
	     * @param input {Object} link to base input element
	     * @param options {Object} slider config
	     * @param plugin_count {Number}
	     * @constructor
	     */
	    var IonRangeSlider = function (input, options, plugin_count) {
	        this.VERSION = "2.3.1";
	        this.input = input;
	        this.plugin_count = plugin_count;
	        this.current_plugin = 0;
	        this.calc_count = 0;
	        this.update_tm = 0;
	        this.old_from = 0;
	        this.old_to = 0;
	        this.old_min_interval = null;
	        this.raf_id = null;
	        this.dragging = false;
	        this.force_redraw = false;
	        this.no_diapason = false;
	        this.has_tab_index = true;
	        this.is_key = false;
	        this.is_update = false;
	        this.is_start = true;
	        this.is_finish = false;
	        this.is_active = false;
	        this.is_resize = false;
	        this.is_click = false;

	        options = options || {};

	        // cache for links to all DOM elements
	        this.$cache = {
	            win: $(window),
	            body: $(document.body),
	            input: $(input),
	            cont: null,
	            rs: null,
	            min: null,
	            max: null,
	            from: null,
	            to: null,
	            single: null,
	            bar: null,
	            line: null,
	            s_single: null,
	            s_from: null,
	            s_to: null,
	            shad_single: null,
	            shad_from: null,
	            shad_to: null,
	            edge: null,
	            grid: null,
	            grid_labels: []
	        };

	        // storage for measure variables
	        this.coords = {
	            // left
	            x_gap: 0,
	            x_pointer: 0,

	            // width
	            w_rs: 0,
	            w_rs_old: 0,
	            w_handle: 0,

	            // percents
	            p_gap: 0,
	            p_gap_left: 0,
	            p_gap_right: 0,
	            p_step: 0,
	            p_pointer: 0,
	            p_handle: 0,
	            p_single_fake: 0,
	            p_single_real: 0,
	            p_from_fake: 0,
	            p_from_real: 0,
	            p_to_fake: 0,
	            p_to_real: 0,
	            p_bar_x: 0,
	            p_bar_w: 0,

	            // grid
	            grid_gap: 0,
	            big_num: 0,
	            big: [],
	            big_w: [],
	            big_p: [],
	            big_x: []
	        };

	        // storage for labels measure variables
	        this.labels = {
	            // width
	            w_min: 0,
	            w_max: 0,
	            w_from: 0,
	            w_to: 0,
	            w_single: 0,

	            // percents
	            p_min: 0,
	            p_max: 0,
	            p_from_fake: 0,
	            p_from_left: 0,
	            p_to_fake: 0,
	            p_to_left: 0,
	            p_single_fake: 0,
	            p_single_left: 0
	        };



	        /**
	         * get and validate config
	         */
	        var $inp = this.$cache.input,
	            val = $inp.prop("value"),
	            config, config_from_data, prop;

	        // default config
	        config = {
	            skin: "flat",
	            type: "single",

	            min: 10,
	            max: 100,
	            from: null,
	            to: null,
	            step: 1,

	            min_interval: 0,
	            max_interval: 0,
	            drag_interval: false,

	            values: [],
	            p_values: [],

	            from_fixed: false,
	            from_min: null,
	            from_max: null,
	            from_shadow: false,

	            to_fixed: false,
	            to_min: null,
	            to_max: null,
	            to_shadow: false,

	            prettify_enabled: true,
	            prettify_separator: " ",
	            prettify: null,

	            force_edges: false,

	            keyboard: true,

	            grid: false,
	            grid_margin: true,
	            grid_num: 4,
	            grid_snap: false,

	            hide_min_max: false,
	            hide_from_to: false,

	            prefix: "",
	            postfix: "",
	            max_postfix: "",
	            decorate_both: true,
	            values_separator: " — ",

	            input_values_separator: ";",

	            disable: false,
	            block: false,

	            extra_classes: "",

	            scope: null,
	            onStart: null,
	            onChange: null,
	            onFinish: null,
	            onUpdate: null
	        };


	        // check if base element is input
	        if ($inp[0].nodeName !== "INPUT") {
	            console && console.warn && console.warn("Base element should be <input>!", $inp[0]);
	        }


	        // config from data-attributes extends js config
	        config_from_data = {
	            skin: $inp.data("skin"),
	            type: $inp.data("type"),

	            min: $inp.data("min"),
	            max: $inp.data("max"),
	            from: $inp.data("from"),
	            to: $inp.data("to"),
	            step: $inp.data("step"),

	            min_interval: $inp.data("minInterval"),
	            max_interval: $inp.data("maxInterval"),
	            drag_interval: $inp.data("dragInterval"),

	            values: $inp.data("values"),

	            from_fixed: $inp.data("fromFixed"),
	            from_min: $inp.data("fromMin"),
	            from_max: $inp.data("fromMax"),
	            from_shadow: $inp.data("fromShadow"),

	            to_fixed: $inp.data("toFixed"),
	            to_min: $inp.data("toMin"),
	            to_max: $inp.data("toMax"),
	            to_shadow: $inp.data("toShadow"),

	            prettify_enabled: $inp.data("prettifyEnabled"),
	            prettify_separator: $inp.data("prettifySeparator"),

	            force_edges: $inp.data("forceEdges"),

	            keyboard: $inp.data("keyboard"),

	            grid: $inp.data("grid"),
	            grid_margin: $inp.data("gridMargin"),
	            grid_num: $inp.data("gridNum"),
	            grid_snap: $inp.data("gridSnap"),

	            hide_min_max: $inp.data("hideMinMax"),
	            hide_from_to: $inp.data("hideFromTo"),

	            prefix: $inp.data("prefix"),
	            postfix: $inp.data("postfix"),
	            max_postfix: $inp.data("maxPostfix"),
	            decorate_both: $inp.data("decorateBoth"),
	            values_separator: $inp.data("valuesSeparator"),

	            input_values_separator: $inp.data("inputValuesSeparator"),

	            disable: $inp.data("disable"),
	            block: $inp.data("block"),

	            extra_classes: $inp.data("extraClasses"),
	        };
	        config_from_data.values = config_from_data.values && config_from_data.values.split(",");

	        for (prop in config_from_data) {
	            if (config_from_data.hasOwnProperty(prop)) {
	                if (config_from_data[prop] === undefined || config_from_data[prop] === "") {
	                    delete config_from_data[prop];
	                }
	            }
	        }


	        // input value extends default config
	        if (val !== undefined && val !== "") {
	            val = val.split(config_from_data.input_values_separator || options.input_values_separator || ";");

	            if (val[0] && val[0] == +val[0]) {
	                val[0] = +val[0];
	            }
	            if (val[1] && val[1] == +val[1]) {
	                val[1] = +val[1];
	            }

	            if (options && options.values && options.values.length) {
	                config.from = val[0] && options.values.indexOf(val[0]);
	                config.to = val[1] && options.values.indexOf(val[1]);
	            } else {
	                config.from = val[0] && +val[0];
	                config.to = val[1] && +val[1];
	            }
	        }



	        // js config extends default config
	        $.extend(config, options);


	        // data config extends config
	        $.extend(config, config_from_data);
	        this.options = config;



	        // validate config, to be sure that all data types are correct
	        this.update_check = {};
	        this.validate();



	        // default result object, returned to callbacks
	        this.result = {
	            input: this.$cache.input,
	            slider: null,

	            min: this.options.min,
	            max: this.options.max,

	            from: this.options.from,
	            from_percent: 0,
	            from_value: null,

	            to: this.options.to,
	            to_percent: 0,
	            to_value: null
	        };



	        this.init();
	    };

	    IonRangeSlider.prototype = {

	        /**
	         * Starts or updates the plugin instance
	         *
	         * @param [is_update] {boolean}
	         */
	        init: function (is_update) {
	            this.no_diapason = false;
	            this.coords.p_step = this.convertToPercent(this.options.step, true);

	            this.target = "base";

	            this.toggleInput();
	            this.append();
	            this.setMinMax();

	            if (is_update) {
	                this.force_redraw = true;
	                this.calc(true);

	                // callbacks called
	                this.callOnUpdate();
	            } else {
	                this.force_redraw = true;
	                this.calc(true);

	                // callbacks called
	                this.callOnStart();
	            }

	            this.updateScene();
	        },

	        /**
	         * Appends slider template to a DOM
	         */
	        append: function () {
	            var container_html = '<span class="irs irs--' + this.options.skin + ' js-irs-' + this.plugin_count + ' ' + this.options.extra_classes + '"></span>';
	            this.$cache.input.before(container_html);
	            this.$cache.input.prop("readonly", true);
	            this.$cache.cont = this.$cache.input.prev();
	            this.result.slider = this.$cache.cont;

	            this.$cache.cont.html(base_html);
	            this.$cache.rs = this.$cache.cont.find(".irs");
	            this.$cache.min = this.$cache.cont.find(".irs-min");
	            this.$cache.max = this.$cache.cont.find(".irs-max");
	            this.$cache.from = this.$cache.cont.find(".irs-from");
	            this.$cache.to = this.$cache.cont.find(".irs-to");
	            this.$cache.single = this.$cache.cont.find(".irs-single");
	            this.$cache.line = this.$cache.cont.find(".irs-line");
	            this.$cache.grid = this.$cache.cont.find(".irs-grid");

	            if (this.options.type === "single") {
	                this.$cache.cont.append(single_html);
	                this.$cache.bar = this.$cache.cont.find(".irs-bar");
	                this.$cache.edge = this.$cache.cont.find(".irs-bar-edge");
	                this.$cache.s_single = this.$cache.cont.find(".single");
	                this.$cache.from[0].style.visibility = "hidden";
	                this.$cache.to[0].style.visibility = "hidden";
	                this.$cache.shad_single = this.$cache.cont.find(".shadow-single");
	            } else {
	                this.$cache.cont.append(double_html);
	                this.$cache.bar = this.$cache.cont.find(".irs-bar");
	                this.$cache.s_from = this.$cache.cont.find(".from");
	                this.$cache.s_to = this.$cache.cont.find(".to");
	                this.$cache.shad_from = this.$cache.cont.find(".shadow-from");
	                this.$cache.shad_to = this.$cache.cont.find(".shadow-to");

	                this.setTopHandler();
	            }

	            if (this.options.hide_from_to) {
	                this.$cache.from[0].style.display = "none";
	                this.$cache.to[0].style.display = "none";
	                this.$cache.single[0].style.display = "none";
	            }

	            this.appendGrid();

	            if (this.options.disable) {
	                this.appendDisableMask();
	                this.$cache.input[0].disabled = true;
	            } else {
	                this.$cache.input[0].disabled = false;
	                this.removeDisableMask();
	                this.bindEvents();
	            }

	            // block only if not disabled
	            if (!this.options.disable) {
	                if (this.options.block) {
	                    this.appendDisableMask();
	                } else {
	                    this.removeDisableMask();
	                }
	            }

	            if (this.options.drag_interval) {
	                this.$cache.bar[0].style.cursor = "ew-resize";
	            }
	        },

	        /**
	         * Determine which handler has a priority
	         * works only for double slider type
	         */
	        setTopHandler: function () {
	            var min = this.options.min,
	                max = this.options.max,
	                from = this.options.from,
	                to = this.options.to;

	            if (from > min && to === max) {
	                this.$cache.s_from.addClass("type_last");
	            } else if (to < max) {
	                this.$cache.s_to.addClass("type_last");
	            }
	        },

	        /**
	         * Determine which handles was clicked last
	         * and which handler should have hover effect
	         *
	         * @param target {String}
	         */
	        changeLevel: function (target) {
	            switch (target) {
	                case "single":
	                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake);
	                    this.$cache.s_single.addClass("state_hover");
	                    break;
	                case "from":
	                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake);
	                    this.$cache.s_from.addClass("state_hover");
	                    this.$cache.s_from.addClass("type_last");
	                    this.$cache.s_to.removeClass("type_last");
	                    break;
	                case "to":
	                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake);
	                    this.$cache.s_to.addClass("state_hover");
	                    this.$cache.s_to.addClass("type_last");
	                    this.$cache.s_from.removeClass("type_last");
	                    break;
	                case "both":
	                    this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake);
	                    this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer);
	                    this.$cache.s_to.removeClass("type_last");
	                    this.$cache.s_from.removeClass("type_last");
	                    break;
	            }
	        },

	        /**
	         * Then slider is disabled
	         * appends extra layer with opacity
	         */
	        appendDisableMask: function () {
	            this.$cache.cont.append(disable_html);
	            this.$cache.cont.addClass("irs-disabled");
	        },

	        /**
	         * Then slider is not disabled
	         * remove disable mask
	         */
	        removeDisableMask: function () {
	            this.$cache.cont.remove(".irs-disable-mask");
	            this.$cache.cont.removeClass("irs-disabled");
	        },

	        /**
	         * Remove slider instance
	         * and unbind all events
	         */
	        remove: function () {
	            this.$cache.cont.remove();
	            this.$cache.cont = null;

	            this.$cache.line.off("keydown.irs_" + this.plugin_count);

	            this.$cache.body.off("touchmove.irs_" + this.plugin_count);
	            this.$cache.body.off("mousemove.irs_" + this.plugin_count);

	            this.$cache.win.off("touchend.irs_" + this.plugin_count);
	            this.$cache.win.off("mouseup.irs_" + this.plugin_count);

	            if (is_old_ie) {
	                this.$cache.body.off("mouseup.irs_" + this.plugin_count);
	                this.$cache.body.off("mouseleave.irs_" + this.plugin_count);
	            }

	            this.$cache.grid_labels = [];
	            this.coords.big = [];
	            this.coords.big_w = [];
	            this.coords.big_p = [];
	            this.coords.big_x = [];

	            cancelAnimationFrame(this.raf_id);
	        },

	        /**
	         * bind all slider events
	         */
	        bindEvents: function () {
	            if (this.no_diapason) {
	                return;
	            }

	            this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this));
	            this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this));

	            this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this));
	            this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));

	            this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
	            this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

	            this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this));

	            if (this.options.drag_interval && this.options.type === "double") {
	                this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
	                this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
	            } else {
	                this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
	                this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
	            }

	            if (this.options.type === "single") {
	                this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
	                this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
	                this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

	                this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
	                this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
	                this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
	                this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
	            } else {
	                this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null));
	                this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null));

	                this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
	                this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
	                this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
	                this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
	                this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
	                this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

	                this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
	                this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
	                this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
	                this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
	                this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
	                this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
	            }

	            if (this.options.keyboard) {
	                this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard"));
	            }

	            if (is_old_ie) {
	                this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));
	                this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this));
	            }
	        },

	        /**
	         * Focus with tabIndex
	         *
	         * @param e {Object} event object
	         */
	        pointerFocus: function (e) {
	            if (!this.target) {
	                var x;
	                var $handle;

	                if (this.options.type === "single") {
	                    $handle = this.$cache.single;
	                } else {
	                    $handle = this.$cache.from;
	                }

	                x = $handle.offset().left;
	                x += ($handle.width() / 2) - 1;

	                this.pointerClick("single", {preventDefault: function () {}, pageX: x});
	            }
	        },

	        /**
	         * Mousemove or touchmove
	         * only for handlers
	         *
	         * @param e {Object} event object
	         */
	        pointerMove: function (e) {
	            if (!this.dragging) {
	                return;
	            }

	            var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
	            this.coords.x_pointer = x - this.coords.x_gap;

	            this.calc();
	        },

	        /**
	         * Mouseup or touchend
	         * only for handlers
	         *
	         * @param e {Object} event object
	         */
	        pointerUp: function (e) {
	            if (this.current_plugin !== this.plugin_count) {
	                return;
	            }

	            if (this.is_active) {
	                this.is_active = false;
	            } else {
	                return;
	            }

	            this.$cache.cont.find(".state_hover").removeClass("state_hover");

	            this.force_redraw = true;

	            if (is_old_ie) {
	                $("*").prop("unselectable", false);
	            }

	            this.updateScene();
	            this.restoreOriginalMinInterval();

	            // callbacks call
	            if ($.contains(this.$cache.cont[0], e.target) || this.dragging) {
	                this.callOnFinish();
	            }

	            this.dragging = false;
	        },

	        /**
	         * Mousedown or touchstart
	         * only for handlers
	         *
	         * @param target {String|null}
	         * @param e {Object} event object
	         */
	        pointerDown: function (target, e) {
	            e.preventDefault();
	            var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
	            if (e.button === 2) {
	                return;
	            }

	            if (target === "both") {
	                this.setTempMinInterval();
	            }

	            if (!target) {
	                target = this.target || "from";
	            }

	            this.current_plugin = this.plugin_count;
	            this.target = target;

	            this.is_active = true;
	            this.dragging = true;

	            this.coords.x_gap = this.$cache.rs.offset().left;
	            this.coords.x_pointer = x - this.coords.x_gap;

	            this.calcPointerPercent();
	            this.changeLevel(target);

	            if (is_old_ie) {
	                $("*").prop("unselectable", true);
	            }

	            this.$cache.line.trigger("focus");

	            this.updateScene();
	        },

	        /**
	         * Mousedown or touchstart
	         * for other slider elements, like diapason line
	         *
	         * @param target {String}
	         * @param e {Object} event object
	         */
	        pointerClick: function (target, e) {
	            e.preventDefault();
	            var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
	            if (e.button === 2) {
	                return;
	            }

	            this.current_plugin = this.plugin_count;
	            this.target = target;

	            this.is_click = true;
	            this.coords.x_gap = this.$cache.rs.offset().left;
	            this.coords.x_pointer = +(x - this.coords.x_gap).toFixed();

	            this.force_redraw = true;
	            this.calc();

	            this.$cache.line.trigger("focus");
	        },

	        /**
	         * Keyborard controls for focused slider
	         *
	         * @param target {String}
	         * @param e {Object} event object
	         * @returns {boolean|undefined}
	         */
	        key: function (target, e) {
	            if (this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
	                return;
	            }

	            switch (e.which) {
	                case 83: // W
	                case 65: // A
	                case 40: // DOWN
	                case 37: // LEFT
	                    e.preventDefault();
	                    this.moveByKey(false);
	                    break;

	                case 87: // S
	                case 68: // D
	                case 38: // UP
	                case 39: // RIGHT
	                    e.preventDefault();
	                    this.moveByKey(true);
	                    break;
	            }

	            return true;
	        },

	        /**
	         * Move by key
	         *
	         * @param right {boolean} direction to move
	         */
	        moveByKey: function (right) {
	            var p = this.coords.p_pointer;
	            var p_step = (this.options.max - this.options.min) / 100;
	            p_step = this.options.step / p_step;

	            if (right) {
	                p += p_step;
	            } else {
	                p -= p_step;
	            }

	            this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * p);
	            this.is_key = true;
	            this.calc();
	        },

	        /**
	         * Set visibility and content
	         * of Min and Max labels
	         */
	        setMinMax: function () {
	            if (!this.options) {
	                return;
	            }

	            if (this.options.hide_min_max) {
	                this.$cache.min[0].style.display = "none";
	                this.$cache.max[0].style.display = "none";
	                return;
	            }

	            if (this.options.values.length) {
	                this.$cache.min.html(this.decorate(this.options.p_values[this.options.min]));
	                this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
	            } else {
	                var min_pretty = this._prettify(this.options.min);
	                var max_pretty = this._prettify(this.options.max);

	                this.result.min_pretty = min_pretty;
	                this.result.max_pretty = max_pretty;

	                this.$cache.min.html(this.decorate(min_pretty, this.options.min));
	                this.$cache.max.html(this.decorate(max_pretty, this.options.max));
	            }

	            this.labels.w_min = this.$cache.min.outerWidth(false);
	            this.labels.w_max = this.$cache.max.outerWidth(false);
	        },

	        /**
	         * Then dragging interval, prevent interval collapsing
	         * using min_interval option
	         */
	        setTempMinInterval: function () {
	            var interval = this.result.to - this.result.from;

	            if (this.old_min_interval === null) {
	                this.old_min_interval = this.options.min_interval;
	            }

	            this.options.min_interval = interval;
	        },

	        /**
	         * Restore min_interval option to original
	         */
	        restoreOriginalMinInterval: function () {
	            if (this.old_min_interval !== null) {
	                this.options.min_interval = this.old_min_interval;
	                this.old_min_interval = null;
	            }
	        },



	        // =============================================================================================================
	        // Calculations

	        /**
	         * All calculations and measures start here
	         *
	         * @param update {boolean=}
	         */
	        calc: function (update) {
	            if (!this.options) {
	                return;
	            }

	            this.calc_count++;

	            if (this.calc_count === 10 || update) {
	                this.calc_count = 0;
	                this.coords.w_rs = this.$cache.rs.outerWidth(false);

	                this.calcHandlePercent();
	            }

	            if (!this.coords.w_rs) {
	                return;
	            }

	            this.calcPointerPercent();
	            var handle_x = this.getHandleX();


	            if (this.target === "both") {
	                this.coords.p_gap = 0;
	                handle_x = this.getHandleX();
	            }

	            if (this.target === "click") {
	                this.coords.p_gap = this.coords.p_handle / 2;
	                handle_x = this.getHandleX();

	                if (this.options.drag_interval) {
	                    this.target = "both_one";
	                } else {
	                    this.target = this.chooseHandle(handle_x);
	                }
	            }

	            switch (this.target) {
	                case "base":
	                    var w = (this.options.max - this.options.min) / 100,
	                        f = (this.result.from - this.options.min) / w,
	                        t = (this.result.to - this.options.min) / w;

	                    this.coords.p_single_real = this.toFixed(f);
	                    this.coords.p_from_real = this.toFixed(f);
	                    this.coords.p_to_real = this.toFixed(t);

	                    this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
	                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
	                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);

	                    this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
	                    this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
	                    this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);

	                    this.target = null;

	                    break;

	                case "single":
	                    if (this.options.from_fixed) {
	                        break;
	                    }

	                    this.coords.p_single_real = this.convertToRealPercent(handle_x);
	                    this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real);
	                    this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);

	                    this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);

	                    break;

	                case "from":
	                    if (this.options.from_fixed) {
	                        break;
	                    }

	                    this.coords.p_from_real = this.convertToRealPercent(handle_x);
	                    this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
	                    if (this.coords.p_from_real > this.coords.p_to_real) {
	                        this.coords.p_from_real = this.coords.p_to_real;
	                    }
	                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
	                    this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
	                    this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from");

	                    this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);

	                    break;

	                case "to":
	                    if (this.options.to_fixed) {
	                        break;
	                    }

	                    this.coords.p_to_real = this.convertToRealPercent(handle_x);
	                    this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
	                    if (this.coords.p_to_real < this.coords.p_from_real) {
	                        this.coords.p_to_real = this.coords.p_from_real;
	                    }
	                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
	                    this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
	                    this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to");

	                    this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);

	                    break;

	                case "both":
	                    if (this.options.from_fixed || this.options.to_fixed) {
	                        break;
	                    }

	                    handle_x = this.toFixed(handle_x + (this.coords.p_handle * 0.001));

	                    this.coords.p_from_real = this.convertToRealPercent(handle_x) - this.coords.p_gap_left;
	                    this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
	                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
	                    this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
	                    this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);

	                    this.coords.p_to_real = this.convertToRealPercent(handle_x) + this.coords.p_gap_right;
	                    this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
	                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
	                    this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
	                    this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);

	                    break;

	                case "both_one":
	                    if (this.options.from_fixed || this.options.to_fixed) {
	                        break;
	                    }

	                    var real_x = this.convertToRealPercent(handle_x),
	                        from = this.result.from_percent,
	                        to = this.result.to_percent,
	                        full = to - from,
	                        half = full / 2,
	                        new_from = real_x - half,
	                        new_to = real_x + half;

	                    if (new_from < 0) {
	                        new_from = 0;
	                        new_to = new_from + full;
	                    }

	                    if (new_to > 100) {
	                        new_to = 100;
	                        new_from = new_to - full;
	                    }

	                    this.coords.p_from_real = this.calcWithStep(new_from);
	                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
	                    this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);

	                    this.coords.p_to_real = this.calcWithStep(new_to);
	                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
	                    this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);

	                    break;
	            }

	            if (this.options.type === "single") {
	                this.coords.p_bar_x = (this.coords.p_handle / 2);
	                this.coords.p_bar_w = this.coords.p_single_fake;

	                this.result.from_percent = this.coords.p_single_real;
	                this.result.from = this.convertToValue(this.coords.p_single_real);
	                this.result.from_pretty = this._prettify(this.result.from);

	                if (this.options.values.length) {
	                    this.result.from_value = this.options.values[this.result.from];
	                }
	            } else {
	                this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + (this.coords.p_handle / 2));
	                this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake);

	                this.result.from_percent = this.coords.p_from_real;
	                this.result.from = this.convertToValue(this.coords.p_from_real);
	                this.result.from_pretty = this._prettify(this.result.from);
	                this.result.to_percent = this.coords.p_to_real;
	                this.result.to = this.convertToValue(this.coords.p_to_real);
	                this.result.to_pretty = this._prettify(this.result.to);

	                if (this.options.values.length) {
	                    this.result.from_value = this.options.values[this.result.from];
	                    this.result.to_value = this.options.values[this.result.to];
	                }
	            }

	            this.calcMinMax();
	            this.calcLabels();
	        },


	        /**
	         * calculates pointer X in percent
	         */
	        calcPointerPercent: function () {
	            if (!this.coords.w_rs) {
	                this.coords.p_pointer = 0;
	                return;
	            }

	            if (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer)  ) {
	                this.coords.x_pointer = 0;
	            } else if (this.coords.x_pointer > this.coords.w_rs) {
	                this.coords.x_pointer = this.coords.w_rs;
	            }

	            this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100);
	        },

	        convertToRealPercent: function (fake) {
	            var full = 100 - this.coords.p_handle;
	            return fake / full * 100;
	        },

	        convertToFakePercent: function (real) {
	            var full = 100 - this.coords.p_handle;
	            return real / 100 * full;
	        },

	        getHandleX: function () {
	            var max = 100 - this.coords.p_handle,
	                x = this.toFixed(this.coords.p_pointer - this.coords.p_gap);

	            if (x < 0) {
	                x = 0;
	            } else if (x > max) {
	                x = max;
	            }

	            return x;
	        },

	        calcHandlePercent: function () {
	            if (this.options.type === "single") {
	                this.coords.w_handle = this.$cache.s_single.outerWidth(false);
	            } else {
	                this.coords.w_handle = this.$cache.s_from.outerWidth(false);
	            }

	            this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
	        },

	        /**
	         * Find closest handle to pointer click
	         *
	         * @param real_x {Number}
	         * @returns {String}
	         */
	        chooseHandle: function (real_x) {
	            if (this.options.type === "single") {
	                return "single";
	            } else {
	                var m_point = this.coords.p_from_real + ((this.coords.p_to_real - this.coords.p_from_real) / 2);
	                if (real_x >= m_point) {
	                    return this.options.to_fixed ? "from" : "to";
	                } else {
	                    return this.options.from_fixed ? "to" : "from";
	                }
	            }
	        },

	        /**
	         * Measure Min and Max labels width in percent
	         */
	        calcMinMax: function () {
	            if (!this.coords.w_rs) {
	                return;
	            }

	            this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100;
	            this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100;
	        },

	        /**
	         * Measure labels width and X in percent
	         */
	        calcLabels: function () {
	            if (!this.coords.w_rs || this.options.hide_from_to) {
	                return;
	            }

	            if (this.options.type === "single") {

	                this.labels.w_single = this.$cache.single.outerWidth(false);
	                this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100;
	                this.labels.p_single_left = this.coords.p_single_fake + (this.coords.p_handle / 2) - (this.labels.p_single_fake / 2);
	                this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake);

	            } else {

	                this.labels.w_from = this.$cache.from.outerWidth(false);
	                this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100;
	                this.labels.p_from_left = this.coords.p_from_fake + (this.coords.p_handle / 2) - (this.labels.p_from_fake / 2);
	                this.labels.p_from_left = this.toFixed(this.labels.p_from_left);
	                this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake);

	                this.labels.w_to = this.$cache.to.outerWidth(false);
	                this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100;
	                this.labels.p_to_left = this.coords.p_to_fake + (this.coords.p_handle / 2) - (this.labels.p_to_fake / 2);
	                this.labels.p_to_left = this.toFixed(this.labels.p_to_left);
	                this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake);

	                this.labels.w_single = this.$cache.single.outerWidth(false);
	                this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100;
	                this.labels.p_single_left = ((this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2) - (this.labels.p_single_fake / 2);
	                this.labels.p_single_left = this.toFixed(this.labels.p_single_left);
	                this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake);

	            }
	        },



	        // =============================================================================================================
	        // Drawings

	        /**
	         * Main function called in request animation frame
	         * to update everything
	         */
	        updateScene: function () {
	            if (this.raf_id) {
	                cancelAnimationFrame(this.raf_id);
	                this.raf_id = null;
	            }

	            clearTimeout(this.update_tm);
	            this.update_tm = null;

	            if (!this.options) {
	                return;
	            }

	            this.drawHandles();

	            if (this.is_active) {
	                this.raf_id = requestAnimationFrame(this.updateScene.bind(this));
	            } else {
	                this.update_tm = setTimeout(this.updateScene.bind(this), 300);
	            }
	        },

	        /**
	         * Draw handles
	         */
	        drawHandles: function () {
	            this.coords.w_rs = this.$cache.rs.outerWidth(false);

	            if (!this.coords.w_rs) {
	                return;
	            }

	            if (this.coords.w_rs !== this.coords.w_rs_old) {
	                this.target = "base";
	                this.is_resize = true;
	            }

	            if (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) {
	                this.setMinMax();
	                this.calc(true);
	                this.drawLabels();
	                if (this.options.grid) {
	                    this.calcGridMargin();
	                    this.calcGridLabels();
	                }
	                this.force_redraw = true;
	                this.coords.w_rs_old = this.coords.w_rs;
	                this.drawShadow();
	            }

	            if (!this.coords.w_rs) {
	                return;
	            }

	            if (!this.dragging && !this.force_redraw && !this.is_key) {
	                return;
	            }

	            if (this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) {

	                this.drawLabels();

	                this.$cache.bar[0].style.left = this.coords.p_bar_x + "%";
	                this.$cache.bar[0].style.width = this.coords.p_bar_w + "%";

	                if (this.options.type === "single") {
	                    this.$cache.bar[0].style.left = 0;
	                    this.$cache.bar[0].style.width = this.coords.p_bar_w + this.coords.p_bar_x + "%";

	                    this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%";

	                    this.$cache.single[0].style.left = this.labels.p_single_left + "%";
	                } else {
	                    this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%";
	                    this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%";

	                    if (this.old_from !== this.result.from || this.force_redraw) {
	                        this.$cache.from[0].style.left = this.labels.p_from_left + "%";
	                    }
	                    if (this.old_to !== this.result.to || this.force_redraw) {
	                        this.$cache.to[0].style.left = this.labels.p_to_left + "%";
	                    }

	                    this.$cache.single[0].style.left = this.labels.p_single_left + "%";
	                }

	                this.writeToInput();

	                if ((this.old_from !== this.result.from || this.old_to !== this.result.to) && !this.is_start) {
	                    this.$cache.input.trigger("change");
	                    this.$cache.input.trigger("input");
	                }

	                this.old_from = this.result.from;
	                this.old_to = this.result.to;

	                // callbacks call
	                if (!this.is_resize && !this.is_update && !this.is_start && !this.is_finish) {
	                    this.callOnChange();
	                }
	                if (this.is_key || this.is_click) {
	                    this.is_key = false;
	                    this.is_click = false;
	                    this.callOnFinish();
	                }

	                this.is_update = false;
	                this.is_resize = false;
	                this.is_finish = false;
	            }

	            this.is_start = false;
	            this.is_key = false;
	            this.is_click = false;
	            this.force_redraw = false;
	        },

	        /**
	         * Draw labels
	         * measure labels collisions
	         * collapse close labels
	         */
	        drawLabels: function () {
	            if (!this.options) {
	                return;
	            }

	            var values_num = this.options.values.length;
	            var p_values = this.options.p_values;
	            var text_single;
	            var text_from;
	            var text_to;
	            var from_pretty;
	            var to_pretty;

	            if (this.options.hide_from_to) {
	                return;
	            }

	            if (this.options.type === "single") {

	                if (values_num) {
	                    text_single = this.decorate(p_values[this.result.from]);
	                    this.$cache.single.html(text_single);
	                } else {
	                    from_pretty = this._prettify(this.result.from);

	                    text_single = this.decorate(from_pretty, this.result.from);
	                    this.$cache.single.html(text_single);
	                }

	                this.calcLabels();

	                if (this.labels.p_single_left < this.labels.p_min + 1) {
	                    this.$cache.min[0].style.visibility = "hidden";
	                } else {
	                    this.$cache.min[0].style.visibility = "visible";
	                }

	                if (this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1) {
	                    this.$cache.max[0].style.visibility = "hidden";
	                } else {
	                    this.$cache.max[0].style.visibility = "visible";
	                }

	            } else {

	                if (values_num) {

	                    if (this.options.decorate_both) {
	                        text_single = this.decorate(p_values[this.result.from]);
	                        text_single += this.options.values_separator;
	                        text_single += this.decorate(p_values[this.result.to]);
	                    } else {
	                        text_single = this.decorate(p_values[this.result.from] + this.options.values_separator + p_values[this.result.to]);
	                    }
	                    text_from = this.decorate(p_values[this.result.from]);
	                    text_to = this.decorate(p_values[this.result.to]);

	                    this.$cache.single.html(text_single);
	                    this.$cache.from.html(text_from);
	                    this.$cache.to.html(text_to);

	                } else {
	                    from_pretty = this._prettify(this.result.from);
	                    to_pretty = this._prettify(this.result.to);

	                    if (this.options.decorate_both) {
	                        text_single = this.decorate(from_pretty, this.result.from);
	                        text_single += this.options.values_separator;
	                        text_single += this.decorate(to_pretty, this.result.to);
	                    } else {
	                        text_single = this.decorate(from_pretty + this.options.values_separator + to_pretty, this.result.to);
	                    }
	                    text_from = this.decorate(from_pretty, this.result.from);
	                    text_to = this.decorate(to_pretty, this.result.to);

	                    this.$cache.single.html(text_single);
	                    this.$cache.from.html(text_from);
	                    this.$cache.to.html(text_to);

	                }

	                this.calcLabels();

	                var min = Math.min(this.labels.p_single_left, this.labels.p_from_left),
	                    single_left = this.labels.p_single_left + this.labels.p_single_fake,
	                    to_left = this.labels.p_to_left + this.labels.p_to_fake,
	                    max = Math.max(single_left, to_left);

	                if (this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left) {
	                    this.$cache.from[0].style.visibility = "hidden";
	                    this.$cache.to[0].style.visibility = "hidden";
	                    this.$cache.single[0].style.visibility = "visible";

	                    if (this.result.from === this.result.to) {
	                        if (this.target === "from") {
	                            this.$cache.from[0].style.visibility = "visible";
	                        } else if (this.target === "to") {
	                            this.$cache.to[0].style.visibility = "visible";
	                        } else if (!this.target) {
	                            this.$cache.from[0].style.visibility = "visible";
	                        }
	                        this.$cache.single[0].style.visibility = "hidden";
	                        max = to_left;
	                    } else {
	                        this.$cache.from[0].style.visibility = "hidden";
	                        this.$cache.to[0].style.visibility = "hidden";
	                        this.$cache.single[0].style.visibility = "visible";
	                        max = Math.max(single_left, to_left);
	                    }
	                } else {
	                    this.$cache.from[0].style.visibility = "visible";
	                    this.$cache.to[0].style.visibility = "visible";
	                    this.$cache.single[0].style.visibility = "hidden";
	                }

	                if (min < this.labels.p_min + 1) {
	                    this.$cache.min[0].style.visibility = "hidden";
	                } else {
	                    this.$cache.min[0].style.visibility = "visible";
	                }

	                if (max > 100 - this.labels.p_max - 1) {
	                    this.$cache.max[0].style.visibility = "hidden";
	                } else {
	                    this.$cache.max[0].style.visibility = "visible";
	                }

	            }
	        },

	        /**
	         * Draw shadow intervals
	         */
	        drawShadow: function () {
	            var o = this.options,
	                c = this.$cache,

	                is_from_min = typeof o.from_min === "number" && !isNaN(o.from_min),
	                is_from_max = typeof o.from_max === "number" && !isNaN(o.from_max),
	                is_to_min = typeof o.to_min === "number" && !isNaN(o.to_min),
	                is_to_max = typeof o.to_max === "number" && !isNaN(o.to_max),

	                from_min,
	                from_max,
	                to_min,
	                to_max;

	            if (o.type === "single") {
	                if (o.from_shadow && (is_from_min || is_from_max)) {
	                    from_min = this.convertToPercent(is_from_min ? o.from_min : o.min);
	                    from_max = this.convertToPercent(is_from_max ? o.from_max : o.max) - from_min;
	                    from_min = this.toFixed(from_min - (this.coords.p_handle / 100 * from_min));
	                    from_max = this.toFixed(from_max - (this.coords.p_handle / 100 * from_max));
	                    from_min = from_min + (this.coords.p_handle / 2);

	                    c.shad_single[0].style.display = "block";
	                    c.shad_single[0].style.left = from_min + "%";
	                    c.shad_single[0].style.width = from_max + "%";
	                } else {
	                    c.shad_single[0].style.display = "none";
	                }
	            } else {
	                if (o.from_shadow && (is_from_min || is_from_max)) {
	                    from_min = this.convertToPercent(is_from_min ? o.from_min : o.min);
	                    from_max = this.convertToPercent(is_from_max ? o.from_max : o.max) - from_min;
	                    from_min = this.toFixed(from_min - (this.coords.p_handle / 100 * from_min));
	                    from_max = this.toFixed(from_max - (this.coords.p_handle / 100 * from_max));
	                    from_min = from_min + (this.coords.p_handle / 2);

	                    c.shad_from[0].style.display = "block";
	                    c.shad_from[0].style.left = from_min + "%";
	                    c.shad_from[0].style.width = from_max + "%";
	                } else {
	                    c.shad_from[0].style.display = "none";
	                }

	                if (o.to_shadow && (is_to_min || is_to_max)) {
	                    to_min = this.convertToPercent(is_to_min ? o.to_min : o.min);
	                    to_max = this.convertToPercent(is_to_max ? o.to_max : o.max) - to_min;
	                    to_min = this.toFixed(to_min - (this.coords.p_handle / 100 * to_min));
	                    to_max = this.toFixed(to_max - (this.coords.p_handle / 100 * to_max));
	                    to_min = to_min + (this.coords.p_handle / 2);

	                    c.shad_to[0].style.display = "block";
	                    c.shad_to[0].style.left = to_min + "%";
	                    c.shad_to[0].style.width = to_max + "%";
	                } else {
	                    c.shad_to[0].style.display = "none";
	                }
	            }
	        },



	        /**
	         * Write values to input element
	         */
	        writeToInput: function () {
	            if (this.options.type === "single") {
	                if (this.options.values.length) {
	                    this.$cache.input.prop("value", this.result.from_value);
	                } else {
	                    this.$cache.input.prop("value", this.result.from);
	                }
	                this.$cache.input.data("from", this.result.from);
	            } else {
	                if (this.options.values.length) {
	                    this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value);
	                } else {
	                    this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to);
	                }
	                this.$cache.input.data("from", this.result.from);
	                this.$cache.input.data("to", this.result.to);
	            }
	        },



	        // =============================================================================================================
	        // Callbacks

	        callOnStart: function () {
	            this.writeToInput();

	            if (this.options.onStart && typeof this.options.onStart === "function") {
	                if (this.options.scope) {
	                    this.options.onStart.call(this.options.scope, this.result);
	                } else {
	                    this.options.onStart(this.result);
	                }
	            }
	        },
	        callOnChange: function () {
	            this.writeToInput();

	            if (this.options.onChange && typeof this.options.onChange === "function") {
	                if (this.options.scope) {
	                    this.options.onChange.call(this.options.scope, this.result);
	                } else {
	                    this.options.onChange(this.result);
	                }
	            }
	        },
	        callOnFinish: function () {
	            this.writeToInput();

	            if (this.options.onFinish && typeof this.options.onFinish === "function") {
	                if (this.options.scope) {
	                    this.options.onFinish.call(this.options.scope, this.result);
	                } else {
	                    this.options.onFinish(this.result);
	                }
	            }
	        },
	        callOnUpdate: function () {
	            this.writeToInput();

	            if (this.options.onUpdate && typeof this.options.onUpdate === "function") {
	                if (this.options.scope) {
	                    this.options.onUpdate.call(this.options.scope, this.result);
	                } else {
	                    this.options.onUpdate(this.result);
	                }
	            }
	        },




	        // =============================================================================================================
	        // Service methods

	        toggleInput: function () {
	            this.$cache.input.toggleClass("irs-hidden-input");

	            if (this.has_tab_index) {
	                this.$cache.input.prop("tabindex", -1);
	            } else {
	                this.$cache.input.removeProp("tabindex");
	            }

	            this.has_tab_index = !this.has_tab_index;
	        },

	        /**
	         * Convert real value to percent
	         *
	         * @param value {Number} X in real
	         * @param no_min {boolean=} don't use min value
	         * @returns {Number} X in percent
	         */
	        convertToPercent: function (value, no_min) {
	            var diapason = this.options.max - this.options.min,
	                one_percent = diapason / 100,
	                val, percent;

	            if (!diapason) {
	                this.no_diapason = true;
	                return 0;
	            }

	            if (no_min) {
	                val = value;
	            } else {
	                val = value - this.options.min;
	            }

	            percent = val / one_percent;

	            return this.toFixed(percent);
	        },

	        /**
	         * Convert percent to real values
	         *
	         * @param percent {Number} X in percent
	         * @returns {Number} X in real
	         */
	        convertToValue: function (percent) {
	            var min = this.options.min,
	                max = this.options.max,
	                min_decimals = min.toString().split(".")[1],
	                max_decimals = max.toString().split(".")[1],
	                min_length, max_length,
	                avg_decimals = 0,
	                abs = 0;

	            if (percent === 0) {
	                return this.options.min;
	            }
	            if (percent === 100) {
	                return this.options.max;
	            }


	            if (min_decimals) {
	                min_length = min_decimals.length;
	                avg_decimals = min_length;
	            }
	            if (max_decimals) {
	                max_length = max_decimals.length;
	                avg_decimals = max_length;
	            }
	            if (min_length && max_length) {
	                avg_decimals = (min_length >= max_length) ? min_length : max_length;
	            }

	            if (min < 0) {
	                abs = Math.abs(min);
	                min = +(min + abs).toFixed(avg_decimals);
	                max = +(max + abs).toFixed(avg_decimals);
	            }

	            var number = ((max - min) / 100 * percent) + min,
	                string = this.options.step.toString().split(".")[1],
	                result;

	            if (string) {
	                number = +number.toFixed(string.length);
	            } else {
	                number = number / this.options.step;
	                number = number * this.options.step;

	                number = +number.toFixed(0);
	            }

	            if (abs) {
	                number -= abs;
	            }

	            if (string) {
	                result = +number.toFixed(string.length);
	            } else {
	                result = this.toFixed(number);
	            }

	            if (result < this.options.min) {
	                result = this.options.min;
	            } else if (result > this.options.max) {
	                result = this.options.max;
	            }

	            return result;
	        },

	        /**
	         * Round percent value with step
	         *
	         * @param percent {Number}
	         * @returns percent {Number} rounded
	         */
	        calcWithStep: function (percent) {
	            var rounded = Math.round(percent / this.coords.p_step) * this.coords.p_step;

	            if (rounded > 100) {
	                rounded = 100;
	            }
	            if (percent === 100) {
	                rounded = 100;
	            }

	            return this.toFixed(rounded);
	        },

	        checkMinInterval: function (p_current, p_next, type) {
	            var o = this.options,
	                current,
	                next;

	            if (!o.min_interval) {
	                return p_current;
	            }

	            current = this.convertToValue(p_current);
	            next = this.convertToValue(p_next);

	            if (type === "from") {

	                if (next - current < o.min_interval) {
	                    current = next - o.min_interval;
	                }

	            } else {

	                if (current - next < o.min_interval) {
	                    current = next + o.min_interval;
	                }

	            }

	            return this.convertToPercent(current);
	        },

	        checkMaxInterval: function (p_current, p_next, type) {
	            var o = this.options,
	                current,
	                next;

	            if (!o.max_interval) {
	                return p_current;
	            }

	            current = this.convertToValue(p_current);
	            next = this.convertToValue(p_next);

	            if (type === "from") {

	                if (next - current > o.max_interval) {
	                    current = next - o.max_interval;
	                }

	            } else {

	                if (current - next > o.max_interval) {
	                    current = next + o.max_interval;
	                }

	            }

	            return this.convertToPercent(current);
	        },

	        checkDiapason: function (p_num, min, max) {
	            var num = this.convertToValue(p_num),
	                o = this.options;

	            if (typeof min !== "number") {
	                min = o.min;
	            }

	            if (typeof max !== "number") {
	                max = o.max;
	            }

	            if (num < min) {
	                num = min;
	            }

	            if (num > max) {
	                num = max;
	            }

	            return this.convertToPercent(num);
	        },

	        toFixed: function (num) {
	            num = num.toFixed(20);
	            return +num;
	        },

	        _prettify: function (num) {
	            if (!this.options.prettify_enabled) {
	                return num;
	            }

	            if (this.options.prettify && typeof this.options.prettify === "function") {
	                return this.options.prettify(num);
	            } else {
	                return this.prettify(num);
	            }
	        },

	        prettify: function (num) {
	            var n = num.toString();
	            return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
	        },

	        checkEdges: function (left, width) {
	            if (!this.options.force_edges) {
	                return this.toFixed(left);
	            }

	            if (left < 0) {
	                left = 0;
	            } else if (left > 100 - width) {
	                left = 100 - width;
	            }

	            return this.toFixed(left);
	        },

	        validate: function () {
	            var o = this.options,
	                r = this.result,
	                v = o.values,
	                vl = v.length,
	                value,
	                i;

	            if (typeof o.min === "string") o.min = +o.min;
	            if (typeof o.max === "string") o.max = +o.max;
	            if (typeof o.from === "string") o.from = +o.from;
	            if (typeof o.to === "string") o.to = +o.to;
	            if (typeof o.step === "string") o.step = +o.step;

	            if (typeof o.from_min === "string") o.from_min = +o.from_min;
	            if (typeof o.from_max === "string") o.from_max = +o.from_max;
	            if (typeof o.to_min === "string") o.to_min = +o.to_min;
	            if (typeof o.to_max === "string") o.to_max = +o.to_max;

	            if (typeof o.grid_num === "string") o.grid_num = +o.grid_num;

	            if (o.max < o.min) {
	                o.max = o.min;
	            }

	            if (vl) {
	                o.p_values = [];
	                o.min = 0;
	                o.max = vl - 1;
	                o.step = 1;
	                o.grid_num = o.max;
	                o.grid_snap = true;

	                for (i = 0; i < vl; i++) {
	                    value = +v[i];

	                    if (!isNaN(value)) {
	                        v[i] = value;
	                        value = this._prettify(value);
	                    } else {
	                        value = v[i];
	                    }

	                    o.p_values.push(value);
	                }
	            }

	            if (typeof o.from !== "number" || isNaN(o.from)) {
	                o.from = o.min;
	            }

	            if (typeof o.to !== "number" || isNaN(o.to)) {
	                o.to = o.max;
	            }

	            if (o.type === "single") {

	                if (o.from < o.min) o.from = o.min;
	                if (o.from > o.max) o.from = o.max;

	            } else {

	                if (o.from < o.min) o.from = o.min;
	                if (o.from > o.max) o.from = o.max;

	                if (o.to < o.min) o.to = o.min;
	                if (o.to > o.max) o.to = o.max;

	                if (this.update_check.from) {

	                    if (this.update_check.from !== o.from) {
	                        if (o.from > o.to) o.from = o.to;
	                    }
	                    if (this.update_check.to !== o.to) {
	                        if (o.to < o.from) o.to = o.from;
	                    }

	                }

	                if (o.from > o.to) o.from = o.to;
	                if (o.to < o.from) o.to = o.from;

	            }

	            if (typeof o.step !== "number" || isNaN(o.step) || !o.step || o.step < 0) {
	                o.step = 1;
	            }

	            if (typeof o.from_min === "number" && o.from < o.from_min) {
	                o.from = o.from_min;
	            }

	            if (typeof o.from_max === "number" && o.from > o.from_max) {
	                o.from = o.from_max;
	            }

	            if (typeof o.to_min === "number" && o.to < o.to_min) {
	                o.to = o.to_min;
	            }

	            if (typeof o.to_max === "number" && o.from > o.to_max) {
	                o.to = o.to_max;
	            }

	            if (r) {
	                if (r.min !== o.min) {
	                    r.min = o.min;
	                }

	                if (r.max !== o.max) {
	                    r.max = o.max;
	                }

	                if (r.from < r.min || r.from > r.max) {
	                    r.from = o.from;
	                }

	                if (r.to < r.min || r.to > r.max) {
	                    r.to = o.to;
	                }
	            }

	            if (typeof o.min_interval !== "number" || isNaN(o.min_interval) || !o.min_interval || o.min_interval < 0) {
	                o.min_interval = 0;
	            }

	            if (typeof o.max_interval !== "number" || isNaN(o.max_interval) || !o.max_interval || o.max_interval < 0) {
	                o.max_interval = 0;
	            }

	            if (o.min_interval && o.min_interval > o.max - o.min) {
	                o.min_interval = o.max - o.min;
	            }

	            if (o.max_interval && o.max_interval > o.max - o.min) {
	                o.max_interval = o.max - o.min;
	            }
	        },

	        decorate: function (num, original) {
	            var decorated = "",
	                o = this.options;

	            if (o.prefix) {
	                decorated += o.prefix;
	            }

	            decorated += num;

	            if (o.max_postfix) {
	                if (o.values.length && num === o.p_values[o.max]) {
	                    decorated += o.max_postfix;
	                    if (o.postfix) {
	                        decorated += " ";
	                    }
	                } else if (original === o.max) {
	                    decorated += o.max_postfix;
	                    if (o.postfix) {
	                        decorated += " ";
	                    }
	                }
	            }

	            if (o.postfix) {
	                decorated += o.postfix;
	            }

	            return decorated;
	        },

	        updateFrom: function () {
	            this.result.from = this.options.from;
	            this.result.from_percent = this.convertToPercent(this.result.from);
	            this.result.from_pretty = this._prettify(this.result.from);
	            if (this.options.values) {
	                this.result.from_value = this.options.values[this.result.from];
	            }
	        },

	        updateTo: function () {
	            this.result.to = this.options.to;
	            this.result.to_percent = this.convertToPercent(this.result.to);
	            this.result.to_pretty = this._prettify(this.result.to);
	            if (this.options.values) {
	                this.result.to_value = this.options.values[this.result.to];
	            }
	        },

	        updateResult: function () {
	            this.result.min = this.options.min;
	            this.result.max = this.options.max;
	            this.updateFrom();
	            this.updateTo();
	        },


	        // =============================================================================================================
	        // Grid

	        appendGrid: function () {
	            if (!this.options.grid) {
	                return;
	            }

	            var o = this.options,
	                i, z,

	                total = o.max - o.min,
	                big_num = o.grid_num,
	                big_p = 0,
	                big_w = 0,

	                small_max = 4,
	                local_small_max,
	                small_p,
	                small_w = 0,

	                result,
	                html = '';



	            this.calcGridMargin();

	            if (o.grid_snap) {
	                big_num = total / o.step;
	            }

	            if (big_num > 50) big_num = 50;
	            big_p = this.toFixed(100 / big_num);

	            if (big_num > 4) {
	                small_max = 3;
	            }
	            if (big_num > 7) {
	                small_max = 2;
	            }
	            if (big_num > 14) {
	                small_max = 1;
	            }
	            if (big_num > 28) {
	                small_max = 0;
	            }

	            for (i = 0; i < big_num + 1; i++) {
	                local_small_max = small_max;

	                big_w = this.toFixed(big_p * i);

	                if (big_w > 100) {
	                    big_w = 100;
	                }
	                this.coords.big[i] = big_w;

	                small_p = (big_w - (big_p * (i - 1))) / (local_small_max + 1);

	                for (z = 1; z <= local_small_max; z++) {
	                    if (big_w === 0) {
	                        break;
	                    }

	                    small_w = this.toFixed(big_w - (small_p * z));

	                    html += '<span class="irs-grid-pol small" style="left: ' + small_w + '%"></span>';
	                }

	                html += '<span class="irs-grid-pol" style="left: ' + big_w + '%"></span>';

	                result = this.convertToValue(big_w);
	                if (o.values.length) {
	                    result = o.p_values[result];
	                } else {
	                    result = this._prettify(result);
	                }

	                html += '<span class="irs-grid-text js-grid-text-' + i + '" style="left: ' + big_w + '%">' + result + '</span>';
	            }
	            this.coords.big_num = Math.ceil(big_num + 1);



	            this.$cache.cont.addClass("irs-with-grid");
	            this.$cache.grid.html(html);
	            this.cacheGridLabels();
	        },

	        cacheGridLabels: function () {
	            var $label, i,
	                num = this.coords.big_num;

	            for (i = 0; i < num; i++) {
	                $label = this.$cache.grid.find(".js-grid-text-" + i);
	                this.$cache.grid_labels.push($label);
	            }

	            this.calcGridLabels();
	        },

	        calcGridLabels: function () {
	            var i, label, start = [], finish = [],
	                num = this.coords.big_num;

	            for (i = 0; i < num; i++) {
	                this.coords.big_w[i] = this.$cache.grid_labels[i].outerWidth(false);
	                this.coords.big_p[i] = this.toFixed(this.coords.big_w[i] / this.coords.w_rs * 100);
	                this.coords.big_x[i] = this.toFixed(this.coords.big_p[i] / 2);

	                start[i] = this.toFixed(this.coords.big[i] - this.coords.big_x[i]);
	                finish[i] = this.toFixed(start[i] + this.coords.big_p[i]);
	            }

	            if (this.options.force_edges) {
	                if (start[0] < -this.coords.grid_gap) {
	                    start[0] = -this.coords.grid_gap;
	                    finish[0] = this.toFixed(start[0] + this.coords.big_p[0]);

	                    this.coords.big_x[0] = this.coords.grid_gap;
	                }

	                if (finish[num - 1] > 100 + this.coords.grid_gap) {
	                    finish[num - 1] = 100 + this.coords.grid_gap;
	                    start[num - 1] = this.toFixed(finish[num - 1] - this.coords.big_p[num - 1]);

	                    this.coords.big_x[num - 1] = this.toFixed(this.coords.big_p[num - 1] - this.coords.grid_gap);
	                }
	            }

	            this.calcGridCollision(2, start, finish);
	            this.calcGridCollision(4, start, finish);

	            for (i = 0; i < num; i++) {
	                label = this.$cache.grid_labels[i][0];

	                if (this.coords.big_x[i] !== Number.POSITIVE_INFINITY) {
	                    label.style.marginLeft = -this.coords.big_x[i] + "%";
	                }
	            }
	        },

	        // Collisions Calc Beta
	        // TODO: Refactor then have plenty of time
	        calcGridCollision: function (step, start, finish) {
	            var i, next_i, label,
	                num = this.coords.big_num;

	            for (i = 0; i < num; i += step) {
	                next_i = i + (step / 2);
	                if (next_i >= num) {
	                    break;
	                }

	                label = this.$cache.grid_labels[next_i][0];

	                if (finish[i] <= start[next_i]) {
	                    label.style.visibility = "visible";
	                } else {
	                    label.style.visibility = "hidden";
	                }
	            }
	        },

	        calcGridMargin: function () {
	            if (!this.options.grid_margin) {
	                return;
	            }

	            this.coords.w_rs = this.$cache.rs.outerWidth(false);
	            if (!this.coords.w_rs) {
	                return;
	            }

	            if (this.options.type === "single") {
	                this.coords.w_handle = this.$cache.s_single.outerWidth(false);
	            } else {
	                this.coords.w_handle = this.$cache.s_from.outerWidth(false);
	            }
	            this.coords.p_handle = this.toFixed(this.coords.w_handle  / this.coords.w_rs * 100);
	            this.coords.grid_gap = this.toFixed((this.coords.p_handle / 2) - 0.1);

	            this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%";
	            this.$cache.grid[0].style.left = this.coords.grid_gap + "%";
	        },



	        // =============================================================================================================
	        // Public methods

	        update: function (options) {
	            if (!this.input) {
	                return;
	            }

	            this.is_update = true;

	            this.options.from = this.result.from;
	            this.options.to = this.result.to;
	            this.update_check.from = this.result.from;
	            this.update_check.to = this.result.to;

	            this.options = $.extend(this.options, options);
	            this.validate();
	            this.updateResult(options);

	            this.toggleInput();
	            this.remove();
	            this.init(true);
	        },

	        reset: function () {
	            if (!this.input) {
	                return;
	            }

	            this.updateResult();
	            this.update();
	        },

	        destroy: function () {
	            if (!this.input) {
	                return;
	            }

	            this.toggleInput();
	            this.$cache.input.prop("readonly", false);
	            $.data(this.input, "ionRangeSlider", null);

	            this.remove();
	            this.input = null;
	            this.options = null;
	        }
	    };

	    $.fn.ionRangeSlider = function (options) {
	        return this.each(function() {
	            if (!$.data(this, "ionRangeSlider")) {
	                $.data(this, "ionRangeSlider", new IonRangeSlider(this, options, plugin_count++));
	            }
	        });
	    };



	    // =================================================================================================================
	    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

	    // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

	    // MIT license

	    (function() {
	        var lastTime = 0;
	        var vendors = ['ms', 'moz', 'webkit', 'o'];
	        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
	            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
	                || window[vendors[x]+'CancelRequestAnimationFrame'];
	        }

	        if (!window.requestAnimationFrame)
	            window.requestAnimationFrame = function(callback, element) {
	                var currTime = new Date().getTime();
	                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	                var id = window.setTimeout(function() { callback(currTime + timeToCall); },
	                    timeToCall);
	                lastTime = currTime + timeToCall;
	                return id;
	            };

	        if (!window.cancelAnimationFrame)
	            window.cancelAnimationFrame = function(id) {
	                clearTimeout(id);
	            };
	    }());

	}));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * selectize.js (v0.12.6)
	 * Copyright (c) 2013–2015 Brian Reavis & contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 * @author Brian Reavis <brian@thirdroute.com>
	 */

	/*jshint curly:false */
	/*jshint browser:true */

	(function(root, factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(11),__webpack_require__(12)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory(require('jquery'), require('sifter'), require('microplugin'));
		} else {
			root.Selectize = factory(root.jQuery, root.Sifter, root.MicroPlugin);
		}
	}(this, function($, Sifter, MicroPlugin) {
		'use strict';

		var highlight = function($element, pattern) {
			if (typeof pattern === 'string' && !pattern.length) return;
			var regex = (typeof pattern === 'string') ? new RegExp(pattern, 'i') : pattern;
		
			var highlight = function(node) {
				var skip = 0;
				// Wrap matching part of text node with highlighting <span>, e.g.
				// Soccer  ->  <span class="highlight">Soc</span>cer  for regex = /soc/i
				if (node.nodeType === 3) {
					var pos = node.data.search(regex);
					if (pos >= 0 && node.data.length > 0) {
						var match = node.data.match(regex);
						var spannode = document.createElement('span');
						spannode.className = 'highlight';
						var middlebit = node.splitText(pos);
						var endbit = middlebit.splitText(match[0].length);
						var middleclone = middlebit.cloneNode(true);
						spannode.appendChild(middleclone);
						middlebit.parentNode.replaceChild(spannode, middlebit);
						skip = 1;
					}
				} 
				// Recurse element node, looking for child text nodes to highlight, unless element 
				// is childless, <script>, <style>, or already highlighted: <span class="hightlight">
				else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName) && ( node.className !== 'highlight' || node.tagName !== 'SPAN' )) {
					for (var i = 0; i < node.childNodes.length; ++i) {
						i += highlight(node.childNodes[i]);
					}
				}
				return skip;
			};
		
			return $element.each(function() {
				highlight(this);
			});
		};
		
		/**
		 * removeHighlight fn copied from highlight v5 and
		 * edited to remove with() and pass js strict mode
		 */
		$.fn.removeHighlight = function() {
			return this.find("span.highlight").each(function() {
				this.parentNode.firstChild.nodeName;
				var parent = this.parentNode;
				parent.replaceChild(this.firstChild, this);
				parent.normalize();
			}).end();
		};
		
		
		var MicroEvent = function() {};
		MicroEvent.prototype = {
			on: function(event, fct){
				this._events = this._events || {};
				this._events[event] = this._events[event] || [];
				this._events[event].push(fct);
			},
			off: function(event, fct){
				var n = arguments.length;
				if (n === 0) return delete this._events;
				if (n === 1) return delete this._events[event];
		
				this._events = this._events || {};
				if (event in this._events === false) return;
				this._events[event].splice(this._events[event].indexOf(fct), 1);
			},
			trigger: function(event /* , args... */){
				this._events = this._events || {};
				if (event in this._events === false) return;
				for (var i = 0; i < this._events[event].length; i++){
					this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
				}
			}
		};
		
		/**
		 * Mixin will delegate all MicroEvent.js function in the destination object.
		 *
		 * - MicroEvent.mixin(Foobar) will make Foobar able to use MicroEvent
		 *
		 * @param {object} the object which will support MicroEvent
		 */
		MicroEvent.mixin = function(destObject){
			var props = ['on', 'off', 'trigger'];
			for (var i = 0; i < props.length; i++){
				destObject.prototype[props[i]] = MicroEvent.prototype[props[i]];
			}
		};
		
		var IS_MAC        = /Mac/.test(navigator.userAgent);
		
		var KEY_A         = 65;
		var KEY_COMMA     = 188;
		var KEY_RETURN    = 13;
		var KEY_ESC       = 27;
		var KEY_LEFT      = 37;
		var KEY_UP        = 38;
		var KEY_P         = 80;
		var KEY_RIGHT     = 39;
		var KEY_DOWN      = 40;
		var KEY_N         = 78;
		var KEY_BACKSPACE = 8;
		var KEY_DELETE    = 46;
		var KEY_SHIFT     = 16;
		var KEY_CMD       = IS_MAC ? 91 : 17;
		var KEY_CTRL      = IS_MAC ? 18 : 17;
		var KEY_TAB       = 9;
		
		var TAG_SELECT    = 1;
		var TAG_INPUT     = 2;
		
		// for now, android support in general is too spotty to support validity
		var SUPPORTS_VALIDITY_API = !/android/i.test(window.navigator.userAgent) && !!document.createElement('input').validity;
		
		
		var isset = function(object) {
			return typeof object !== 'undefined';
		};
		
		/**
		 * Converts a scalar to its best string representation
		 * for hash keys and HTML attribute values.
		 *
		 * Transformations:
		 *   'str'     -> 'str'
		 *   null      -> ''
		 *   undefined -> ''
		 *   true      -> '1'
		 *   false     -> '0'
		 *   0         -> '0'
		 *   1         -> '1'
		 *
		 * @param {string} value
		 * @returns {string|null}
		 */
		var hash_key = function(value) {
			if (typeof value === 'undefined' || value === null) return null;
			if (typeof value === 'boolean') return value ? '1' : '0';
			return value + '';
		};
		
		/**
		 * Escapes a string for use within HTML.
		 *
		 * @param {string} str
		 * @returns {string}
		 */
		var escape_html = function(str) {
			return (str + '')
				.replace(/&/g, '&amp;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/"/g, '&quot;');
		};
		
		/**
		 * Escapes "$" characters in replacement strings.
		 *
		 * @param {string} str
		 * @returns {string}
		 */
		var escape_replace = function(str) {
			return (str + '').replace(/\$/g, '$$$$');
		};
		
		var hook = {};
		
		/**
		 * Wraps `method` on `self` so that `fn`
		 * is invoked before the original method.
		 *
		 * @param {object} self
		 * @param {string} method
		 * @param {function} fn
		 */
		hook.before = function(self, method, fn) {
			var original = self[method];
			self[method] = function() {
				fn.apply(self, arguments);
				return original.apply(self, arguments);
			};
		};
		
		/**
		 * Wraps `method` on `self` so that `fn`
		 * is invoked after the original method.
		 *
		 * @param {object} self
		 * @param {string} method
		 * @param {function} fn
		 */
		hook.after = function(self, method, fn) {
			var original = self[method];
			self[method] = function() {
				var result = original.apply(self, arguments);
				fn.apply(self, arguments);
				return result;
			};
		};
		
		/**
		 * Wraps `fn` so that it can only be invoked once.
		 *
		 * @param {function} fn
		 * @returns {function}
		 */
		var once = function(fn) {
			var called = false;
			return function() {
				if (called) return;
				called = true;
				fn.apply(this, arguments);
			};
		};
		
		/**
		 * Wraps `fn` so that it can only be called once
		 * every `delay` milliseconds (invoked on the falling edge).
		 *
		 * @param {function} fn
		 * @param {int} delay
		 * @returns {function}
		 */
		var debounce = function(fn, delay) {
			var timeout;
			return function() {
				var self = this;
				var args = arguments;
				window.clearTimeout(timeout);
				timeout = window.setTimeout(function() {
					fn.apply(self, args);
				}, delay);
			};
		};
		
		/**
		 * Debounce all fired events types listed in `types`
		 * while executing the provided `fn`.
		 *
		 * @param {object} self
		 * @param {array} types
		 * @param {function} fn
		 */
		var debounce_events = function(self, types, fn) {
			var type;
			var trigger = self.trigger;
			var event_args = {};
		
			// override trigger method
			self.trigger = function() {
				var type = arguments[0];
				if (types.indexOf(type) !== -1) {
					event_args[type] = arguments;
				} else {
					return trigger.apply(self, arguments);
				}
			};
		
			// invoke provided function
			fn.apply(self, []);
			self.trigger = trigger;
		
			// trigger queued events
			for (type in event_args) {
				if (event_args.hasOwnProperty(type)) {
					trigger.apply(self, event_args[type]);
				}
			}
		};
		
		/**
		 * A workaround for http://bugs.jquery.com/ticket/6696
		 *
		 * @param {object} $parent - Parent element to listen on.
		 * @param {string} event - Event name.
		 * @param {string} selector - Descendant selector to filter by.
		 * @param {function} fn - Event handler.
		 */
		var watchChildEvent = function($parent, event, selector, fn) {
			$parent.on(event, selector, function(e) {
				var child = e.target;
				while (child && child.parentNode !== $parent[0]) {
					child = child.parentNode;
				}
				e.currentTarget = child;
				return fn.apply(this, [e]);
			});
		};
		
		/**
		 * Determines the current selection within a text input control.
		 * Returns an object containing:
		 *   - start
		 *   - length
		 *
		 * @param {object} input
		 * @returns {object}
		 */
		var getSelection = function(input) {
			var result = {};
			if ('selectionStart' in input) {
				result.start = input.selectionStart;
				result.length = input.selectionEnd - result.start;
			} else if (document.selection) {
				input.focus();
				var sel = document.selection.createRange();
				var selLen = document.selection.createRange().text.length;
				sel.moveStart('character', -input.value.length);
				result.start = sel.text.length - selLen;
				result.length = selLen;
			}
			return result;
		};
		
		/**
		 * Copies CSS properties from one element to another.
		 *
		 * @param {object} $from
		 * @param {object} $to
		 * @param {array} properties
		 */
		var transferStyles = function($from, $to, properties) {
			var i, n, styles = {};
			if (properties) {
				for (i = 0, n = properties.length; i < n; i++) {
					styles[properties[i]] = $from.css(properties[i]);
				}
			} else {
				styles = $from.css();
			}
			$to.css(styles);
		};
		
		/**
		 * Measures the width of a string within a
		 * parent element (in pixels).
		 *
		 * @param {string} str
		 * @param {object} $parent
		 * @returns {int}
		 */
		var measureString = function(str, $parent) {
			if (!str) {
				return 0;
			}
		
			if (!Selectize.$testInput) {
				Selectize.$testInput = $('<span />').css({
					position: 'absolute',
					top: -99999,
					left: -99999,
					width: 'auto',
					padding: 0,
					whiteSpace: 'pre'
				}).appendTo('body');
			}
		
			Selectize.$testInput.text(str);
		
			transferStyles($parent, Selectize.$testInput, [
				'letterSpacing',
				'fontSize',
				'fontFamily',
				'fontWeight',
				'textTransform'
			]);
		
			return Selectize.$testInput.width();
		};
		
		/**
		 * Sets up an input to grow horizontally as the user
		 * types. If the value is changed manually, you can
		 * trigger the "update" handler to resize:
		 *
		 * $input.trigger('update');
		 *
		 * @param {object} $input
		 */
		var autoGrow = function($input) {
			var currentWidth = null;
		
			var update = function(e, options) {
				var value, keyCode, printable, placeholder, width;
				var shift, character, selection;
				e = e || window.event || {};
				options = options || {};
		
				if (e.metaKey || e.altKey) return;
				if (!options.force && $input.data('grow') === false) return;
		
				value = $input.val();
				if (e.type && e.type.toLowerCase() === 'keydown') {
					keyCode = e.keyCode;
					printable = (
						(keyCode >= 48 && keyCode <= 57)  || // 0-9
						(keyCode >= 65 && keyCode <= 90)   || // a-z
						(keyCode >= 96 && keyCode <= 111)  || // numpad 0-9, numeric operators
						(keyCode >= 186 && keyCode <= 222) || // semicolon, equal, comma, dash, etc.
						keyCode === 32 // space
					);
		
					if (keyCode === KEY_DELETE || keyCode === KEY_BACKSPACE) {
						selection = getSelection($input[0]);
						if (selection.length) {
							value = value.substring(0, selection.start) + value.substring(selection.start + selection.length);
						} else if (keyCode === KEY_BACKSPACE && selection.start) {
							value = value.substring(0, selection.start - 1) + value.substring(selection.start + 1);
						} else if (keyCode === KEY_DELETE && typeof selection.start !== 'undefined') {
							value = value.substring(0, selection.start) + value.substring(selection.start + 1);
						}
					} else if (printable) {
						shift = e.shiftKey;
						character = String.fromCharCode(e.keyCode);
						if (shift) character = character.toUpperCase();
						else character = character.toLowerCase();
						value += character;
					}
				}
		
				placeholder = $input.attr('placeholder');
				if (!value && placeholder) {
					value = placeholder;
				}
		
				width = measureString(value, $input) + 4;
				if (width !== currentWidth) {
					currentWidth = width;
					$input.width(width);
					$input.triggerHandler('resize');
				}
			};
		
			$input.on('keydown keyup update blur', update);
			update();
		};
		
		var domToString = function(d) {
			var tmp = document.createElement('div');
		
			tmp.appendChild(d.cloneNode(true));
		
			return tmp.innerHTML;
		};
		
		var logError = function(message, options){
			if(!options) options = {};
			var component = "Selectize";
		
			console.error(component + ": " + message)
		
			if(options.explanation){
				// console.group is undefined in <IE11
				if(console.group) console.group();
				console.error(options.explanation);
				if(console.group) console.groupEnd();
			}
		}
		
		
		var Selectize = function($input, settings) {
			var key, i, n, dir, input, self = this;
			input = $input[0];
			input.selectize = self;
		
			// detect rtl environment
			var computedStyle = window.getComputedStyle && window.getComputedStyle(input, null);
			dir = computedStyle ? computedStyle.getPropertyValue('direction') : input.currentStyle && input.currentStyle.direction;
			dir = dir || $input.parents('[dir]:first').attr('dir') || '';
		
			// setup default state
			$.extend(self, {
				order            : 0,
				settings         : settings,
				$input           : $input,
				tabIndex         : $input.attr('tabindex') || '',
				tagType          : input.tagName.toLowerCase() === 'select' ? TAG_SELECT : TAG_INPUT,
				rtl              : /rtl/i.test(dir),
		
				eventNS          : '.selectize' + (++Selectize.count),
				highlightedValue : null,
				isBlurring       : false,
				isOpen           : false,
				isDisabled       : false,
				isRequired       : $input.is('[required]'),
				isInvalid        : false,
				isLocked         : false,
				isFocused        : false,
				isInputHidden    : false,
				isSetup          : false,
				isShiftDown      : false,
				isCmdDown        : false,
				isCtrlDown       : false,
				ignoreFocus      : false,
				ignoreBlur       : false,
				ignoreHover      : false,
				hasOptions       : false,
				currentResults   : null,
				lastValue        : '',
				caretPos         : 0,
				loading          : 0,
				loadedSearches   : {},
		
				$activeOption    : null,
				$activeItems     : [],
		
				optgroups        : {},
				options          : {},
				userOptions      : {},
				items            : [],
				renderCache      : {},
				onSearchChange   : settings.loadThrottle === null ? self.onSearchChange : debounce(self.onSearchChange, settings.loadThrottle)
			});
		
			// search system
			self.sifter = new Sifter(this.options, {diacritics: settings.diacritics});
		
			// build options table
			if (self.settings.options) {
				for (i = 0, n = self.settings.options.length; i < n; i++) {
					self.registerOption(self.settings.options[i]);
				}
				delete self.settings.options;
			}
		
			// build optgroup table
			if (self.settings.optgroups) {
				for (i = 0, n = self.settings.optgroups.length; i < n; i++) {
					self.registerOptionGroup(self.settings.optgroups[i]);
				}
				delete self.settings.optgroups;
			}
		
			// option-dependent defaults
			self.settings.mode = self.settings.mode || (self.settings.maxItems === 1 ? 'single' : 'multi');
			if (typeof self.settings.hideSelected !== 'boolean') {
				self.settings.hideSelected = self.settings.mode === 'multi';
			}
		
			self.initializePlugins(self.settings.plugins);
			self.setupCallbacks();
			self.setupTemplates();
			self.setup();
		};
		
		// mixins
		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		
		MicroEvent.mixin(Selectize);
		
		if(typeof MicroPlugin !== "undefined"){
			MicroPlugin.mixin(Selectize);
		}else{
			logError("Dependency MicroPlugin is missing",
				{explanation:
					"Make sure you either: (1) are using the \"standalone\" "+
					"version of Selectize, or (2) require MicroPlugin before you "+
					"load Selectize."}
			);
		}
		
		
		// methods
		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		
		$.extend(Selectize.prototype, {
		
			/**
			 * Creates all elements and sets up event bindings.
			 */
			setup: function() {
				var self      = this;
				var settings  = self.settings;
				var eventNS   = self.eventNS;
				var $window   = $(window);
				var $document = $(document);
				var $input    = self.$input;
		
				var $wrapper;
				var $control;
				var $control_input;
				var $dropdown;
				var $dropdown_content;
				var $dropdown_parent;
				var inputMode;
				var timeout_blur;
				var timeout_focus;
				var classes;
				var classes_plugins;
				var inputId;
		
				inputMode         = self.settings.mode;
				classes           = $input.attr('class') || '';
		
				$wrapper          = $('<div>').addClass(settings.wrapperClass).addClass(classes).addClass(inputMode);
				$control          = $('<div>').addClass(settings.inputClass).addClass('items').appendTo($wrapper);
				$control_input    = $('<input type="text" autocomplete="off" />').appendTo($control).attr('tabindex', $input.is(':disabled') ? '-1' : self.tabIndex);
				$dropdown_parent  = $(settings.dropdownParent || $wrapper);
				$dropdown         = $('<div>').addClass(settings.dropdownClass).addClass(inputMode).hide().appendTo($dropdown_parent);
				$dropdown_content = $('<div>').addClass(settings.dropdownContentClass).appendTo($dropdown);
		
				if(inputId = $input.attr('id')) {
					$control_input.attr('id', inputId + '-selectized');
					$("label[for='"+inputId+"']").attr('for', inputId + '-selectized');
				}
		
				if(self.settings.copyClassesToDropdown) {
					$dropdown.addClass(classes);
				}
		
				$wrapper.css({
					width: $input[0].style.width
				});
		
				if (self.plugins.names.length) {
					classes_plugins = 'plugin-' + self.plugins.names.join(' plugin-');
					$wrapper.addClass(classes_plugins);
					$dropdown.addClass(classes_plugins);
				}
		
				if ((settings.maxItems === null || settings.maxItems > 1) && self.tagType === TAG_SELECT) {
					$input.attr('multiple', 'multiple');
				}
		
				if (self.settings.placeholder) {
					$control_input.attr('placeholder', settings.placeholder);
				}
		
				// if splitOn was not passed in, construct it from the delimiter to allow pasting universally
				if (!self.settings.splitOn && self.settings.delimiter) {
					var delimiterEscaped = self.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
					self.settings.splitOn = new RegExp('\\s*' + delimiterEscaped + '+\\s*');
				}
		
				if ($input.attr('autocorrect')) {
					$control_input.attr('autocorrect', $input.attr('autocorrect'));
				}
		
				if ($input.attr('autocapitalize')) {
					$control_input.attr('autocapitalize', $input.attr('autocapitalize'));
				}
				$control_input[0].type = $input[0].type;
		
				self.$wrapper          = $wrapper;
				self.$control          = $control;
				self.$control_input    = $control_input;
				self.$dropdown         = $dropdown;
				self.$dropdown_content = $dropdown_content;
		
				$dropdown.on('mouseenter mousedown click', '[data-disabled]>[data-selectable]', function(e) { e.stopImmediatePropagation(); });
				$dropdown.on('mouseenter', '[data-selectable]', function() { return self.onOptionHover.apply(self, arguments); });
				$dropdown.on('mousedown click', '[data-selectable]', function() { return self.onOptionSelect.apply(self, arguments); });
				watchChildEvent($control, 'mousedown', '*:not(input)', function() { return self.onItemSelect.apply(self, arguments); });
				autoGrow($control_input);
		
				$control.on({
					mousedown : function() { return self.onMouseDown.apply(self, arguments); },
					click     : function() { return self.onClick.apply(self, arguments); }
				});
		
				$control_input.on({
					mousedown : function(e) { e.stopPropagation(); },
					keydown   : function() { return self.onKeyDown.apply(self, arguments); },
					keyup     : function() { return self.onKeyUp.apply(self, arguments); },
					keypress  : function() { return self.onKeyPress.apply(self, arguments); },
					resize    : function() { self.positionDropdown.apply(self, []); },
					blur      : function() { return self.onBlur.apply(self, arguments); },
					focus     : function() { self.ignoreBlur = false; return self.onFocus.apply(self, arguments); },
					paste     : function() { return self.onPaste.apply(self, arguments); }
				});
		
				$document.on('keydown' + eventNS, function(e) {
					self.isCmdDown = e[IS_MAC ? 'metaKey' : 'ctrlKey'];
					self.isCtrlDown = e[IS_MAC ? 'altKey' : 'ctrlKey'];
					self.isShiftDown = e.shiftKey;
				});
		
				$document.on('keyup' + eventNS, function(e) {
					if (e.keyCode === KEY_CTRL) self.isCtrlDown = false;
					if (e.keyCode === KEY_SHIFT) self.isShiftDown = false;
					if (e.keyCode === KEY_CMD) self.isCmdDown = false;
				});
		
				$document.on('mousedown' + eventNS, function(e) {
					if (self.isFocused) {
						// prevent events on the dropdown scrollbar from causing the control to blur
						if (e.target === self.$dropdown[0] || e.target.parentNode === self.$dropdown[0]) {
							return false;
						}
						// blur on click outside
						if (!self.$control.has(e.target).length && e.target !== self.$control[0]) {
							self.blur(e.target);
						}
					}
				});
		
				$window.on(['scroll' + eventNS, 'resize' + eventNS].join(' '), function() {
					if (self.isOpen) {
						self.positionDropdown.apply(self, arguments);
					}
				});
				$window.on('mousemove' + eventNS, function() {
					self.ignoreHover = false;
				});
		
				// store original children and tab index so that they can be
				// restored when the destroy() method is called.
				this.revertSettings = {
					$children : $input.children().detach(),
					tabindex  : $input.attr('tabindex')
				};
		
				$input.attr('tabindex', -1).hide().after(self.$wrapper);
		
				if ($.isArray(settings.items)) {
					self.setValue(settings.items);
					delete settings.items;
				}
		
				// feature detect for the validation API
				if (SUPPORTS_VALIDITY_API) {
					$input.on('invalid' + eventNS, function(e) {
						e.preventDefault();
						self.isInvalid = true;
						self.refreshState();
					});
				}
		
				self.updateOriginalInput();
				self.refreshItems();
				self.refreshState();
				self.updatePlaceholder();
				self.isSetup = true;
		
				if ($input.is(':disabled')) {
					self.disable();
				}
		
				self.on('change', this.onChange);
		
				$input.data('selectize', self);
				$input.addClass('selectized');
				self.trigger('initialize');
		
				// preload options
				if (settings.preload === true) {
					self.onSearchChange('');
				}
		
			},
		
			/**
			 * Sets up default rendering functions.
			 */
			setupTemplates: function() {
				var self = this;
				var field_label = self.settings.labelField;
				var field_optgroup = self.settings.optgroupLabelField;
		
				var templates = {
					'optgroup': function(data) {
						return '<div class="optgroup">' + data.html + '</div>';
					},
					'optgroup_header': function(data, escape) {
						return '<div class="optgroup-header">' + escape(data[field_optgroup]) + '</div>';
					},
					'option': function(data, escape) {
						return '<div class="option">' + escape(data[field_label]) + '</div>';
					},
					'item': function(data, escape) {
						return '<div class="item">' + escape(data[field_label]) + '</div>';
					},
					'option_create': function(data, escape) {
						return '<div class="create">Add <strong>' + escape(data.input) + '</strong>&hellip;</div>';
					}
				};
		
				self.settings.render = $.extend({}, templates, self.settings.render);
			},
		
			/**
			 * Maps fired events to callbacks provided
			 * in the settings used when creating the control.
			 */
			setupCallbacks: function() {
				var key, fn, callbacks = {
					'initialize'      : 'onInitialize',
					'change'          : 'onChange',
					'item_add'        : 'onItemAdd',
					'item_remove'     : 'onItemRemove',
					'clear'           : 'onClear',
					'option_add'      : 'onOptionAdd',
					'option_remove'   : 'onOptionRemove',
					'option_clear'    : 'onOptionClear',
					'optgroup_add'    : 'onOptionGroupAdd',
					'optgroup_remove' : 'onOptionGroupRemove',
					'optgroup_clear'  : 'onOptionGroupClear',
					'dropdown_open'   : 'onDropdownOpen',
					'dropdown_close'  : 'onDropdownClose',
					'type'            : 'onType',
					'load'            : 'onLoad',
					'focus'           : 'onFocus',
					'blur'            : 'onBlur'
				};
		
				for (key in callbacks) {
					if (callbacks.hasOwnProperty(key)) {
						fn = this.settings[callbacks[key]];
						if (fn) this.on(key, fn);
					}
				}
			},
		
			/**
			 * Triggered when the main control element
			 * has a click event.
			 *
			 * @param {object} e
			 * @return {boolean}
			 */
			onClick: function(e) {
				var self = this;
		
				// necessary for mobile webkit devices (manual focus triggering
				// is ignored unless invoked within a click event)
		    // also necessary to reopen a dropdown that has been closed by
		    // closeAfterSelect
				if (!self.isFocused || !self.isOpen) {
					self.focus();
					e.preventDefault();
				}
			},
		
			/**
			 * Triggered when the main control element
			 * has a mouse down event.
			 *
			 * @param {object} e
			 * @return {boolean}
			 */
			onMouseDown: function(e) {
				var self = this;
				var defaultPrevented = e.isDefaultPrevented();
				var $target = $(e.target);
		
				if (self.isFocused) {
					// retain focus by preventing native handling. if the
					// event target is the input it should not be modified.
					// otherwise, text selection within the input won't work.
					if (e.target !== self.$control_input[0]) {
						if (self.settings.mode === 'single') {
							// toggle dropdown
							self.isOpen ? self.close() : self.open();
						} else if (!defaultPrevented) {
							self.setActiveItem(null);
						}
						return false;
					}
				} else {
					// give control focus
					if (!defaultPrevented) {
						window.setTimeout(function() {
							self.focus();
						}, 0);
					}
				}
			},
		
			/**
			 * Triggered when the value of the control has been changed.
			 * This should propagate the event to the original DOM
			 * input / select element.
			 */
			onChange: function() {
				this.$input.trigger('change');
			},
		
			/**
			 * Triggered on <input> paste.
			 *
			 * @param {object} e
			 * @returns {boolean}
			 */
			onPaste: function(e) {
				var self = this;
		
				if (self.isFull() || self.isInputHidden || self.isLocked) {
					e.preventDefault();
					return;
				}
		
				// If a regex or string is included, this will split the pasted
				// input and create Items for each separate value
				if (self.settings.splitOn) {
		
					// Wait for pasted text to be recognized in value
					setTimeout(function() {
						var pastedText = self.$control_input.val();
						if(!pastedText.match(self.settings.splitOn)){ return }
		
						var splitInput = $.trim(pastedText).split(self.settings.splitOn);
						for (var i = 0, n = splitInput.length; i < n; i++) {
							self.createItem(splitInput[i]);
						}
					}, 0);
				}
			},
		
			/**
			 * Triggered on <input> keypress.
			 *
			 * @param {object} e
			 * @returns {boolean}
			 */
			onKeyPress: function(e) {
				if (this.isLocked) return e && e.preventDefault();
				var character = String.fromCharCode(e.keyCode || e.which);
				if (this.settings.create && this.settings.mode === 'multi' && character === this.settings.delimiter) {
					this.createItem();
					e.preventDefault();
					return false;
				}
			},
		
			/**
			 * Triggered on <input> keydown.
			 *
			 * @param {object} e
			 * @returns {boolean}
			 */
			onKeyDown: function(e) {
				var isInput = e.target === this.$control_input[0];
				var self = this;
		
				if (self.isLocked) {
					if (e.keyCode !== KEY_TAB) {
						e.preventDefault();
					}
					return;
				}
		
				switch (e.keyCode) {
					case KEY_A:
						if (self.isCmdDown) {
							self.selectAll();
							return;
						}
						break;
					case KEY_ESC:
						if (self.isOpen) {
							e.preventDefault();
							e.stopPropagation();
							self.close();
						}
						return;
					case KEY_N:
						if (!e.ctrlKey || e.altKey) break;
					case KEY_DOWN:
						if (!self.isOpen && self.hasOptions) {
							self.open();
						} else if (self.$activeOption) {
							self.ignoreHover = true;
							var $next = self.getAdjacentOption(self.$activeOption, 1);
							if ($next.length) self.setActiveOption($next, true, true);
						}
						e.preventDefault();
						return;
					case KEY_P:
						if (!e.ctrlKey || e.altKey) break;
					case KEY_UP:
						if (self.$activeOption) {
							self.ignoreHover = true;
							var $prev = self.getAdjacentOption(self.$activeOption, -1);
							if ($prev.length) self.setActiveOption($prev, true, true);
						}
						e.preventDefault();
						return;
					case KEY_RETURN:
						if (self.isOpen && self.$activeOption) {
							self.onOptionSelect({currentTarget: self.$activeOption});
							e.preventDefault();
						}
						return;
					case KEY_LEFT:
						self.advanceSelection(-1, e);
						return;
					case KEY_RIGHT:
						self.advanceSelection(1, e);
						return;
					case KEY_TAB:
						if (self.settings.selectOnTab && self.isOpen && self.$activeOption) {
							self.onOptionSelect({currentTarget: self.$activeOption});
		
							// Default behaviour is to jump to the next field, we only want this
							// if the current field doesn't accept any more entries
							if (!self.isFull()) {
								e.preventDefault();
							}
						}
						if (self.settings.create && self.createItem()) {
							e.preventDefault();
						}
						return;
					case KEY_BACKSPACE:
					case KEY_DELETE:
						self.deleteSelection(e);
						return;
				}
		
				if ((self.isFull() || self.isInputHidden) && !(IS_MAC ? e.metaKey : e.ctrlKey)) {
					e.preventDefault();
					return;
				}
			},
		
			/**
			 * Triggered on <input> keyup.
			 *
			 * @param {object} e
			 * @returns {boolean}
			 */
			onKeyUp: function(e) {
				var self = this;
		
				if (self.isLocked) return e && e.preventDefault();
				var value = self.$control_input.val() || '';
				if (self.lastValue !== value) {
					self.lastValue = value;
					self.onSearchChange(value);
					self.refreshOptions();
					self.trigger('type', value);
				}
			},
		
			/**
			 * Invokes the user-provide option provider / loader.
			 *
			 * Note: this function is debounced in the Selectize
			 * constructor (by `settings.loadThrottle` milliseconds)
			 *
			 * @param {string} value
			 */
			onSearchChange: function(value) {
				var self = this;
				var fn = self.settings.load;
				if (!fn) return;
				if (self.loadedSearches.hasOwnProperty(value)) return;
				self.loadedSearches[value] = true;
				self.load(function(callback) {
					fn.apply(self, [value, callback]);
				});
			},
		
			/**
			 * Triggered on <input> focus.
			 *
			 * @param {object} e (optional)
			 * @returns {boolean}
			 */
			onFocus: function(e) {
				var self = this;
				var wasFocused = self.isFocused;
		
				if (self.isDisabled) {
					self.blur();
					e && e.preventDefault();
					return false;
				}
		
				if (self.ignoreFocus) return;
				self.isFocused = true;
				if (self.settings.preload === 'focus') self.onSearchChange('');
		
				if (!wasFocused) self.trigger('focus');
		
				if (!self.$activeItems.length) {
					self.showInput();
					self.setActiveItem(null);
					self.refreshOptions(!!self.settings.openOnFocus);
				}
		
				self.refreshState();
			},
		
			/**
			 * Triggered on <input> blur.
			 *
			 * @param {object} e
			 * @param {Element} dest
			 */
			onBlur: function(e, dest) {
				var self = this;
				if (!self.isFocused) return;
				self.isFocused = false;
		
				if (self.ignoreFocus) {
					return;
				} else if (!self.ignoreBlur && document.activeElement === self.$dropdown_content[0]) {
					// necessary to prevent IE closing the dropdown when the scrollbar is clicked
					self.ignoreBlur = true;
					self.onFocus(e);
					return;
				}
		
				var deactivate = function() {
					self.close();
					self.setTextboxValue('');
					self.setActiveItem(null);
					self.setActiveOption(null);
					self.setCaret(self.items.length);
					self.refreshState();
		
					// IE11 bug: element still marked as active
					dest && dest.focus && dest.focus();
		
					self.isBlurring = false;
					self.ignoreFocus = false;
					self.trigger('blur');
				};
		
				self.isBlurring = true;
				self.ignoreFocus = true;
				if (self.settings.create && self.settings.createOnBlur) {
					self.createItem(null, false, deactivate);
				} else {
					deactivate();
				}
			},
		
			/**
			 * Triggered when the user rolls over
			 * an option in the autocomplete dropdown menu.
			 *
			 * @param {object} e
			 * @returns {boolean}
			 */
			onOptionHover: function(e) {
				if (this.ignoreHover) return;
				this.setActiveOption(e.currentTarget, false);
			},
		
			/**
			 * Triggered when the user clicks on an option
			 * in the autocomplete dropdown menu.
			 *
			 * @param {object} e
			 * @returns {boolean}
			 */
			onOptionSelect: function(e) {
				var value, $target, $option, self = this;
		
				if (e.preventDefault) {
					e.preventDefault();
					e.stopPropagation();
				}
		
				$target = $(e.currentTarget);
				if ($target.hasClass('create')) {
					self.createItem(null, function() {
						if (self.settings.closeAfterSelect) {
							self.close();
						}
					});
				} else {
					value = $target.attr('data-value');
					if (typeof value !== 'undefined') {
						self.lastQuery = null;
						self.setTextboxValue('');
						self.addItem(value);
						if (self.settings.closeAfterSelect) {
							self.close();
						} else if (!self.settings.hideSelected && e.type && /mouse/.test(e.type)) {
							self.setActiveOption(self.getOption(value));
						}
					}
				}
			},
		
			/**
			 * Triggered when the user clicks on an item
			 * that has been selected.
			 *
			 * @param {object} e
			 * @returns {boolean}
			 */
			onItemSelect: function(e) {
				var self = this;
		
				if (self.isLocked) return;
				if (self.settings.mode === 'multi') {
					e.preventDefault();
					self.setActiveItem(e.currentTarget, e);
				}
			},
		
			/**
			 * Invokes the provided method that provides
			 * results to a callback---which are then added
			 * as options to the control.
			 *
			 * @param {function} fn
			 */
			load: function(fn) {
				var self = this;
				var $wrapper = self.$wrapper.addClass(self.settings.loadingClass);
		
				self.loading++;
				fn.apply(self, [function(results) {
					self.loading = Math.max(self.loading - 1, 0);
					if (results && results.length) {
						self.addOption(results);
						self.refreshOptions(self.isFocused && !self.isInputHidden);
					}
					if (!self.loading) {
						$wrapper.removeClass(self.settings.loadingClass);
					}
					self.trigger('load', results);
				}]);
			},
		
			/**
			 * Sets the input field of the control to the specified value.
			 *
			 * @param {string} value
			 */
			setTextboxValue: function(value) {
				var $input = this.$control_input;
				var changed = $input.val() !== value;
				if (changed) {
					$input.val(value).triggerHandler('update');
					this.lastValue = value;
				}
			},
		
			/**
			 * Returns the value of the control. If multiple items
			 * can be selected (e.g. <select multiple>), this returns
			 * an array. If only one item can be selected, this
			 * returns a string.
			 *
			 * @returns {mixed}
			 */
			getValue: function() {
				if (this.tagType === TAG_SELECT && this.$input.attr('multiple')) {
					return this.items;
				} else {
					return this.items.join(this.settings.delimiter);
				}
			},
		
			/**
			 * Resets the selected items to the given value.
			 *
			 * @param {mixed} value
			 */
			setValue: function(value, silent) {
				var events = silent ? [] : ['change'];
		
				debounce_events(this, events, function() {
					this.clear(silent);
					this.addItems(value, silent);
				});
			},
		
			/**
			 * Sets the selected item.
			 *
			 * @param {object} $item
			 * @param {object} e (optional)
			 */
			setActiveItem: function($item, e) {
				var self = this;
				var eventName;
				var i, idx, begin, end, item, swap;
				var $last;
		
				if (self.settings.mode === 'single') return;
				$item = $($item);
		
				// clear the active selection
				if (!$item.length) {
					$(self.$activeItems).removeClass('active');
					self.$activeItems = [];
					if (self.isFocused) {
						self.showInput();
					}
					return;
				}
		
				// modify selection
				eventName = e && e.type.toLowerCase();
		
				if (eventName === 'mousedown' && self.isShiftDown && self.$activeItems.length) {
					$last = self.$control.children('.active:last');
					begin = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$last[0]]);
					end   = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$item[0]]);
					if (begin > end) {
						swap  = begin;
						begin = end;
						end   = swap;
					}
					for (i = begin; i <= end; i++) {
						item = self.$control[0].childNodes[i];
						if (self.$activeItems.indexOf(item) === -1) {
							$(item).addClass('active');
							self.$activeItems.push(item);
						}
					}
					e.preventDefault();
				} else if ((eventName === 'mousedown' && self.isCtrlDown) || (eventName === 'keydown' && this.isShiftDown)) {
					if ($item.hasClass('active')) {
						idx = self.$activeItems.indexOf($item[0]);
						self.$activeItems.splice(idx, 1);
						$item.removeClass('active');
					} else {
						self.$activeItems.push($item.addClass('active')[0]);
					}
				} else {
					$(self.$activeItems).removeClass('active');
					self.$activeItems = [$item.addClass('active')[0]];
				}
		
				// ensure control has focus
				self.hideInput();
				if (!this.isFocused) {
					self.focus();
				}
			},
		
			/**
			 * Sets the selected item in the dropdown menu
			 * of available options.
			 *
			 * @param {object} $object
			 * @param {boolean} scroll
			 * @param {boolean} animate
			 */
			setActiveOption: function($option, scroll, animate) {
				var height_menu, height_item, y;
				var scroll_top, scroll_bottom;
				var self = this;
		
				if (self.$activeOption) self.$activeOption.removeClass('active');
				self.$activeOption = null;
		
				$option = $($option);
				if (!$option.length) return;
		
				self.$activeOption = $option.addClass('active');
		
				if (scroll || !isset(scroll)) {
		
					height_menu   = self.$dropdown_content.height();
					height_item   = self.$activeOption.outerHeight(true);
					scroll        = self.$dropdown_content.scrollTop() || 0;
					y             = self.$activeOption.offset().top - self.$dropdown_content.offset().top + scroll;
					scroll_top    = y;
					scroll_bottom = y - height_menu + height_item;
		
					if (y + height_item > height_menu + scroll) {
						self.$dropdown_content.stop().animate({scrollTop: scroll_bottom}, animate ? self.settings.scrollDuration : 0);
					} else if (y < scroll) {
						self.$dropdown_content.stop().animate({scrollTop: scroll_top}, animate ? self.settings.scrollDuration : 0);
					}
		
				}
			},
		
			/**
			 * Selects all items (CTRL + A).
			 */
			selectAll: function() {
				var self = this;
				if (self.settings.mode === 'single') return;
		
				self.$activeItems = Array.prototype.slice.apply(self.$control.children(':not(input)').addClass('active'));
				if (self.$activeItems.length) {
					self.hideInput();
					self.close();
				}
				self.focus();
			},
		
			/**
			 * Hides the input element out of view, while
			 * retaining its focus.
			 */
			hideInput: function() {
				var self = this;
		
				self.setTextboxValue('');
				self.$control_input.css({opacity: 0, position: 'absolute', left: self.rtl ? 10000 : -10000});
				self.isInputHidden = true;
			},
		
			/**
			 * Restores input visibility.
			 */
			showInput: function() {
				this.$control_input.css({opacity: 1, position: 'relative', left: 0});
				this.isInputHidden = false;
			},
		
			/**
			 * Gives the control focus.
			 */
			focus: function() {
				var self = this;
				if (self.isDisabled) return;
		
				self.ignoreFocus = true;
				self.$control_input[0].focus();
				window.setTimeout(function() {
					self.ignoreFocus = false;
					self.onFocus();
				}, 0);
			},
		
			/**
			 * Forces the control out of focus.
			 *
			 * @param {Element} dest
			 */
			blur: function(dest) {
				this.$control_input[0].blur();
				this.onBlur(null, dest);
			},
		
			/**
			 * Returns a function that scores an object
			 * to show how good of a match it is to the
			 * provided query.
			 *
			 * @param {string} query
			 * @param {object} options
			 * @return {function}
			 */
			getScoreFunction: function(query) {
				return this.sifter.getScoreFunction(query, this.getSearchOptions());
			},
		
			/**
			 * Returns search options for sifter (the system
			 * for scoring and sorting results).
			 *
			 * @see https://github.com/brianreavis/sifter.js
			 * @return {object}
			 */
			getSearchOptions: function() {
				var settings = this.settings;
				var sort = settings.sortField;
				if (typeof sort === 'string') {
					sort = [{field: sort}];
				}
		
				return {
					fields      : settings.searchField,
					conjunction : settings.searchConjunction,
					sort        : sort,
					nesting     : settings.nesting
				};
			},
		
			/**
			 * Searches through available options and returns
			 * a sorted array of matches.
			 *
			 * Returns an object containing:
			 *
			 *   - query {string}
			 *   - tokens {array}
			 *   - total {int}
			 *   - items {array}
			 *
			 * @param {string} query
			 * @returns {object}
			 */
			search: function(query) {
				var i, value, score, result, calculateScore;
				var self     = this;
				var settings = self.settings;
				var options  = this.getSearchOptions();
		
				// validate user-provided result scoring function
				if (settings.score) {
					calculateScore = self.settings.score.apply(this, [query]);
					if (typeof calculateScore !== 'function') {
						throw new Error('Selectize "score" setting must be a function that returns a function');
					}
				}
		
				// perform search
				if (query !== self.lastQuery) {
					self.lastQuery = query;
					result = self.sifter.search(query, $.extend(options, {score: calculateScore}));
					self.currentResults = result;
				} else {
					result = $.extend(true, {}, self.currentResults);
				}
		
				// filter out selected items
				if (settings.hideSelected) {
					for (i = result.items.length - 1; i >= 0; i--) {
						if (self.items.indexOf(hash_key(result.items[i].id)) !== -1) {
							result.items.splice(i, 1);
						}
					}
				}
		
				return result;
			},
		
			/**
			 * Refreshes the list of available options shown
			 * in the autocomplete dropdown menu.
			 *
			 * @param {boolean} triggerDropdown
			 */
			refreshOptions: function(triggerDropdown) {
				var i, j, k, n, groups, groups_order, option, option_html, optgroup, optgroups, html, html_children, has_create_option;
				var $active, $active_before, $create;
		
				if (typeof triggerDropdown === 'undefined') {
					triggerDropdown = true;
				}
		
				var self              = this;
				var query             = $.trim(self.$control_input.val());
				var results           = self.search(query);
				var $dropdown_content = self.$dropdown_content;
				var active_before     = self.$activeOption && hash_key(self.$activeOption.attr('data-value'));
		
				// build markup
				n = results.items.length;
				if (typeof self.settings.maxOptions === 'number') {
					n = Math.min(n, self.settings.maxOptions);
				}
		
				// render and group available options individually
				groups = {};
				groups_order = [];
		
				for (i = 0; i < n; i++) {
					option      = self.options[results.items[i].id];
					option_html = self.render('option', option);
					optgroup    = option[self.settings.optgroupField] || '';
					optgroups   = $.isArray(optgroup) ? optgroup : [optgroup];
		
					for (j = 0, k = optgroups && optgroups.length; j < k; j++) {
						optgroup = optgroups[j];
						if (!self.optgroups.hasOwnProperty(optgroup)) {
							optgroup = '';
						}
						if (!groups.hasOwnProperty(optgroup)) {
							groups[optgroup] = document.createDocumentFragment();
							groups_order.push(optgroup);
						}
						groups[optgroup].appendChild(option_html);
					}
				}
		
				// sort optgroups
				if (this.settings.lockOptgroupOrder) {
					groups_order.sort(function(a, b) {
						var a_order = self.optgroups[a].$order || 0;
						var b_order = self.optgroups[b].$order || 0;
						return a_order - b_order;
					});
				}
		
				// render optgroup headers & join groups
				html = document.createDocumentFragment();
				for (i = 0, n = groups_order.length; i < n; i++) {
					optgroup = groups_order[i];
					if (self.optgroups.hasOwnProperty(optgroup) && groups[optgroup].childNodes.length) {
						// render the optgroup header and options within it,
						// then pass it to the wrapper template
						html_children = document.createDocumentFragment();
						html_children.appendChild(self.render('optgroup_header', self.optgroups[optgroup]));
						html_children.appendChild(groups[optgroup]);
		
						html.appendChild(self.render('optgroup', $.extend({}, self.optgroups[optgroup], {
							html: domToString(html_children),
							dom:  html_children
						})));
					} else {
						html.appendChild(groups[optgroup]);
					}
				}
		
				$dropdown_content.html(html);
		
				// highlight matching terms inline
				if (self.settings.highlight) {
					$dropdown_content.removeHighlight();
					if (results.query.length && results.tokens.length) {
						for (i = 0, n = results.tokens.length; i < n; i++) {
							highlight($dropdown_content, results.tokens[i].regex);
						}
					}
				}
		
				// add "selected" class to selected options
				if (!self.settings.hideSelected) {
					for (i = 0, n = self.items.length; i < n; i++) {
						self.getOption(self.items[i]).addClass('selected');
					}
				}
		
				// add create option
				has_create_option = self.canCreate(query);
				if (has_create_option) {
					$dropdown_content.prepend(self.render('option_create', {input: query}));
					$create = $($dropdown_content[0].childNodes[0]);
				}
		
				// activate
				self.hasOptions = results.items.length > 0 || has_create_option;
				if (self.hasOptions) {
					if (results.items.length > 0) {
						$active_before = active_before && self.getOption(active_before);
						if ($active_before && $active_before.length) {
							$active = $active_before;
						} else if (self.settings.mode === 'single' && self.items.length) {
							$active = self.getOption(self.items[0]);
						}
						if (!$active || !$active.length) {
							if ($create && !self.settings.addPrecedence) {
								$active = self.getAdjacentOption($create, 1);
							} else {
								$active = $dropdown_content.find('[data-selectable]:first');
							}
						}
					} else {
						$active = $create;
					}
					self.setActiveOption($active);
					if (triggerDropdown && !self.isOpen) { self.open(); }
				} else {
					self.setActiveOption(null);
					if (triggerDropdown && self.isOpen) { self.close(); }
				}
			},
		
			/**
			 * Adds an available option. If it already exists,
			 * nothing will happen. Note: this does not refresh
			 * the options list dropdown (use `refreshOptions`
			 * for that).
			 *
			 * Usage:
			 *
			 *   this.addOption(data)
			 *
			 * @param {object|array} data
			 */
			addOption: function(data) {
				var i, n, value, self = this;
		
				if ($.isArray(data)) {
					for (i = 0, n = data.length; i < n; i++) {
						self.addOption(data[i]);
					}
					return;
				}
		
				if (value = self.registerOption(data)) {
					self.userOptions[value] = true;
					self.lastQuery = null;
					self.trigger('option_add', value, data);
				}
			},
		
			/**
			 * Registers an option to the pool of options.
			 *
			 * @param {object} data
			 * @return {boolean|string}
			 */
			registerOption: function(data) {
				var key = hash_key(data[this.settings.valueField]);
				if (typeof key === 'undefined' || key === null || this.options.hasOwnProperty(key)) return false;
				data.$order = data.$order || ++this.order;
				this.options[key] = data;
				return key;
			},
		
			/**
			 * Registers an option group to the pool of option groups.
			 *
			 * @param {object} data
			 * @return {boolean|string}
			 */
			registerOptionGroup: function(data) {
				var key = hash_key(data[this.settings.optgroupValueField]);
				if (!key) return false;
		
				data.$order = data.$order || ++this.order;
				this.optgroups[key] = data;
				return key;
			},
		
			/**
			 * Registers a new optgroup for options
			 * to be bucketed into.
			 *
			 * @param {string} id
			 * @param {object} data
			 */
			addOptionGroup: function(id, data) {
				data[this.settings.optgroupValueField] = id;
				if (id = this.registerOptionGroup(data)) {
					this.trigger('optgroup_add', id, data);
				}
			},
		
			/**
			 * Removes an existing option group.
			 *
			 * @param {string} id
			 */
			removeOptionGroup: function(id) {
				if (this.optgroups.hasOwnProperty(id)) {
					delete this.optgroups[id];
					this.renderCache = {};
					this.trigger('optgroup_remove', id);
				}
			},
		
			/**
			 * Clears all existing option groups.
			 */
			clearOptionGroups: function() {
				this.optgroups = {};
				this.renderCache = {};
				this.trigger('optgroup_clear');
			},
		
			/**
			 * Updates an option available for selection. If
			 * it is visible in the selected items or options
			 * dropdown, it will be re-rendered automatically.
			 *
			 * @param {string} value
			 * @param {object} data
			 */
			updateOption: function(value, data) {
				var self = this;
				var $item, $item_new;
				var value_new, index_item, cache_items, cache_options, order_old;
		
				value     = hash_key(value);
				value_new = hash_key(data[self.settings.valueField]);
		
				// sanity checks
				if (value === null) return;
				if (!self.options.hasOwnProperty(value)) return;
				if (typeof value_new !== 'string') throw new Error('Value must be set in option data');
		
				order_old = self.options[value].$order;
		
				// update references
				if (value_new !== value) {
					delete self.options[value];
					index_item = self.items.indexOf(value);
					if (index_item !== -1) {
						self.items.splice(index_item, 1, value_new);
					}
				}
				data.$order = data.$order || order_old;
				self.options[value_new] = data;
		
				// invalidate render cache
				cache_items = self.renderCache['item'];
				cache_options = self.renderCache['option'];
		
				if (cache_items) {
					delete cache_items[value];
					delete cache_items[value_new];
				}
				if (cache_options) {
					delete cache_options[value];
					delete cache_options[value_new];
				}
		
				// update the item if it's selected
				if (self.items.indexOf(value_new) !== -1) {
					$item = self.getItem(value);
					$item_new = $(self.render('item', data));
					if ($item.hasClass('active')) $item_new.addClass('active');
					$item.replaceWith($item_new);
				}
		
				// invalidate last query because we might have updated the sortField
				self.lastQuery = null;
		
				// update dropdown contents
				if (self.isOpen) {
					self.refreshOptions(false);
				}
			},
		
			/**
			 * Removes a single option.
			 *
			 * @param {string} value
			 * @param {boolean} silent
			 */
			removeOption: function(value, silent) {
				var self = this;
				value = hash_key(value);
		
				var cache_items = self.renderCache['item'];
				var cache_options = self.renderCache['option'];
				if (cache_items) delete cache_items[value];
				if (cache_options) delete cache_options[value];
		
				delete self.userOptions[value];
				delete self.options[value];
				self.lastQuery = null;
				self.trigger('option_remove', value);
				self.removeItem(value, silent);
			},
		
			/**
			 * Clears all options.
			 */
			clearOptions: function() {
				var self = this;
		
				self.loadedSearches = {};
				self.userOptions = {};
				self.renderCache = {};
				var options = self.options;
				$.each(self.options, function(key, value) {
					if(self.items.indexOf(key) == -1) {
						delete options[key];
					}
				});
				self.options = self.sifter.items = options;
				self.lastQuery = null;
				self.trigger('option_clear');
			},
		
			/**
			 * Returns the jQuery element of the option
			 * matching the given value.
			 *
			 * @param {string} value
			 * @returns {object}
			 */
			getOption: function(value) {
				return this.getElementWithValue(value, this.$dropdown_content.find('[data-selectable]'));
			},
		
			/**
			 * Returns the jQuery element of the next or
			 * previous selectable option.
			 *
			 * @param {object} $option
			 * @param {int} direction  can be 1 for next or -1 for previous
			 * @return {object}
			 */
			getAdjacentOption: function($option, direction) {
				var $options = this.$dropdown.find('[data-selectable]');
				var index    = $options.index($option) + direction;
		
				return index >= 0 && index < $options.length ? $options.eq(index) : $();
			},
		
			/**
			 * Finds the first element with a "data-value" attribute
			 * that matches the given value.
			 *
			 * @param {mixed} value
			 * @param {object} $els
			 * @return {object}
			 */
			getElementWithValue: function(value, $els) {
				value = hash_key(value);
		
				if (typeof value !== 'undefined' && value !== null) {
					for (var i = 0, n = $els.length; i < n; i++) {
						if ($els[i].getAttribute('data-value') === value) {
							return $($els[i]);
						}
					}
				}
		
				return $();
			},
		
			/**
			 * Returns the jQuery element of the item
			 * matching the given value.
			 *
			 * @param {string} value
			 * @returns {object}
			 */
			getItem: function(value) {
				return this.getElementWithValue(value, this.$control.children());
			},
		
			/**
			 * "Selects" multiple items at once. Adds them to the list
			 * at the current caret position.
			 *
			 * @param {string} value
			 * @param {boolean} silent
			 */
			addItems: function(values, silent) {
				this.buffer = document.createDocumentFragment();
		
				var childNodes = this.$control[0].childNodes;
				for (var i = 0; i < childNodes.length; i++) {
					this.buffer.appendChild(childNodes[i]);
				}
		
				var items = $.isArray(values) ? values : [values];
				for (var i = 0, n = items.length; i < n; i++) {
					this.isPending = (i < n - 1);
					this.addItem(items[i], silent);
				}
		
				var control = this.$control[0];
				control.insertBefore(this.buffer, control.firstChild);
		
				this.buffer = null;
			},
		
			/**
			 * "Selects" an item. Adds it to the list
			 * at the current caret position.
			 *
			 * @param {string} value
			 * @param {boolean} silent
			 */
			addItem: function(value, silent) {
				var events = silent ? [] : ['change'];
		
				debounce_events(this, events, function() {
					var $item, $option, $options;
					var self = this;
					var inputMode = self.settings.mode;
					var i, active, value_next, wasFull;
					value = hash_key(value);
		
					if (self.items.indexOf(value) !== -1) {
						if (inputMode === 'single') self.close();
						return;
					}
		
					if (!self.options.hasOwnProperty(value)) return;
					if (inputMode === 'single') self.clear(silent);
					if (inputMode === 'multi' && self.isFull()) return;
		
					$item = $(self.render('item', self.options[value]));
					wasFull = self.isFull();
					self.items.splice(self.caretPos, 0, value);
					self.insertAtCaret($item);
					if (!self.isPending || (!wasFull && self.isFull())) {
						self.refreshState();
					}
		
					if (self.isSetup) {
						$options = self.$dropdown_content.find('[data-selectable]');
		
						// update menu / remove the option (if this is not one item being added as part of series)
						if (!self.isPending) {
							$option = self.getOption(value);
							value_next = self.getAdjacentOption($option, 1).attr('data-value');
							self.refreshOptions(self.isFocused && inputMode !== 'single');
							if (value_next) {
								self.setActiveOption(self.getOption(value_next));
							}
						}
		
						// hide the menu if the maximum number of items have been selected or no options are left
						if (!$options.length || self.isFull()) {
							self.close();
						} else if (!self.isPending) {
							self.positionDropdown();
						}
		
						self.updatePlaceholder();
						self.trigger('item_add', value, $item);
		
						if (!self.isPending) {
							self.updateOriginalInput({silent: silent});
						}
					}
				});
			},
		
			/**
			 * Removes the selected item matching
			 * the provided value.
			 *
			 * @param {string} value
			 */
			removeItem: function(value, silent) {
				var self = this;
				var $item, i, idx;
		
				$item = (value instanceof $) ? value : self.getItem(value);
				value = hash_key($item.attr('data-value'));
				i = self.items.indexOf(value);
		
				if (i !== -1) {
					$item.remove();
					if ($item.hasClass('active')) {
						idx = self.$activeItems.indexOf($item[0]);
						self.$activeItems.splice(idx, 1);
					}
		
					self.items.splice(i, 1);
					self.lastQuery = null;
					if (!self.settings.persist && self.userOptions.hasOwnProperty(value)) {
						self.removeOption(value, silent);
					}
		
					if (i < self.caretPos) {
						self.setCaret(self.caretPos - 1);
					}
		
					self.refreshState();
					self.updatePlaceholder();
					self.updateOriginalInput({silent: silent});
					self.positionDropdown();
					self.trigger('item_remove', value, $item);
				}
			},
		
			/**
			 * Invokes the `create` method provided in the
			 * selectize options that should provide the data
			 * for the new item, given the user input.
			 *
			 * Once this completes, it will be added
			 * to the item list.
			 *
			 * @param {string} value
			 * @param {boolean} [triggerDropdown]
			 * @param {function} [callback]
			 * @return {boolean}
			 */
			createItem: function(input, triggerDropdown) {
				var self  = this;
				var caret = self.caretPos;
				input = input || $.trim(self.$control_input.val() || '');
		
				var callback = arguments[arguments.length - 1];
				if (typeof callback !== 'function') callback = function() {};
		
				if (typeof triggerDropdown !== 'boolean') {
					triggerDropdown = true;
				}
		
				if (!self.canCreate(input)) {
					callback();
					return false;
				}
		
				self.lock();
		
				var setup = (typeof self.settings.create === 'function') ? this.settings.create : function(input) {
					var data = {};
					data[self.settings.labelField] = input;
					data[self.settings.valueField] = input;
					return data;
				};
		
				var create = once(function(data) {
					self.unlock();
		
					if (!data || typeof data !== 'object') return callback();
					var value = hash_key(data[self.settings.valueField]);
					if (typeof value !== 'string') return callback();
		
					self.setTextboxValue('');
					self.addOption(data);
					self.setCaret(caret);
					self.addItem(value);
					self.refreshOptions(triggerDropdown && self.settings.mode !== 'single');
					callback(data);
				});
		
				var output = setup.apply(this, [input, create]);
				if (typeof output !== 'undefined') {
					create(output);
				}
		
				return true;
			},
		
			/**
			 * Re-renders the selected item lists.
			 */
			refreshItems: function() {
				this.lastQuery = null;
		
				if (this.isSetup) {
					this.addItem(this.items);
				}
		
				this.refreshState();
				this.updateOriginalInput();
			},
		
			/**
			 * Updates all state-dependent attributes
			 * and CSS classes.
			 */
			refreshState: function() {
				this.refreshValidityState();
				this.refreshClasses();
			},
		
			/**
			 * Update the `required` attribute of both input and control input.
			 *
			 * The `required` property needs to be activated on the control input
			 * for the error to be displayed at the right place. `required` also
			 * needs to be temporarily deactivated on the input since the input is
			 * hidden and can't show errors.
			 */
			refreshValidityState: function() {
				if (!this.isRequired) return false;
		
				var invalid = !this.items.length;
		
				this.isInvalid = invalid;
				this.$control_input.prop('required', invalid);
				this.$input.prop('required', !invalid);
			},
		
			/**
			 * Updates all state-dependent CSS classes.
			 */
			refreshClasses: function() {
				var self     = this;
				var isFull   = self.isFull();
				var isLocked = self.isLocked;
		
				self.$wrapper
					.toggleClass('rtl', self.rtl);
		
				self.$control
					.toggleClass('focus', self.isFocused)
					.toggleClass('disabled', self.isDisabled)
					.toggleClass('required', self.isRequired)
					.toggleClass('invalid', self.isInvalid)
					.toggleClass('locked', isLocked)
					.toggleClass('full', isFull).toggleClass('not-full', !isFull)
					.toggleClass('input-active', self.isFocused && !self.isInputHidden)
					.toggleClass('dropdown-active', self.isOpen)
					.toggleClass('has-options', !$.isEmptyObject(self.options))
					.toggleClass('has-items', self.items.length > 0);
		
				self.$control_input.data('grow', !isFull && !isLocked);
			},
		
			/**
			 * Determines whether or not more items can be added
			 * to the control without exceeding the user-defined maximum.
			 *
			 * @returns {boolean}
			 */
			isFull: function() {
				return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems;
			},
		
			/**
			 * Refreshes the original <select> or <input>
			 * element to reflect the current state.
			 */
			updateOriginalInput: function(opts) {
				var i, n, options, label, self = this;
				opts = opts || {};
		
				if (self.tagType === TAG_SELECT) {
					options = [];
					for (i = 0, n = self.items.length; i < n; i++) {
						label = self.options[self.items[i]][self.settings.labelField] || '';
						options.push('<option value="' + escape_html(self.items[i]) + '" selected="selected">' + escape_html(label) + '</option>');
					}
					if (!options.length && !this.$input.attr('multiple')) {
						options.push('<option value="" selected="selected"></option>');
					}
					self.$input.html(options.join(''));
				} else {
					self.$input.val(self.getValue());
					self.$input.attr('value',self.$input.val());
				}
		
				if (self.isSetup) {
					if (!opts.silent) {
						self.trigger('change', self.$input.val());
					}
				}
			},
		
			/**
			 * Shows/hide the input placeholder depending
			 * on if there items in the list already.
			 */
			updatePlaceholder: function() {
				if (!this.settings.placeholder) return;
				var $input = this.$control_input;
		
				if (this.items.length) {
					$input.removeAttr('placeholder');
				} else {
					$input.attr('placeholder', this.settings.placeholder);
				}
				$input.triggerHandler('update', {force: true});
			},
		
			/**
			 * Shows the autocomplete dropdown containing
			 * the available options.
			 */
			open: function() {
				var self = this;
		
				if (self.isLocked || self.isOpen || (self.settings.mode === 'multi' && self.isFull())) return;
				self.focus();
				self.isOpen = true;
				self.refreshState();
				self.$dropdown.css({visibility: 'hidden', display: 'block'});
				self.positionDropdown();
				self.$dropdown.css({visibility: 'visible'});
				self.trigger('dropdown_open', self.$dropdown);
			},
		
			/**
			 * Closes the autocomplete dropdown menu.
			 */
			close: function() {
				var self = this;
				var trigger = self.isOpen;
		
				if (self.settings.mode === 'single' && self.items.length) {
					self.hideInput();
		
					// Do not trigger blur while inside a blur event,
					// this fixes some weird tabbing behavior in FF and IE.
					// See #1164
					if (!self.isBlurring) {
						self.$control_input.blur(); // close keyboard on iOS
					}
				}
		
				self.isOpen = false;
				self.$dropdown.hide();
				self.setActiveOption(null);
				self.refreshState();
		
				if (trigger) self.trigger('dropdown_close', self.$dropdown);
			},
		
			/**
			 * Calculates and applies the appropriate
			 * position of the dropdown.
			 */
			positionDropdown: function() {
				var $control = this.$control;
				var offset = this.settings.dropdownParent === 'body' ? $control.offset() : $control.position();
				offset.top += $control.outerHeight(true);
		
				this.$dropdown.css({
					width : $control[0].getBoundingClientRect().width,
					top   : offset.top,
					left  : offset.left
				});
			},
		
			/**
			 * Resets / clears all selected items
			 * from the control.
			 *
			 * @param {boolean} silent
			 */
			clear: function(silent) {
				var self = this;
		
				if (!self.items.length) return;
				self.$control.children(':not(input)').remove();
				self.items = [];
				self.lastQuery = null;
				self.setCaret(0);
				self.setActiveItem(null);
				self.updatePlaceholder();
				self.updateOriginalInput({silent: silent});
				self.refreshState();
				self.showInput();
				self.trigger('clear');
			},
		
			/**
			 * A helper method for inserting an element
			 * at the current caret position.
			 *
			 * @param {object} $el
			 */
			insertAtCaret: function($el) {
				var caret = Math.min(this.caretPos, this.items.length);
				var el = $el[0];
				var target = this.buffer || this.$control[0];
		
				if (caret === 0) {
					target.insertBefore(el, target.firstChild);
				} else {
					target.insertBefore(el, target.childNodes[caret]);
				}
		
				this.setCaret(caret + 1);
			},
		
			/**
			 * Removes the current selected item(s).
			 *
			 * @param {object} e (optional)
			 * @returns {boolean}
			 */
			deleteSelection: function(e) {
				var i, n, direction, selection, values, caret, option_select, $option_select, $tail;
				var self = this;
		
				direction = (e && e.keyCode === KEY_BACKSPACE) ? -1 : 1;
				selection = getSelection(self.$control_input[0]);
		
				if (self.$activeOption && !self.settings.hideSelected) {
					option_select = self.getAdjacentOption(self.$activeOption, -1).attr('data-value');
				}
		
				// determine items that will be removed
				values = [];
		
				if (self.$activeItems.length) {
					$tail = self.$control.children('.active:' + (direction > 0 ? 'last' : 'first'));
					caret = self.$control.children(':not(input)').index($tail);
					if (direction > 0) { caret++; }
		
					for (i = 0, n = self.$activeItems.length; i < n; i++) {
						values.push($(self.$activeItems[i]).attr('data-value'));
					}
					if (e) {
						e.preventDefault();
						e.stopPropagation();
					}
				} else if ((self.isFocused || self.settings.mode === 'single') && self.items.length) {
					if (direction < 0 && selection.start === 0 && selection.length === 0) {
						values.push(self.items[self.caretPos - 1]);
					} else if (direction > 0 && selection.start === self.$control_input.val().length) {
						values.push(self.items[self.caretPos]);
					}
				}
		
				// allow the callback to abort
				if (!values.length || (typeof self.settings.onDelete === 'function' && self.settings.onDelete.apply(self, [values]) === false)) {
					return false;
				}
		
				// perform removal
				if (typeof caret !== 'undefined') {
					self.setCaret(caret);
				}
				while (values.length) {
					self.removeItem(values.pop());
				}
		
				self.showInput();
				self.positionDropdown();
				self.refreshOptions(true);
		
				// select previous option
				if (option_select) {
					$option_select = self.getOption(option_select);
					if ($option_select.length) {
						self.setActiveOption($option_select);
					}
				}
		
				return true;
			},
		
			/**
			 * Selects the previous / next item (depending
			 * on the `direction` argument).
			 *
			 * > 0 - right
			 * < 0 - left
			 *
			 * @param {int} direction
			 * @param {object} e (optional)
			 */
			advanceSelection: function(direction, e) {
				var tail, selection, idx, valueLength, cursorAtEdge, $tail;
				var self = this;
		
				if (direction === 0) return;
				if (self.rtl) direction *= -1;
		
				tail = direction > 0 ? 'last' : 'first';
				selection = getSelection(self.$control_input[0]);
		
				if (self.isFocused && !self.isInputHidden) {
					valueLength = self.$control_input.val().length;
					cursorAtEdge = direction < 0
						? selection.start === 0 && selection.length === 0
						: selection.start === valueLength;
		
					if (cursorAtEdge && !valueLength) {
						self.advanceCaret(direction, e);
					}
				} else {
					$tail = self.$control.children('.active:' + tail);
					if ($tail.length) {
						idx = self.$control.children(':not(input)').index($tail);
						self.setActiveItem(null);
						self.setCaret(direction > 0 ? idx + 1 : idx);
					}
				}
			},
		
			/**
			 * Moves the caret left / right.
			 *
			 * @param {int} direction
			 * @param {object} e (optional)
			 */
			advanceCaret: function(direction, e) {
				var self = this, fn, $adj;
		
				if (direction === 0) return;
		
				fn = direction > 0 ? 'next' : 'prev';
				if (self.isShiftDown) {
					$adj = self.$control_input[fn]();
					if ($adj.length) {
						self.hideInput();
						self.setActiveItem($adj);
						e && e.preventDefault();
					}
				} else {
					self.setCaret(self.caretPos + direction);
				}
			},
		
			/**
			 * Moves the caret to the specified index.
			 *
			 * @param {int} i
			 */
			setCaret: function(i) {
				var self = this;
		
				if (self.settings.mode === 'single') {
					i = self.items.length;
				} else {
					i = Math.max(0, Math.min(self.items.length, i));
				}
		
				if(!self.isPending) {
					// the input must be moved by leaving it in place and moving the
					// siblings, due to the fact that focus cannot be restored once lost
					// on mobile webkit devices
					var j, n, fn, $children, $child;
					$children = self.$control.children(':not(input)');
					for (j = 0, n = $children.length; j < n; j++) {
						$child = $($children[j]).detach();
						if (j <  i) {
							self.$control_input.before($child);
						} else {
							self.$control.append($child);
						}
					}
				}
		
				self.caretPos = i;
			},
		
			/**
			 * Disables user input on the control. Used while
			 * items are being asynchronously created.
			 */
			lock: function() {
				this.close();
				this.isLocked = true;
				this.refreshState();
			},
		
			/**
			 * Re-enables user input on the control.
			 */
			unlock: function() {
				this.isLocked = false;
				this.refreshState();
			},
		
			/**
			 * Disables user input on the control completely.
			 * While disabled, it cannot receive focus.
			 */
			disable: function() {
				var self = this;
				self.$input.prop('disabled', true);
				self.$control_input.prop('disabled', true).prop('tabindex', -1);
				self.isDisabled = true;
				self.lock();
			},
		
			/**
			 * Enables the control so that it can respond
			 * to focus and user input.
			 */
			enable: function() {
				var self = this;
				self.$input.prop('disabled', false);
				self.$control_input.prop('disabled', false).prop('tabindex', self.tabIndex);
				self.isDisabled = false;
				self.unlock();
			},
		
			/**
			 * Completely destroys the control and
			 * unbinds all event listeners so that it can
			 * be garbage collected.
			 */
			destroy: function() {
				var self = this;
				var eventNS = self.eventNS;
				var revertSettings = self.revertSettings;
		
				self.trigger('destroy');
				self.off();
				self.$wrapper.remove();
				self.$dropdown.remove();
		
				self.$input
					.html('')
					.append(revertSettings.$children)
					.removeAttr('tabindex')
					.removeClass('selectized')
					.attr({tabindex: revertSettings.tabindex})
					.show();
		
				self.$control_input.removeData('grow');
				self.$input.removeData('selectize');
		
				if (--Selectize.count == 0 && Selectize.$testInput) {
					Selectize.$testInput.remove();
					Selectize.$testInput = undefined;
				}
		
				$(window).off(eventNS);
				$(document).off(eventNS);
				$(document.body).off(eventNS);
		
				delete self.$input[0].selectize;
			},
		
			/**
			 * A helper method for rendering "item" and
			 * "option" templates, given the data.
			 *
			 * @param {string} templateName
			 * @param {object} data
			 * @returns {string}
			 */
			render: function(templateName, data) {
				var value, id, label;
				var html = '';
				var cache = false;
				var self = this;
				var regex_tag = /^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
		
				if (templateName === 'option' || templateName === 'item') {
					value = hash_key(data[self.settings.valueField]);
					cache = !!value;
				}
		
				// pull markup from cache if it exists
				if (cache) {
					if (!isset(self.renderCache[templateName])) {
						self.renderCache[templateName] = {};
					}
					if (self.renderCache[templateName].hasOwnProperty(value)) {
						return self.renderCache[templateName][value];
					}
				}
		
				// render markup
				html = $(self.settings.render[templateName].apply(this, [data, escape_html]));
		
				// add mandatory attributes
				if (templateName === 'option' || templateName === 'option_create') {
					if (!data[self.settings.disabledField]) {
						html.attr('data-selectable', '');
					}
				}
				else if (templateName === 'optgroup') {
					id = data[self.settings.optgroupValueField] || '';
					html.attr('data-group', id);
					if(data[self.settings.disabledField]) {
						html.attr('data-disabled', '');
					}
				}
				if (templateName === 'option' || templateName === 'item') {
					html.attr('data-value', value || '');
				}
		
				// update cache
				if (cache) {
					self.renderCache[templateName][value] = html[0];
				}
		
				return html[0];
			},
		
			/**
			 * Clears the render cache for a template. If
			 * no template is given, clears all render
			 * caches.
			 *
			 * @param {string} templateName
			 */
			clearCache: function(templateName) {
				var self = this;
				if (typeof templateName === 'undefined') {
					self.renderCache = {};
				} else {
					delete self.renderCache[templateName];
				}
			},
		
			/**
			 * Determines whether or not to display the
			 * create item prompt, given a user input.
			 *
			 * @param {string} input
			 * @return {boolean}
			 */
			canCreate: function(input) {
				var self = this;
				if (!self.settings.create) return false;
				var filter = self.settings.createFilter;
				return input.length
					&& (typeof filter !== 'function' || filter.apply(self, [input]))
					&& (typeof filter !== 'string' || new RegExp(filter).test(input))
					&& (!(filter instanceof RegExp) || filter.test(input));
			}
		
		});
		
		
		Selectize.count = 0;
		Selectize.defaults = {
			options: [],
			optgroups: [],
		
			plugins: [],
			delimiter: ',',
			splitOn: null, // regexp or string for splitting up values from a paste command
			persist: true,
			diacritics: true,
			create: false,
			createOnBlur: false,
			createFilter: null,
			highlight: true,
			openOnFocus: true,
			maxOptions: 1000,
			maxItems: null,
			hideSelected: null,
			addPrecedence: false,
			selectOnTab: false,
			preload: false,
			allowEmptyOption: false,
			closeAfterSelect: false,
		
			scrollDuration: 60,
			loadThrottle: 300,
			loadingClass: 'loading',
		
			dataAttr: 'data-data',
			optgroupField: 'optgroup',
			valueField: 'value',
			labelField: 'text',
			disabledField: 'disabled',
			optgroupLabelField: 'label',
			optgroupValueField: 'value',
			lockOptgroupOrder: false,
		
			sortField: '$order',
			searchField: ['text'],
			searchConjunction: 'and',
		
			mode: null,
			wrapperClass: 'selectize-control',
			inputClass: 'selectize-input',
			dropdownClass: 'selectize-dropdown',
			dropdownContentClass: 'selectize-dropdown-content',
		
			dropdownParent: null,
		
			copyClassesToDropdown: true,
		
			/*
			load                 : null, // function(query, callback) { ... }
			score                : null, // function(search) { ... }
			onInitialize         : null, // function() { ... }
			onChange             : null, // function(value) { ... }
			onItemAdd            : null, // function(value, $item) { ... }
			onItemRemove         : null, // function(value) { ... }
			onClear              : null, // function() { ... }
			onOptionAdd          : null, // function(value, data) { ... }
			onOptionRemove       : null, // function(value) { ... }
			onOptionClear        : null, // function() { ... }
			onOptionGroupAdd     : null, // function(id, data) { ... }
			onOptionGroupRemove  : null, // function(id) { ... }
			onOptionGroupClear   : null, // function() { ... }
			onDropdownOpen       : null, // function($dropdown) { ... }
			onDropdownClose      : null, // function($dropdown) { ... }
			onType               : null, // function(str) { ... }
			onDelete             : null, // function(values) { ... }
			*/
		
			render: {
				/*
				item: null,
				optgroup: null,
				optgroup_header: null,
				option: null,
				option_create: null
				*/
			}
		};
		
		
		$.fn.selectize = function(settings_user) {
			var defaults             = $.fn.selectize.defaults;
			var settings             = $.extend({}, defaults, settings_user);
			var attr_data            = settings.dataAttr;
			var field_label          = settings.labelField;
			var field_value          = settings.valueField;
			var field_disabled       = settings.disabledField;
			var field_optgroup       = settings.optgroupField;
			var field_optgroup_label = settings.optgroupLabelField;
			var field_optgroup_value = settings.optgroupValueField;
		
			/**
			 * Initializes selectize from a <input type="text"> element.
			 *
			 * @param {object} $input
			 * @param {object} settings_element
			 */
			var init_textbox = function($input, settings_element) {
				var i, n, values, option;
		
				var data_raw = $input.attr(attr_data);
		
				if (!data_raw) {
					var value = $.trim($input.val() || '');
					if (!settings.allowEmptyOption && !value.length) return;
					values = value.split(settings.delimiter);
					for (i = 0, n = values.length; i < n; i++) {
						option = {};
						option[field_label] = values[i];
						option[field_value] = values[i];
						settings_element.options.push(option);
					}
					settings_element.items = values;
				} else {
					settings_element.options = JSON.parse(data_raw);
					for (i = 0, n = settings_element.options.length; i < n; i++) {
						settings_element.items.push(settings_element.options[i][field_value]);
					}
				}
			};
		
			/**
			 * Initializes selectize from a <select> element.
			 *
			 * @param {object} $input
			 * @param {object} settings_element
			 */
			var init_select = function($input, settings_element) {
				var i, n, tagName, $children, order = 0;
				var options = settings_element.options;
				var optionsMap = {};
		
				var readData = function($el) {
					var data = attr_data && $el.attr(attr_data);
					if (typeof data === 'string' && data.length) {
						return JSON.parse(data);
					}
					return null;
				};
		
				var addOption = function($option, group) {
					$option = $($option);
		
					var value = hash_key($option.val());
					if (!value && !settings.allowEmptyOption) return;
		
					// if the option already exists, it's probably been
					// duplicated in another optgroup. in this case, push
					// the current group to the "optgroup" property on the
					// existing option so that it's rendered in both places.
					if (optionsMap.hasOwnProperty(value)) {
						if (group) {
							var arr = optionsMap[value][field_optgroup];
							if (!arr) {
								optionsMap[value][field_optgroup] = group;
							} else if (!$.isArray(arr)) {
								optionsMap[value][field_optgroup] = [arr, group];
							} else {
								arr.push(group);
							}
						}
						return;
					}
		
					var option             = readData($option) || {};
					option[field_label]    = option[field_label] || $option.text();
					option[field_value]    = option[field_value] || value;
					option[field_disabled] = option[field_disabled] || $option.prop('disabled');
					option[field_optgroup] = option[field_optgroup] || group;
		
					optionsMap[value] = option;
					options.push(option);
		
					if ($option.is(':selected')) {
						settings_element.items.push(value);
					}
				};
		
				var addGroup = function($optgroup) {
					var i, n, id, optgroup, $options;
		
					$optgroup = $($optgroup);
					id = $optgroup.attr('label');
		
					if (id) {
						optgroup = readData($optgroup) || {};
						optgroup[field_optgroup_label] = id;
						optgroup[field_optgroup_value] = id;
						optgroup[field_disabled] = $optgroup.prop('disabled');
						settings_element.optgroups.push(optgroup);
					}
		
					$options = $('option', $optgroup);
					for (i = 0, n = $options.length; i < n; i++) {
						addOption($options[i], id);
					}
				};
		
				settings_element.maxItems = $input.attr('multiple') ? null : 1;
		
				$children = $input.children();
				for (i = 0, n = $children.length; i < n; i++) {
					tagName = $children[i].tagName.toLowerCase();
					if (tagName === 'optgroup') {
						addGroup($children[i]);
					} else if (tagName === 'option') {
						addOption($children[i]);
					}
				}
			};
		
			return this.each(function() {
				if (this.selectize) return;
		
				var instance;
				var $input = $(this);
				var tag_name = this.tagName.toLowerCase();
				var placeholder = $input.attr('placeholder') || $input.attr('data-placeholder');
				if (!placeholder && !settings.allowEmptyOption) {
					placeholder = $input.children('option[value=""]').text();
				}
		
				var settings_element = {
					'placeholder' : placeholder,
					'options'     : [],
					'optgroups'   : [],
					'items'       : []
				};
		
				if (tag_name === 'select') {
					init_select($input, settings_element);
				} else {
					init_textbox($input, settings_element);
				}
		
				instance = new Selectize($input, $.extend(true, {}, defaults, settings_element, settings_user));
			});
		};
		
		$.fn.selectize.defaults = Selectize.defaults;
		$.fn.selectize.support = {
			validity: SUPPORTS_VALIDITY_API
		};
		
		
		Selectize.define('drag_drop', function(options) {
			if (!$.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
			if (this.settings.mode !== 'multi') return;
			var self = this;
		
			self.lock = (function() {
				var original = self.lock;
				return function() {
					var sortable = self.$control.data('sortable');
					if (sortable) sortable.disable();
					return original.apply(self, arguments);
				};
			})();
		
			self.unlock = (function() {
				var original = self.unlock;
				return function() {
					var sortable = self.$control.data('sortable');
					if (sortable) sortable.enable();
					return original.apply(self, arguments);
				};
			})();
		
			self.setup = (function() {
				var original = self.setup;
				return function() {
					original.apply(this, arguments);
		
					var $control = self.$control.sortable({
						items: '[data-value]',
						forcePlaceholderSize: true,
						disabled: self.isLocked,
						start: function(e, ui) {
							ui.placeholder.css('width', ui.helper.css('width'));
							$control.css({overflow: 'visible'});
						},
						stop: function() {
							$control.css({overflow: 'hidden'});
							var active = self.$activeItems ? self.$activeItems.slice() : null;
							var values = [];
							$control.children('[data-value]').each(function() {
								values.push($(this).attr('data-value'));
							});
							self.setValue(values);
							self.setActiveItem(active);
						}
					});
				};
			})();
		
		});
		
		Selectize.define('dropdown_header', function(options) {
			var self = this;
		
			options = $.extend({
				title         : 'Untitled',
				headerClass   : 'selectize-dropdown-header',
				titleRowClass : 'selectize-dropdown-header-title',
				labelClass    : 'selectize-dropdown-header-label',
				closeClass    : 'selectize-dropdown-header-close',
		
				html: function(data) {
					return (
						'<div class="' + data.headerClass + '">' +
							'<div class="' + data.titleRowClass + '">' +
								'<span class="' + data.labelClass + '">' + data.title + '</span>' +
								'<a href="javascript:void(0)" class="' + data.closeClass + '">&times;</a>' +
							'</div>' +
						'</div>'
					);
				}
			}, options);
		
			self.setup = (function() {
				var original = self.setup;
				return function() {
					original.apply(self, arguments);
					self.$dropdown_header = $(options.html(options));
					self.$dropdown.prepend(self.$dropdown_header);
				};
			})();
		
		});
		
		Selectize.define('optgroup_columns', function(options) {
			var self = this;
		
			options = $.extend({
				equalizeWidth  : true,
				equalizeHeight : true
			}, options);
		
			this.getAdjacentOption = function($option, direction) {
				var $options = $option.closest('[data-group]').find('[data-selectable]');
				var index    = $options.index($option) + direction;
		
				return index >= 0 && index < $options.length ? $options.eq(index) : $();
			};
		
			this.onKeyDown = (function() {
				var original = self.onKeyDown;
				return function(e) {
					var index, $option, $options, $optgroup;
		
					if (this.isOpen && (e.keyCode === KEY_LEFT || e.keyCode === KEY_RIGHT)) {
						self.ignoreHover = true;
						$optgroup = this.$activeOption.closest('[data-group]');
						index = $optgroup.find('[data-selectable]').index(this.$activeOption);
		
						if(e.keyCode === KEY_LEFT) {
							$optgroup = $optgroup.prev('[data-group]');
						} else {
							$optgroup = $optgroup.next('[data-group]');
						}
		
						$options = $optgroup.find('[data-selectable]');
						$option  = $options.eq(Math.min($options.length - 1, index));
						if ($option.length) {
							this.setActiveOption($option);
						}
						return;
					}
		
					return original.apply(this, arguments);
				};
			})();
		
			var getScrollbarWidth = function() {
				var div;
				var width = getScrollbarWidth.width;
				var doc = document;
		
				if (typeof width === 'undefined') {
					div = doc.createElement('div');
					div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
					div = div.firstChild;
					doc.body.appendChild(div);
					width = getScrollbarWidth.width = div.offsetWidth - div.clientWidth;
					doc.body.removeChild(div);
				}
				return width;
			};
		
			var equalizeSizes = function() {
				var i, n, height_max, width, width_last, width_parent, $optgroups;
		
				$optgroups = $('[data-group]', self.$dropdown_content);
				n = $optgroups.length;
				if (!n || !self.$dropdown_content.width()) return;
		
				if (options.equalizeHeight) {
					height_max = 0;
					for (i = 0; i < n; i++) {
						height_max = Math.max(height_max, $optgroups.eq(i).height());
					}
					$optgroups.css({height: height_max});
				}
		
				if (options.equalizeWidth) {
					width_parent = self.$dropdown_content.innerWidth() - getScrollbarWidth();
					width = Math.round(width_parent / n);
					$optgroups.css({width: width});
					if (n > 1) {
						width_last = width_parent - width * (n - 1);
						$optgroups.eq(n - 1).css({width: width_last});
					}
				}
			};
		
			if (options.equalizeHeight || options.equalizeWidth) {
				hook.after(this, 'positionDropdown', equalizeSizes);
				hook.after(this, 'refreshOptions', equalizeSizes);
			}
		
		
		});
		
		Selectize.define('remove_button', function(options) {
			options = $.extend({
					label     : '&times;',
					title     : 'Remove',
					className : 'remove',
					append    : true
				}, options);
		
				var singleClose = function(thisRef, options) {
		
					options.className = 'remove-single';
		
					var self = thisRef;
					var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';
		
					/**
					 * Appends an element as a child (with raw HTML).
					 *
					 * @param {string} html_container
					 * @param {string} html_element
					 * @return {string}
					 */
					var append = function(html_container, html_element) {
						return $('<span>').append(html_container)
							.append(html_element);
					};
		
					thisRef.setup = (function() {
						var original = self.setup;
						return function() {
							// override the item rendering method to add the button to each
							if (options.append) {
								var id = $(self.$input.context).attr('id');
								var selectizer = $('#'+id);
		
								var render_item = self.settings.render.item;
								self.settings.render.item = function(data) {
									return append(render_item.apply(thisRef, arguments), html);
								};
							}
		
							original.apply(thisRef, arguments);
		
							// add event listener
							thisRef.$control.on('click', '.' + options.className, function(e) {
								e.preventDefault();
								if (self.isLocked) return;
		
								self.clear();
							});
		
						};
					})();
				};
		
				var multiClose = function(thisRef, options) {
		
					var self = thisRef;
					var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';
		
					/**
					 * Appends an element as a child (with raw HTML).
					 *
					 * @param {string} html_container
					 * @param {string} html_element
					 * @return {string}
					 */
					var append = function(html_container, html_element) {
						var pos = html_container.search(/(<\/[^>]+>\s*)$/);
						return html_container.substring(0, pos) + html_element + html_container.substring(pos);
					};
		
					thisRef.setup = (function() {
						var original = self.setup;
						return function() {
							// override the item rendering method to add the button to each
							if (options.append) {
								var render_item = self.settings.render.item;
								self.settings.render.item = function(data) {
									return append(render_item.apply(thisRef, arguments), html);
								};
							}
		
							original.apply(thisRef, arguments);
		
							// add event listener
							thisRef.$control.on('click', '.' + options.className, function(e) {
								e.preventDefault();
								if (self.isLocked) return;
		
								var $item = $(e.currentTarget).parent();
								self.setActiveItem($item);
								if (self.deleteSelection()) {
									self.setCaret(self.items.length);
								}
							});
		
						};
					})();
				};
		
				if (this.settings.mode === 'single') {
					singleClose(this, options);
					return;
				} else {
					multiClose(this, options);
				}
		});
		
		
		Selectize.define('restore_on_backspace', function(options) {
			var self = this;
		
			options.text = options.text || function(option) {
				return option[this.settings.labelField];
			};
		
			this.onKeyDown = (function() {
				var original = self.onKeyDown;
				return function(e) {
					var index, option;
					if (e.keyCode === KEY_BACKSPACE && this.$control_input.val() === '' && !this.$activeItems.length) {
						index = this.caretPos - 1;
						if (index >= 0 && index < this.items.length) {
							option = this.options[this.items[index]];
							if (this.deleteSelection(e)) {
								this.setTextboxValue(options.text.apply(this, [option]));
								this.refreshOptions(true);
							}
							e.preventDefault();
							return;
						}
					}
					return original.apply(this, arguments);
				};
			})();
		});
		

		return Selectize;
	}));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {/**
	 * sifter.js
	 * Copyright (c) 2013 Brian Reavis & contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 * @author Brian Reavis <brian@thirdroute.com>
	 */

	(function(root, factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			root.Sifter = factory();
		}
	}(this, function() {

		/**
		 * Textually searches arrays and hashes of objects
		 * by property (or multiple properties). Designed
		 * specifically for autocomplete.
		 *
		 * @constructor
		 * @param {array|object} items
		 * @param {object} items
		 */
		var Sifter = function(items, settings) {
			this.items = items;
			this.settings = settings || {diacritics: true};
		};

		/**
		 * Splits a search string into an array of individual
		 * regexps to be used to match results.
		 *
		 * @param {string} query
		 * @returns {array}
		 */
		Sifter.prototype.tokenize = function(query) {
			query = trim(String(query || '').toLowerCase());
			if (!query || !query.length) return [];

			var i, n, regex, letter;
			var tokens = [];
			var words = query.split(/ +/);

			for (i = 0, n = words.length; i < n; i++) {
				regex = escape_regex(words[i]);
				if (this.settings.diacritics) {
					for (letter in DIACRITICS) {
						if (DIACRITICS.hasOwnProperty(letter)) {
							regex = regex.replace(new RegExp(letter, 'g'), DIACRITICS[letter]);
						}
					}
				}
				tokens.push({
					string : words[i],
					regex  : new RegExp(regex, 'i')
				});
			}

			return tokens;
		};

		/**
		 * Iterates over arrays and hashes.
		 *
		 * ```
		 * this.iterator(this.items, function(item, id) {
		 *    // invoked for each item
		 * });
		 * ```
		 *
		 * @param {array|object} object
		 */
		Sifter.prototype.iterator = function(object, callback) {
			var iterator;
			if (is_array(object)) {
				iterator = Array.prototype.forEach || function(callback) {
					for (var i = 0, n = this.length; i < n; i++) {
						callback(this[i], i, this);
					}
				};
			} else {
				iterator = function(callback) {
					for (var key in this) {
						if (this.hasOwnProperty(key)) {
							callback(this[key], key, this);
						}
					}
				};
			}

			iterator.apply(object, [callback]);
		};

		/**
		 * Returns a function to be used to score individual results.
		 *
		 * Good matches will have a higher score than poor matches.
		 * If an item is not a match, 0 will be returned by the function.
		 *
		 * @param {object|string} search
		 * @param {object} options (optional)
		 * @returns {function}
		 */
		Sifter.prototype.getScoreFunction = function(search, options) {
			var self, fields, tokens, token_count, nesting;

			self        = this;
			search      = self.prepareSearch(search, options);
			tokens      = search.tokens;
			fields      = search.options.fields;
			token_count = tokens.length;
			nesting     = search.options.nesting;

			/**
			 * Calculates how close of a match the
			 * given value is against a search token.
			 *
			 * @param {mixed} value
			 * @param {object} token
			 * @return {number}
			 */
			var scoreValue = function(value, token) {
				var score, pos;

				if (!value) return 0;
				value = String(value || '');
				pos = value.search(token.regex);
				if (pos === -1) return 0;
				score = token.string.length / value.length;
				if (pos === 0) score += 0.5;
				return score;
			};

			/**
			 * Calculates the score of an object
			 * against the search query.
			 *
			 * @param {object} token
			 * @param {object} data
			 * @return {number}
			 */
			var scoreObject = (function() {
				var field_count = fields.length;
				if (!field_count) {
					return function() { return 0; };
				}
				if (field_count === 1) {
					return function(token, data) {
						return scoreValue(getattr(data, fields[0], nesting), token);
					};
				}
				return function(token, data) {
					for (var i = 0, sum = 0; i < field_count; i++) {
						sum += scoreValue(getattr(data, fields[i], nesting), token);
					}
					return sum / field_count;
				};
			})();

			if (!token_count) {
				return function() { return 0; };
			}
			if (token_count === 1) {
				return function(data) {
					return scoreObject(tokens[0], data);
				};
			}

			if (search.options.conjunction === 'and') {
				return function(data) {
					var score;
					for (var i = 0, sum = 0; i < token_count; i++) {
						score = scoreObject(tokens[i], data);
						if (score <= 0) return 0;
						sum += score;
					}
					return sum / token_count;
				};
			} else {
				return function(data) {
					for (var i = 0, sum = 0; i < token_count; i++) {
						sum += scoreObject(tokens[i], data);
					}
					return sum / token_count;
				};
			}
		};

		/**
		 * Returns a function that can be used to compare two
		 * results, for sorting purposes. If no sorting should
		 * be performed, `null` will be returned.
		 *
		 * @param {string|object} search
		 * @param {object} options
		 * @return function(a,b)
		 */
		Sifter.prototype.getSortFunction = function(search, options) {
			var i, n, self, field, fields, fields_count, multiplier, multipliers, get_field, implicit_score, sort;

			self   = this;
			search = self.prepareSearch(search, options);
			sort   = (!search.query && options.sort_empty) || options.sort;

			/**
			 * Fetches the specified sort field value
			 * from a search result item.
			 *
			 * @param  {string} name
			 * @param  {object} result
			 * @return {mixed}
			 */
			get_field = function(name, result) {
				if (name === '$score') return result.score;
				return getattr(self.items[result.id], name, options.nesting);
			};

			// parse options
			fields = [];
			if (sort) {
				for (i = 0, n = sort.length; i < n; i++) {
					if (search.query || sort[i].field !== '$score') {
						fields.push(sort[i]);
					}
				}
			}

			// the "$score" field is implied to be the primary
			// sort field, unless it's manually specified
			if (search.query) {
				implicit_score = true;
				for (i = 0, n = fields.length; i < n; i++) {
					if (fields[i].field === '$score') {
						implicit_score = false;
						break;
					}
				}
				if (implicit_score) {
					fields.unshift({field: '$score', direction: 'desc'});
				}
			} else {
				for (i = 0, n = fields.length; i < n; i++) {
					if (fields[i].field === '$score') {
						fields.splice(i, 1);
						break;
					}
				}
			}

			multipliers = [];
			for (i = 0, n = fields.length; i < n; i++) {
				multipliers.push(fields[i].direction === 'desc' ? -1 : 1);
			}

			// build function
			fields_count = fields.length;
			if (!fields_count) {
				return null;
			} else if (fields_count === 1) {
				field = fields[0].field;
				multiplier = multipliers[0];
				return function(a, b) {
					return multiplier * cmp(
						get_field(field, a),
						get_field(field, b)
					);
				};
			} else {
				return function(a, b) {
					var i, result, a_value, b_value, field;
					for (i = 0; i < fields_count; i++) {
						field = fields[i].field;
						result = multipliers[i] * cmp(
							get_field(field, a),
							get_field(field, b)
						);
						if (result) return result;
					}
					return 0;
				};
			}
		};

		/**
		 * Parses a search query and returns an object
		 * with tokens and fields ready to be populated
		 * with results.
		 *
		 * @param {string} query
		 * @param {object} options
		 * @returns {object}
		 */
		Sifter.prototype.prepareSearch = function(query, options) {
			if (typeof query === 'object') return query;

			options = extend({}, options);

			var option_fields     = options.fields;
			var option_sort       = options.sort;
			var option_sort_empty = options.sort_empty;

			if (option_fields && !is_array(option_fields)) options.fields = [option_fields];
			if (option_sort && !is_array(option_sort)) options.sort = [option_sort];
			if (option_sort_empty && !is_array(option_sort_empty)) options.sort_empty = [option_sort_empty];

			return {
				options : options,
				query   : String(query || '').toLowerCase(),
				tokens  : this.tokenize(query),
				total   : 0,
				items   : []
			};
		};

		/**
		 * Searches through all items and returns a sorted array of matches.
		 *
		 * The `options` parameter can contain:
		 *
		 *   - fields {string|array}
		 *   - sort {array}
		 *   - score {function}
		 *   - filter {bool}
		 *   - limit {integer}
		 *
		 * Returns an object containing:
		 *
		 *   - options {object}
		 *   - query {string}
		 *   - tokens {array}
		 *   - total {int}
		 *   - items {array}
		 *
		 * @param {string} query
		 * @param {object} options
		 * @returns {object}
		 */
		Sifter.prototype.search = function(query, options) {
			var self = this, value, score, search, calculateScore;
			var fn_sort;
			var fn_score;

			search  = this.prepareSearch(query, options);
			options = search.options;
			query   = search.query;

			// generate result scoring function
			fn_score = options.score || self.getScoreFunction(search);

			// perform search and sort
			if (query.length) {
				self.iterator(self.items, function(item, id) {
					score = fn_score(item);
					if (options.filter === false || score > 0) {
						search.items.push({'score': score, 'id': id});
					}
				});
			} else {
				self.iterator(self.items, function(item, id) {
					search.items.push({'score': 1, 'id': id});
				});
			}

			fn_sort = self.getSortFunction(search, options);
			if (fn_sort) search.items.sort(fn_sort);

			// apply limits
			search.total = search.items.length;
			if (typeof options.limit === 'number') {
				search.items = search.items.slice(0, options.limit);
			}

			return search;
		};

		// utilities
		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

		var cmp = function(a, b) {
			if (typeof a === 'number' && typeof b === 'number') {
				return a > b ? 1 : (a < b ? -1 : 0);
			}
			a = asciifold(String(a || ''));
			b = asciifold(String(b || ''));
			if (a > b) return 1;
			if (b > a) return -1;
			return 0;
		};

		var extend = function(a, b) {
			var i, n, k, object;
			for (i = 1, n = arguments.length; i < n; i++) {
				object = arguments[i];
				if (!object) continue;
				for (k in object) {
					if (object.hasOwnProperty(k)) {
						a[k] = object[k];
					}
				}
			}
			return a;
		};

		/**
		 * A property getter resolving dot-notation
		 * @param  {Object}  obj     The root object to fetch property on
		 * @param  {String}  name    The optionally dotted property name to fetch
		 * @param  {Boolean} nesting Handle nesting or not
		 * @return {Object}          The resolved property value
		 */
		var getattr = function(obj, name, nesting) {
		    if (!obj || !name) return;
		    if (!nesting) return obj[name];
		    var names = name.split(".");
		    while(names.length && (obj = obj[names.shift()]));
		    return obj;
		};

		var trim = function(str) {
			return (str + '').replace(/^\s+|\s+$|/g, '');
		};

		var escape_regex = function(str) {
			return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
		};

		var is_array = Array.isArray || (typeof $ !== 'undefined' && $.isArray) || function(object) {
			return Object.prototype.toString.call(object) === '[object Array]';
		};

		var DIACRITICS = {
			'a': '[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]',
			'b': '[b␢βΒB฿𐌁ᛒ]',
			'c': '[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]',
			'd': '[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]',
			'e': '[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]',
			'f': '[fƑƒḞḟ]',
			'g': '[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]',
			'h': '[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]',
			'i': '[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]',
			'j': '[jȷĴĵɈɉʝɟʲ]',
			'k': '[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]',
			'l': '[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]',
			'n': '[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]',
			'o': '[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]',
			'p': '[pṔṕṖṗⱣᵽƤƥᵱ]',
			'q': '[qꝖꝗʠɊɋꝘꝙq̃]',
			'r': '[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]',
			's': '[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]',
			't': '[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]',
			'u': '[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]',
			'v': '[vṼṽṾṿƲʋꝞꝟⱱʋ]',
			'w': '[wẂẃẀẁŴŵẄẅẆẇẈẉ]',
			'x': '[xẌẍẊẋχ]',
			'y': '[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]',
			'z': '[zŹźẐẑŽžŻżẒẓẔẕƵƶ]'
		};

		var asciifold = (function() {
			var i, n, k, chunk;
			var foreignletters = '';
			var lookup = {};
			for (k in DIACRITICS) {
				if (DIACRITICS.hasOwnProperty(k)) {
					chunk = DIACRITICS[k].substring(2, DIACRITICS[k].length - 1);
					foreignletters += chunk;
					for (i = 0, n = chunk.length; i < n; i++) {
						lookup[chunk.charAt(i)] = k;
					}
				}
			}
			var regexp = new RegExp('[' +  foreignletters + ']', 'g');
			return function(str) {
				return str.replace(regexp, function(foreignletter) {
					return lookup[foreignletter];
				}).toLowerCase();
			};
		})();


		// export
		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

		return Sifter;
	}));


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * microplugin.js
	 * Copyright (c) 2013 Brian Reavis & contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 * @author Brian Reavis <brian@thirdroute.com>
	 */

	(function(root, factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			root.MicroPlugin = factory();
		}
	}(this, function() {
		var MicroPlugin = {};

		MicroPlugin.mixin = function(Interface) {
			Interface.plugins = {};

			/**
			 * Initializes the listed plugins (with options).
			 * Acceptable formats:
			 *
			 * List (without options):
			 *   ['a', 'b', 'c']
			 *
			 * List (with options):
			 *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]
			 *
			 * Hash (with options):
			 *   {'a': { ... }, 'b': { ... }, 'c': { ... }}
			 *
			 * @param {mixed} plugins
			 */
			Interface.prototype.initializePlugins = function(plugins) {
				var i, n, key;
				var self  = this;
				var queue = [];

				self.plugins = {
					names     : [],
					settings  : {},
					requested : {},
					loaded    : {}
				};

				if (utils.isArray(plugins)) {
					for (i = 0, n = plugins.length; i < n; i++) {
						if (typeof plugins[i] === 'string') {
							queue.push(plugins[i]);
						} else {
							self.plugins.settings[plugins[i].name] = plugins[i].options;
							queue.push(plugins[i].name);
						}
					}
				} else if (plugins) {
					for (key in plugins) {
						if (plugins.hasOwnProperty(key)) {
							self.plugins.settings[key] = plugins[key];
							queue.push(key);
						}
					}
				}

				while (queue.length) {
					self.require(queue.shift());
				}
			};

			Interface.prototype.loadPlugin = function(name) {
				var self    = this;
				var plugins = self.plugins;
				var plugin  = Interface.plugins[name];

				if (!Interface.plugins.hasOwnProperty(name)) {
					throw new Error('Unable to find "' +  name + '" plugin');
				}

				plugins.requested[name] = true;
				plugins.loaded[name] = plugin.fn.apply(self, [self.plugins.settings[name] || {}]);
				plugins.names.push(name);
			};

			/**
			 * Initializes a plugin.
			 *
			 * @param {string} name
			 */
			Interface.prototype.require = function(name) {
				var self = this;
				var plugins = self.plugins;

				if (!self.plugins.loaded.hasOwnProperty(name)) {
					if (plugins.requested[name]) {
						throw new Error('Plugin has circular dependency ("' + name + '")');
					}
					self.loadPlugin(name);
				}

				return plugins.loaded[name];
			};

			/**
			 * Registers a plugin.
			 *
			 * @param {string} name
			 * @param {function} fn
			 */
			Interface.define = function(name, fn) {
				Interface.plugins[name] = {
					'name' : name,
					'fn'   : fn
				};
			};
		};

		var utils = {
			isArray: Array.isArray || function(vArg) {
				return Object.prototype.toString.call(vArg) === '[object Array]';
			}
		};

		return MicroPlugin;
	}));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _swiper = __webpack_require__(4);

	var _swiper2 = _interopRequireDefault(_swiper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mySwiper = new _swiper2.default('.slide-card', {
	    // Optional parameters
	    loop: true,
	    // If we need pagination
	    // Navigation arrows
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev'
	});
	var galleryThumbs = new _swiper2.default('.gallery-thumbs', {
	    spaceBetween: 10,
	    centeredSlides: true,
	    slidesPerView: 'auto',
	    touchRatio: 0.2,
	    slideToClickedSlide: true
	});
	mySwiper.params.control = galleryThumbs;
	galleryThumbs.params.control = mySwiper;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	// import panel from "card-goods-panel"

	$(function () {

	    var url = $().data('ajax-url');
	    $('.model-list__model-item').on('click', function () {
	        var model = $(this).text().trim();
	        // panel(model, url).done(function(data){
	        //     console.log(data)
	        // })
	    });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ })
/******/ ]);