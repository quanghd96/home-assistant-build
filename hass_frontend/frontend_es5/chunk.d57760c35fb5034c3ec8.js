(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{194:function(e,t,n){"use strict";var r=n(226);n.d(t,"a",function(){return i});var i=Object(r.a)({types:{"entity-id":function(e){return"string"!=typeof e?"entity id should be a string":!!e.includes(".")||"entity id should be in the format 'domain.entity'"},icon:function(e){return"string"!=typeof e?"icon should be a string":!!e.includes(":")||"icon should be in the format 'mdi:icon'"}}})},241:function(e,t,n){"use strict";var r=n(0),i=(n(105),n(19));n(187);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){var e=u(["\n      .entities {\n        padding-left: 20px;\n      }\n      .entity {\n        display: flex;\n        align-items: flex-end;\n      }\n      .entity ha-entity-picker {\n        flex-grow: 1;\n      }\n    "]);return s=function(){return e},e}function a(){var e=u(['\n            <div class="entity">\n              <ha-entity-picker\n                .hass="','"\n                .value="','"\n                .index="','"\n                @change="','"\n                allow-custom-entity\n              ></ha-entity-picker>\n              <paper-icon-button\n                title="Move entity down"\n                icon="hass:arrow-down"\n                .index="','"\n                @click="','"\n                ?disabled="','"\n              ></paper-icon-button>\n              <paper-icon-button\n                title="Move entity up"\n                icon="hass:arrow-up"\n                .index="','"\n                @click="','"\n                ?disabled="','"\n              ></paper-icon-button>\n            </div>\n          ']);return a=function(){return e},e}function c(){var e=u(['\n      <h3>Entities</h3>\n      <div class="entities">\n        ','\n        <ha-entity-picker\n          .hass="','"\n          @change="','"\n        ></ha-entity-picker>\n      </div>\n    ']);return c=function(){return e},e}function l(){var e=u([""]);return l=function(){return e},e}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t,n=b(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function y(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function m(e){return e.decorators&&e.decorators.length}function v(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function g(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function b(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}!function(e,t,n,r){var i=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(n){t.forEach(function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach(function(r){t.forEach(function(t){var i=t.placement;if(t.kind===r&&("static"===i||"prototype"===i)){var o="static"===i?e:n;this.defineClassElement(o,t)}},this)},this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var r=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],r=[],i={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,i)},this),e.forEach(function(e){if(!m(e))return n.push(e);var t=this.decorateElement(e,i);n.push(t.element),n.push.apply(n,t.extras),r.push.apply(r,t.finishers)},this),!t)return{elements:n,finishers:r};var o=this.decorateConstructor(n,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,n){var r=t[e.placement];if(!n&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],i=e.decorators,o=i.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);n.push.apply(n,l)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;r>=0;r--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(i)||i);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=b(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:n,placement:r,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),n=g(e,"finisher"),r=this.toElementDescriptors(e.extras);return{element:t,finisher:n,extras:r}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=g(e,"finisher"),r=this.toElementDescriptors(e.elements);return{elements:r,finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}();if(r)for(var o=0;o<r.length;o++)i=r[o](i);var s=t(function(e){i.initializeInstanceElements(e,a.elements)},n),a=i.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var i,o=e[r];if("method"===o.kind&&(i=t.find(n)))if(v(o.descriptor)||v(i.descriptor)){if(m(o)||m(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(m(o)){if(m(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}y(o,i)}else t.push(o)}return t}(s.d.map(h)),e);i.initializeClassElements(s.F,a.elements),i.runClassFinishers(s.F,a.finishers)}([Object(r.d)("hui-entity-editor")],function(e,t){return{F:function(n){function r(){var t,n,i,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return i=this,n=!(s=(t=d(r)).call.apply(t,[this].concat(c)))||"object"!==o(s)&&"function"!=typeof s?f(i):s,e(f(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(r,t),r}(),d:[{kind:"field",decorators:[Object(r.g)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(r.g)()],key:"entities",value:void 0},{kind:"method",key:"render",value:function(){var e=this;return this.entities?Object(r.f)(c(),this.entities.map(function(t,n){return Object(r.f)(a(),e.hass,t.entity,n,e._valueChanged,n,e._entityDown,n===e.entities.length-1,n,e._entityUp,0===n)}),this.hass,this._addEntity):Object(r.f)(l())}},{kind:"method",key:"_addEntity",value:function(e){var t=e.target;if(""!==t.value){var n=this.entities.concat({entity:t.value});t.value="",Object(i.a)(this,"entities-changed",{entities:n})}}},{kind:"method",key:"_entityUp",value:function(e){var t=e.target,n=this.entities.concat(),r=[n[t.index],n[t.index-1]];n[t.index-1]=r[0],n[t.index]=r[1],Object(i.a)(this,"entities-changed",{entities:n})}},{kind:"method",key:"_entityDown",value:function(e){var t=e.target,n=this.entities.concat(),r=[n[t.index],n[t.index+1]];n[t.index+1]=r[0],n[t.index]=r[1],Object(i.a)(this,"entities-changed",{entities:n})}},{kind:"method",key:"_valueChanged",value:function(e){var t=e.target,n=this.entities.concat();""===t.value?n.splice(t.index,1):n[t.index]=Object.assign({},n[t.index],{entity:t.value}),Object(i.a)(this,"entities-changed",{entities:n})}},{kind:"get",static:!0,key:"styles",value:function(){return Object(r.c)(s())}}]}},r.a)},696:function(e,t,n){"use strict";n.r(t),n.d(t,"HuiGaugeCardEditor",function(){return _});var r=n(0),i=(n(90),n(201),n(279),n(241),n(194)),o=n(19),s=n(210);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){var e=f(["\n      .severity {\n        display: none;\n        width: 100%;\n        padding-left: 16px;\n        flex-direction: row;\n        flex-wrap: wrap;\n      }\n      .severity > * {\n        flex: 1 0 30%;\n        padding-right: 4px;\n      }\n      paper-toggle-button[checked] ~ .severity {\n        display: flex;\n      }\n    "]);return l=function(){return e},e}function u(){var e=f(["\n      ",'\n      <div class="card-config">\n        <div class="side-by-side">\n          <paper-input\n            label="Name"\n            .value="','"\n            .configValue=','\n            @value-changed="','"\n          ></paper-input>\n          <ha-entity-picker\n            .hass="','"\n            .value="','"\n            .configValue=','\n            domain-filter="sensor"\n            @change="','"\n            allow-custom-entity\n          ></ha-entity-picker>\n        </div>\n        <div class="side-by-side">\n          <paper-input\n            label="Unit"\n            .value="','"\n            .configValue=','\n            @value-changed="','"\n          ></paper-input>\n          <hui-theme-select-editor\n            .hass="','"\n            .value="','"\n            .configValue="','"\n            @theme-changed="','"\n          ></hui-theme-select-editor>\n        </div>\n        <div class="side-by-side">\n          <paper-input\n            type="number"\n            label="Minimum"\n            .value="','"\n            .configValue=','\n            @value-changed="','"\n          ></paper-input>\n          <paper-input\n            type="number"\n            label="Maximum"\n            .value="','"\n            .configValue=','\n            @value-changed="','"\n          ></paper-input>\n        </div>\n        <div class="side-by-side">\n          <paper-toggle-button\n            ?checked="','"\n            @change="','"\n            >Define Severity?</paper-toggle-button\n          >\n          <div class="severity">\n            <paper-input\n              type="number"\n              label="Green"\n              .value="','"\n              .configValue=','\n              @value-changed="','"\n            ></paper-input>\n            <paper-input\n              type="number"\n              label="Yellow"\n              .value="','"\n              .configValue=','\n              @value-changed="','"\n            ></paper-input>\n            <paper-input\n              type="number"\n              label="Red"\n              .value="','"\n              .configValue=','\n              @value-changed="','"\n            ></paper-input>\n          </div>\n        </div>\n      </div>\n    ']);return u=function(){return e},e}function d(){var e=f([""]);return d=function(){return e},e}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t,n=w(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function v(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function g(e){return e.decorators&&e.decorators.length}function b(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function k(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function w(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}var E=Object(i.a)({type:"string",name:"string?",entity:"string?",unit:"string?",min:"number?",max:"number?",severity:"object?",theme:"string?"}),_=function(e,t,n,r){var i=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(n){t.forEach(function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach(function(r){t.forEach(function(t){var i=t.placement;if(t.kind===r&&("static"===i||"prototype"===i)){var o="static"===i?e:n;this.defineClassElement(o,t)}},this)},this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var r=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],r=[],i={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,i)},this),e.forEach(function(e){if(!g(e))return n.push(e);var t=this.decorateElement(e,i);n.push(t.element),n.push.apply(n,t.extras),r.push.apply(r,t.finishers)},this),!t)return{elements:n,finishers:r};var o=this.decorateConstructor(n,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,n){var r=t[e.placement];if(!n&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],i=e.decorators,o=i.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);n.push.apply(n,l)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;r>=0;r--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(i)||i);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=w(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:n,placement:r,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),n=k(e,"finisher"),r=this.toElementDescriptors(e.extras);return{element:t,finisher:n,extras:r}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=k(e,"finisher"),r=this.toElementDescriptors(e.elements);return{elements:r,finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}();if(r)for(var o=0;o<r.length;o++)i=r[o](i);var s=t(function(e){i.initializeInstanceElements(e,a.elements)},n),a=i.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var i,o=e[r];if("method"===o.kind&&(i=t.find(n)))if(b(o.descriptor)||b(i.descriptor)){if(g(o)||g(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(g(o)){if(g(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}v(o,i)}else t.push(o)}return t}(s.d.map(m)),e);return i.initializeClassElements(s.F,a.elements),i.runClassFinishers(s.F,a.finishers)}([Object(r.d)("hui-gauge-card-editor")],function(e,t){return{F:function(n){function r(){var t,n,i,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);for(var s=arguments.length,c=new Array(s),l=0;l<s;l++)c[l]=arguments[l];return i=this,n=!(o=(t=p(r)).call.apply(t,[this].concat(c)))||"object"!==a(o)&&"function"!=typeof o?h(i):o,e(h(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(r,t),r}(),d:[{kind:"field",decorators:[Object(r.g)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(r.g)()],key:"_config",value:void 0},{kind:"field",key:"_useSeverity",value:void 0},{kind:"method",key:"setConfig",value:function(e){e=E(e),this._useSeverity=!!e.severity,this._config=e}},{kind:"get",key:"_name",value:function(){return this._config.name||""}},{kind:"get",key:"_entity",value:function(){return this._config.entity||""}},{kind:"get",key:"_unit",value:function(){return this._config.unit||""}},{kind:"get",key:"_theme",value:function(){return this._config.theme||"default"}},{kind:"get",key:"_min",value:function(){return this._config.number||0}},{kind:"get",key:"_max",value:function(){return this._config.max||100}},{kind:"get",key:"_severity",value:function(){return this._config.severity||void 0}},{kind:"method",key:"render",value:function(){return this.hass?Object(r.f)(u(),s.a,this._name,"name",this._valueChanged,this.hass,this._entity,"entity",this._valueChanged,this._unit,"unit",this._valueChanged,this.hass,this._theme,"theme",this._valueChanged,this._min,"min",this._valueChanged,this._max,"max",this._valueChanged,!1!==this._useSeverity,this._toggleSeverity,this._severity?this._severity.green:0,"green",this._severityChanged,this._severity?this._severity.yellow:0,"yellow",this._severityChanged,this._severity?this._severity.red:0,"red",this._severityChanged):Object(r.f)(d())}},{kind:"get",static:!0,key:"styles",value:function(){return Object(r.c)(l())}},{kind:"method",key:"_toggleSeverity",value:function(e){if(this._config&&this.hass){var t=e.target;this._config.severity=t.checked?{green:0,yellow:0,red:0}:void 0,Object(o.a)(this,"config-changed",{config:this._config})}}},{kind:"method",key:"_severityChanged",value:function(e){if(this._config&&this.hass){var t=e.target,n=Object.assign({},this._config.severity,c({},t.configValue,Number(t.value)));this._config=Object.assign({},this._config,{severity:n}),Object(o.a)(this,"config-changed",{config:this._config})}}},{kind:"method",key:"_valueChanged",value:function(e){if(this._config&&this.hass){var t=e.target;if(t.configValue)if(""===t.value||"number"===t.type&&isNaN(Number(t.value)))delete this._config[t.configValue];else{var n=t.value;"number"===t.type&&(n=Number(n)),this._config=Object.assign({},this._config,c({},t.configValue,n))}Object(o.a)(this,"config-changed",{config:this._config})}}}]}},r.a)}}]);
//# sourceMappingURL=chunk.d57760c35fb5034c3ec8.js.map