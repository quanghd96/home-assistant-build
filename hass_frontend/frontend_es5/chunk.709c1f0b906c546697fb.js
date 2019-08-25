/*! For license information please see chunk.709c1f0b906c546697fb.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{117:function(e,n,t){"use strict";t.d(n,"a",function(){return i});t(4);var a=t(53),r=t(34),i=[a.a,r.a,{hostAttributes:{role:"option",tabindex:"0"}}]},139:function(e,n,t){"use strict";t(4),t(44),t(141);var a=t(5),r=t(3),i=t(117);function p(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n    <style include="paper-item-shared-styles">\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-subhead;\n\n        @apply --paper-item;\n      }\n    </style>\n    <slot></slot>\n']);return p=function(){return e},e}Object(a.a)({_template:Object(r.a)(p()),is:"paper-item",behaviors:[i.a]})},141:function(e,n,t){"use strict";t(44),t(55),t(41),t(52);var a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(a.content)},179:function(e,n,t){"use strict";t(4),t(44),t(41),t(52);var a=t(5),r=t(3);function i(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    <style>\n      :host {\n        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */\n        @apply --layout-vertical;\n        @apply --layout-center-justified;\n        @apply --layout-flex;\n      }\n\n      :host([two-line]) {\n        min-height: var(--paper-item-body-two-line-min-height, 72px);\n      }\n\n      :host([three-line]) {\n        min-height: var(--paper-item-body-three-line-min-height, 88px);\n      }\n\n      :host > ::slotted(*) {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n\n      :host > ::slotted([secondary]) {\n        @apply --paper-font-body1;\n\n        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));\n\n        @apply --paper-item-body-secondary;\n      }\n    </style>\n\n    <slot></slot>\n"]);return i=function(){return e},e}Object(a.a)({_template:Object(r.a)(i()),is:"paper-item-body"})},204:function(e,n,t){"use strict";t(4),t(83);var a=t(3);function r(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n<dom-module id="paper-material-styles">\n  <template>\n    <style>\n      html {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      .paper-material {\n        @apply --paper-material;\n      }\n      .paper-material[elevation="1"] {\n        @apply --paper-material-elevation-1;\n      }\n      .paper-material[elevation="2"] {\n        @apply --paper-material-elevation-2;\n      }\n      .paper-material[elevation="3"] {\n        @apply --paper-material-elevation-3;\n      }\n      .paper-material[elevation="4"] {\n        @apply --paper-material-elevation-4;\n      }\n      .paper-material[elevation="5"] {\n        @apply --paper-material-elevation-5;\n      }\n\n      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */\n      :host {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      :host(.paper-material) {\n        @apply --paper-material;\n      }\n      :host(.paper-material[elevation="1"]) {\n        @apply --paper-material-elevation-1;\n      }\n      :host(.paper-material[elevation="2"]) {\n        @apply --paper-material-elevation-2;\n      }\n      :host(.paper-material[elevation="3"]) {\n        @apply --paper-material-elevation-3;\n      }\n      :host(.paper-material[elevation="4"]) {\n        @apply --paper-material-elevation-4;\n      }\n      :host(.paper-material[elevation="5"]) {\n        @apply --paper-material-elevation-5;\n      }\n    </style>\n  </template>\n</dom-module>']);return r=function(){return e},e}var i=Object(a.a)(r());i.setAttribute("style","display: none;"),document.head.appendChild(i.content)},230:function(e,n,t){"use strict";t(4),t(44),t(107),t(204),t(55),t(41);var a=t(53),r=t(34),i=t(67),p={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var e=1;this.disabled?e=0:this.active||this.pressed?e=4:this.receivedFocusFromKeyboard&&(e=3),this._setElevation(e)},_computeKeyboardClass:function(e){this.toggleClass("keyboard-focus",e)},_spaceKeyDownHandler:function(e){a.b._spaceKeyDownHandler.call(this,e),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(e){a.b._spaceKeyUpHandler.call(this,e),this.hasRipple()&&this._ripple.uiUpAction()}},o=[a.a,r.a,i.a,p],l=t(5),s=t(3);function c(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n  <style include="paper-material-styles">\n    :host {\n      @apply --layout-vertical;\n      @apply --layout-center-center;\n\n      background: var(--paper-fab-background, var(--accent-color));\n      border-radius: 50%;\n      box-sizing: border-box;\n      color: var(--text-primary-color);\n      cursor: pointer;\n      height: 56px;\n      min-width: 0;\n      outline: none;\n      padding: 16px;\n      position: relative;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n      width: 56px;\n      z-index: 0;\n\n      /* NOTE: Both values are needed, since some phones require the value `transparent`. */\n      -webkit-tap-highlight-color: rgba(0,0,0,0);\n      -webkit-tap-highlight-color: transparent;\n\n      @apply --paper-fab;\n    }\n\n    [hidden] {\n      display: none !important;\n    }\n\n    :host([mini]) {\n      width: 40px;\n      height: 40px;\n      padding: 8px;\n\n      @apply --paper-fab-mini;\n    }\n\n    :host([disabled]) {\n      color: var(--paper-fab-disabled-text, var(--paper-grey-500));\n      background: var(--paper-fab-disabled-background, var(--paper-grey-300));\n\n      @apply --paper-fab-disabled;\n    }\n\n    iron-icon {\n      @apply --paper-fab-iron-icon;\n    }\n\n    span {\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      text-align: center;\n\n      @apply --paper-fab-label;\n    }\n\n    :host(.keyboard-focus) {\n      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));\n    }\n\n    :host([elevation="1"]) {\n      @apply --paper-material-elevation-1;\n    }\n\n    :host([elevation="2"]) {\n      @apply --paper-material-elevation-2;\n    }\n\n    :host([elevation="3"]) {\n      @apply --paper-material-elevation-3;\n    }\n\n    :host([elevation="4"]) {\n      @apply --paper-material-elevation-4;\n    }\n\n    :host([elevation="5"]) {\n      @apply --paper-material-elevation-5;\n    }\n  </style>\n\n  <iron-icon id="icon" hidden$="{{!_computeIsIconFab(icon, src)}}" src="[[src]]" icon="[[icon]]"></iron-icon>\n  <span hidden$="{{_computeIsIconFab(icon, src)}}">{{label}}</span>\n'],['\n  <style include="paper-material-styles">\n    :host {\n      @apply --layout-vertical;\n      @apply --layout-center-center;\n\n      background: var(--paper-fab-background, var(--accent-color));\n      border-radius: 50%;\n      box-sizing: border-box;\n      color: var(--text-primary-color);\n      cursor: pointer;\n      height: 56px;\n      min-width: 0;\n      outline: none;\n      padding: 16px;\n      position: relative;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n      width: 56px;\n      z-index: 0;\n\n      /* NOTE: Both values are needed, since some phones require the value \\`transparent\\`. */\n      -webkit-tap-highlight-color: rgba(0,0,0,0);\n      -webkit-tap-highlight-color: transparent;\n\n      @apply --paper-fab;\n    }\n\n    [hidden] {\n      display: none !important;\n    }\n\n    :host([mini]) {\n      width: 40px;\n      height: 40px;\n      padding: 8px;\n\n      @apply --paper-fab-mini;\n    }\n\n    :host([disabled]) {\n      color: var(--paper-fab-disabled-text, var(--paper-grey-500));\n      background: var(--paper-fab-disabled-background, var(--paper-grey-300));\n\n      @apply --paper-fab-disabled;\n    }\n\n    iron-icon {\n      @apply --paper-fab-iron-icon;\n    }\n\n    span {\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      text-align: center;\n\n      @apply --paper-fab-label;\n    }\n\n    :host(.keyboard-focus) {\n      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));\n    }\n\n    :host([elevation="1"]) {\n      @apply --paper-material-elevation-1;\n    }\n\n    :host([elevation="2"]) {\n      @apply --paper-material-elevation-2;\n    }\n\n    :host([elevation="3"]) {\n      @apply --paper-material-elevation-3;\n    }\n\n    :host([elevation="4"]) {\n      @apply --paper-material-elevation-4;\n    }\n\n    :host([elevation="5"]) {\n      @apply --paper-material-elevation-5;\n    }\n  </style>\n\n  <iron-icon id="icon" hidden\\$="{{!_computeIsIconFab(icon, src)}}" src="[[src]]" icon="[[icon]]"></iron-icon>\n  <span hidden\\$="{{_computeIsIconFab(icon, src)}}">{{label}}</span>\n']);return c=function(){return e},e}var h=Object(s.a)(c());h.setAttribute("strip-whitespace",""),Object(l.a)({_template:h,is:"paper-fab",behaviors:[o],properties:{src:{type:String,value:""},icon:{type:String,value:""},mini:{type:Boolean,value:!1,reflectToAttribute:!0},label:{type:String,observer:"_labelChanged"}},_labelChanged:function(){this.setAttribute("aria-label",this.label)},_computeIsIconFab:function(e,n){return e.length>0||n.length>0}})},237:function(e,n,t){"use strict";t(4);var a=t(5);Object(a.a)({is:"app-route",properties:{route:{type:Object,notify:!0},pattern:{type:String},data:{type:Object,value:function(){return{}},notify:!0},autoActivate:{type:Boolean,value:!1},_queryParamsUpdating:{type:Boolean,value:!1},queryParams:{type:Object,value:function(){return{}},notify:!0},tail:{type:Object,value:function(){return{path:null,prefix:null,__queryParams:null}},notify:!0},active:{type:Boolean,notify:!0,readOnly:!0},_matched:{type:String,value:""}},observers:["__tryToMatch(route.path, pattern)","__updatePathOnDataChange(data.*)","__tailPathChanged(tail.path)","__routeQueryParamsChanged(route.__queryParams)","__tailQueryParamsChanged(tail.__queryParams)","__queryParamsChanged(queryParams.*)"],created:function(){this.linkPaths("route.__queryParams","tail.__queryParams"),this.linkPaths("tail.__queryParams","route.__queryParams")},__routeQueryParamsChanged:function(e){if(e&&this.tail){if(this.tail.__queryParams!==e&&this.set("tail.__queryParams",e),!this.active||this._queryParamsUpdating)return;var n={},t=!1;for(var a in e)n[a]=e[a],!t&&this.queryParams&&e[a]===this.queryParams[a]||(t=!0);for(var a in this.queryParams)if(t||!(a in e)){t=!0;break}if(!t)return;this._queryParamsUpdating=!0,this.set("queryParams",n),this._queryParamsUpdating=!1}},__tailQueryParamsChanged:function(e){e&&this.route&&this.route.__queryParams!=e&&this.set("route.__queryParams",e)},__queryParamsChanged:function(e){this.active&&!this._queryParamsUpdating&&this.set("route.__"+e.path,e.value)},__resetProperties:function(){this._setActive(!1),this._matched=null},__tryToMatch:function(){if(this.route){var e=this.route.path,n=this.pattern;if(this.autoActivate&&""===e&&(e="/"),n)if(e){for(var t=e.split("/"),a=n.split("/"),r=[],i={},p=0;p<a.length;p++){var o=a[p];if(!o&&""!==o)break;var l=t.shift();if(!l&&""!==l)return void this.__resetProperties();if(r.push(l),":"==o.charAt(0))i[o.slice(1)]=l;else if(o!==l)return void this.__resetProperties()}this._matched=r.join("/");var s={};this.active||(s.active=!0);var c=this.route.prefix+this._matched,h=t.join("/");for(var d in t.length>0&&(h="/"+h),this.tail&&this.tail.prefix===c&&this.tail.path===h||(s.tail={prefix:c,path:h,__queryParams:this.route.__queryParams}),s.data=i,this._dataInUrl={},i)this._dataInUrl[d]=i[d];this.setProperties?this.setProperties(s,!0):this.__setMulti(s)}else this.__resetProperties()}},__tailPathChanged:function(e){if(this.active){var n=e,t=this._matched;n&&("/"!==n.charAt(0)&&(n="/"+n),t+=n),this.set("route.path",t)}},__updatePathOnDataChange:function(){if(this.route&&this.active){var e=this.__getLink({});e!==this.__getLink(this._dataInUrl)&&this.set("route.path",e)}},__getLink:function(e){var n={tail:null};for(var t in this.data)n[t]=this.data[t];for(var t in e)n[t]=e[t];var a=this.pattern.split("/").map(function(e){return":"==e[0]&&(e=n[e.slice(1)]),e},this);return n.tail&&n.tail.path&&(a.length>0&&"/"===n.tail.path.charAt(0)?a.push(n.tail.path.slice(1)):a.push(n.tail.path)),a.join("/")},__setMulti:function(e){for(var n in e)this._propertySetter(n,e[n]);void 0!==e.data&&(this._pathEffector("data",this.data),this._notifyChange("data")),void 0!==e.active&&(this._pathEffector("active",this.active),this._notifyChange("active")),void 0!==e.tail&&(this._pathEffector("tail",this.tail),this._notifyChange("tail"))}})},627:function(e,n,t){"use strict";t.d(n,"a",function(){return p});var a=t(14),r=t(10),i=new WeakMap,p=Object(r.f)(function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){var t=i.get(e);void 0===t&&(t={lastRenderedIndex:2147483647,values:[]},i.set(e,t));var r=t.values,p=r.length;t.values=n;var o=function(i){if(i>t.lastRenderedIndex)return"break";var o=n[i];return Object(a.h)(o)||"function"!=typeof o.then?(e.setValue(o),t.lastRenderedIndex=i,"break"):i<p&&o===r[i]?"continue":(t.lastRenderedIndex=2147483647,p=0,void Promise.resolve(o).then(function(n){var a=t.values.indexOf(o);a>-1&&a<t.lastRenderedIndex&&(t.lastRenderedIndex=a,e.setValue(n),e.commit())}))};e:for(var l=0;l<n.length;l++){switch(o(l)){case"break":break e;case"continue":continue}}}})}}]);
//# sourceMappingURL=chunk.709c1f0b906c546697fb.js.map