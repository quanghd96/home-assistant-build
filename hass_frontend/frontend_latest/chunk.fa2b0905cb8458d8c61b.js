/*! For license information please see chunk.fa2b0905cb8458d8c61b.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[89,4,5],{106:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var n=i(8),o=i(19);const r=Object(n.a)(e=>(class extends e{fire(e,t,i){return i=i||{},Object(o.a)(i.node||this,e,t,i)}}))},111:function(e,t,i){"use strict";i(4);var n=i(91),o=i(60),r=i(5),a=i(1),s=i(3);Object(r.a)({_template:s.a`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[o.a],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){n.a.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=Object(a.a)(this).observeNodes(function(e){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(Object(a.a)(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var e;if(this.allowedPattern)e=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":e=/[0-9.,e-]/}return e},_bindValueChanged:function(e,t){t&&(void 0===e?t.value=null:e!==t.value&&(this.inputElement.value=e),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:e}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(e){var t=8==e.keyCode||9==e.keyCode||13==e.keyCode||27==e.keyCode,i=19==e.keyCode||20==e.keyCode||45==e.keyCode||46==e.keyCode||144==e.keyCode||145==e.keyCode||e.keyCode>32&&e.keyCode<41||e.keyCode>111&&e.keyCode<124;return!(t||0==e.charCode&&i)},_onKeypress:function(e){if(this.allowedPattern||"number"===this.inputElement.type){var t=this._patternRegExp;if(t&&!(e.metaKey||e.ctrlKey||e.altKey)){this._patternAlreadyChecked=!0;var i=String.fromCharCode(e.charCode);this._isPrintable(e)&&!t.test(i)&&(e.preventDefault(),this._announceInvalidCharacter("Invalid character "+i+" not entered."))}}},_checkPatternValidity:function(){var e=this._patternRegExp;if(!e)return!0;for(var t=0;t<this.inputElement.value.length;t++)if(!e.test(this.inputElement.value[t]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var e=this.inputElement.checkValidity();return e&&(this.required&&""===this.bindValue?e=!1:this.hasValidator()&&(e=o.a.validate.call(this,this.bindValue))),this.invalid=!e,this.fire("iron-input-validate"),e},_announceInvalidCharacter:function(e){this.fire("iron-announce",{text:e})},_computeValue:function(e){return e}})},117:function(e,t,i){"use strict";i.d(t,"a",function(){return r});i(4);var n=i(53),o=i(34);const r=[n.a,o.a,{hostAttributes:{role:"option",tabindex:"0"}}]},119:function(e,t,i){"use strict";i(4);const n={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(e,t){for(var i in t)e[i]=t[i]},_cloneConfig:function(e){var t={isClone:!0};return this._copyProperties(t,e),t},_getAnimationConfigRecursive:function(e,t,i){var n;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(n=e?this.animationConfig[e]:this.animationConfig,Array.isArray(n)||(n=[n]),n)for(var o,r=0;o=n[r];r++)if(o.animatable)o.animatable._getAnimationConfigRecursive(o.type||e,t,i);else if(o.id){var a=t[o.id];a?(a.isClone||(t[o.id]=this._cloneConfig(a),a=t[o.id]),this._copyProperties(a,o)):t[o.id]=o}else i.push(o)},getAnimationConfig:function(e){var t={},i=[];for(var n in this._getAnimationConfigRecursive(e,t,i),t)i.push(t[n]);return i}};i.d(t,"a",function(){return o});const o=[n,{_configureAnimations:function(e){var t=[],i=[];if(e.length>0)for(let r,a=0;r=e[a];a++){let e=document.createElement(r.name);if(e.isNeonAnimation){let t=null;e.configure||(e.configure=function(e){return null}),t=e.configure(r),i.push({result:t,config:r,neonAnimation:e})}else console.warn(this.is+":",r.name,"not found!")}for(var n=0;n<i.length;n++){let e=i[n].result,r=i[n].config,a=i[n].neonAnimation;try{"function"!=typeof e.cancel&&(e=document.timeline.play(e))}catch(o){e=null,console.warn("Couldnt play","(",r.name,").",o)}e&&t.push({neonAnimation:a,config:r,animation:e})}return t},_shouldComplete:function(e){for(var t=!0,i=0;i<e.length;i++)if("finished"!=e[i].animation.playState){t=!1;break}return t},_complete:function(e){for(var t=0;t<e.length;t++)e[t].neonAnimation.complete(e[t].config);for(t=0;t<e.length;t++)e[t].animation.cancel()},playAnimation:function(e,t){var i=this.getAnimationConfig(e);if(i){this._active=this._active||{},this._active[e]&&(this._complete(this._active[e]),delete this._active[e]);var n=this._configureAnimations(i);if(0!=n.length){this._active[e]=n;for(var o=0;o<n.length;o++)n[o].animation.onfinish=function(){this._shouldComplete(n)&&(this._complete(n),delete this._active[e],this.fire("neon-animation-finish",t,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",t,{bubbles:!1})}},cancelAnimation:function(){for(var e in this._active){var t=this._active[e];for(var i in t)t[i].animation.cancel()}this._active={}}}]},120:function(e,t,i){"use strict";i(4);var n=i(59),o=i(60);const r={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(e){return this.disabled||!this.required||this.checked},_requiredChanged:function(){this.required?this.setAttribute("aria-required","true"):this.removeAttribute("aria-required")},_checkedChanged:function(){this.active=this.checked,this.fire("iron-change")},_valueChanged:function(){void 0!==this.value&&null!==this.value||(this.value="on")}},a=[n.a,o.a,r];var s=i(56),l=i(67);i.d(t,"a",function(){return d});const c={_checkedChanged:function(){r._checkedChanged.call(this),this.hasRipple()&&(this.checked?this._ripple.setAttribute("checked",""):this._ripple.removeAttribute("checked"))},_buttonStateChanged:function(){l.a._buttonStateChanged.call(this),this.disabled||this.isAttached&&(this.checked=this.active)}},d=[s.a,a,c]},139:function(e,t,i){"use strict";i(4),i(44),i(140);var n=i(5),o=i(3),r=i(117);Object(n.a)({_template:o.a`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[r.a]})},140:function(e,t,i){"use strict";i(44),i(55),i(41),i(52);const n=document.createElement("template");n.setAttribute("style","display: none;"),n.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(n.content)},141:function(e,t,i){"use strict";i(4),i(41);var n=i(121),o=i(5),r=i(3);Object(o.a)({_template:r.a`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,is:"paper-listbox",behaviors:[n.a],hostAttributes:{role:"listbox"}})},143:function(e,t,i){"use strict";i(4);var n=i(31),o=i(34),r=i(84),a=i(119),s=i(5),l=i(1),c=i(3);Object(s.a)({_template:c.a`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,is:"iron-dropdown",behaviors:[o.a,n.a,r.a,a.a],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var e=Object(l.a)(this.$.content).getDistributedNodes(),t=0,i=e.length;t<i;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),r.b._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):r.b._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):r.b._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var e=this.containedElement,t=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<t.length;i++)t[i].node=e;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(e){this._readied&&(e?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var e=this.focusTarget||this.containedElement;e&&this.opened&&!this.noAutoFocus?e.focus():r.b._applyFocus.apply(this,arguments)}});const d={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(e){if(e.timing)for(var t in e.timing)this.animationTiming[t]=e.timing[t];return this.animationTiming},setPrefixedProperty:function(e,t,i){for(var n,o={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[t],r=0;n=o[r];r++)e.style[n]=i;e.style[t]=i},complete:function(e){}};Object(s.a)({is:"fade-in-animation",behaviors:[d],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(e)),this._effect}}),Object(s.a)({is:"fade-out-animation",behaviors:[d],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(e)),this._effect}});i(41),i(83);Object(s.a)({is:"paper-menu-grow-height-animation",behaviors:[d],configure:function(e){var t=e.node,i=t.getBoundingClientRect().height;return this._effect=new KeyframeEffect(t,[{height:i/2+"px"},{height:i+"px"}],this.timingFromConfig(e)),this._effect}}),Object(s.a)({is:"paper-menu-grow-width-animation",behaviors:[d],configure:function(e){var t=e.node,i=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:i/2+"px"},{width:i+"px"}],this.timingFromConfig(e)),this._effect}}),Object(s.a)({is:"paper-menu-shrink-width-animation",behaviors:[d],configure:function(e){var t=e.node,i=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:i+"px"},{width:i-i/20+"px"}],this.timingFromConfig(e)),this._effect}}),Object(s.a)({is:"paper-menu-shrink-height-animation",behaviors:[d],configure:function(e){var t=e.node,i=t.getBoundingClientRect().height;return this.setPrefixedProperty(t,"transformOrigin","0 0"),this._effect=new KeyframeEffect(t,[{height:i+"px",transform:"translateY(0)"},{height:i/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(e)),this._effect}});var h={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const p=Object(s.a)({_template:c.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;

        @apply --paper-menu-button;
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--disabled-text-color);

        @apply --paper-menu-button-disabled;
      }

      iron-dropdown {
        @apply --paper-menu-button-dropdown;
      }

      .dropdown-content {
        @apply --shadow-elevation-2dp;

        position: relative;
        border-radius: 2px;
        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));

        @apply --paper-menu-button-content;
      }

      :host([vertical-align="top"]) .dropdown-content {
        margin-bottom: 20px;
        margin-top: -10px;
        top: 10px;
      }

      :host([vertical-align="bottom"]) .dropdown-content {
        bottom: 10px;
        margin-bottom: -10px;
        margin-top: 20px;
      }

      #trigger {
        cursor: pointer;
      }
    </style>

    <div id="trigger" on-tap="toggle">
      <slot name="dropdown-trigger"></slot>
    </div>

    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled">
      <div slot="dropdown-content" class="dropdown-content">
        <slot id="content" name="dropdown-content"></slot>
      </div>
    </iron-dropdown>
`,is:"paper-menu-button",behaviors:[n.a,o.a],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:h.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:h.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:h.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var e=Object(l.a)(this.$.content).getDistributedNodes(),t=0,i=e.length;t<i;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(e){this.ignoreSelect||this.close()},_onIronActivate:function(e){this.closeOnActivate&&this.close()},_openedChanged:function(e,t){e?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=t&&this.fire("paper-dropdown-close")},_disabledChanged:function(e){o.a._disabledChanged.apply(this,arguments),e&&this.opened&&this.close()},__onIronOverlayCanceled:function(e){var t=e.detail,i=this.$.trigger;Object(l.a)(t).path.indexOf(i)>-1&&e.preventDefault()}});Object.keys(h).forEach(function(e){p[e]=h[e]})},144:function(e,t,i){"use strict";i(85);const n=document.createElement("template");n.setAttribute("style","display: none;"),n.innerHTML='<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>',document.head.appendChild(n.content)},145:function(e,t,i){"use strict";i(41);const n=document.createElement("template");n.setAttribute("style","display: none;"),n.innerHTML='<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(n.content)},171:function(e,t,i){"use strict";var n=i(8);t.a=Object(n.a)(e=>(class extends e{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(e){return e}}))},172:function(e,t,i){"use strict";var n=i(0);function o(e){var t,i=c(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function r(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function a(e){return e.decorators&&e.decorators.length}function s(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function l(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function c(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}let d=function(e,t,i,n){var d=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(i){t.forEach(function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach(function(n){t.forEach(function(t){var o=t.placement;if(t.kind===n&&("static"===o||"prototype"===o)){var r="static"===o?e:i;this.defineClassElement(r,t)}},this)},this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var n=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],n=[],o={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,o)},this),e.forEach(function(e){if(!a(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),n.push.apply(n,t.finishers)},this),!t)return{elements:i,finishers:n};var r=this.decorateConstructor(i,t);return n.push.apply(n,r.finishers),r.finishers=n,r},addElementPlacement:function(e,t,i){var n=t[e.placement];if(!i&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var i=[],n=[],o=e.decorators,r=o.length-1;r>=0;r--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[r])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&n.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:n,extras:i}},decorateConstructor:function(e,t){for(var i=[],n=t.length-1;n>=0;n--){var o=this.fromClassDescriptor(e),r=this.toClassDescriptor((0,t[n])(o)||o);if(void 0!==r.finisher&&i.push(r.finisher),void 0!==r.elements){e=r.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=c(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var r={kind:t,key:i,placement:n,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),r.initializer=e.initializer),r},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),i=l(e,"finisher"),n=this.toElementDescriptors(e.extras);return{element:t,finisher:i,extras:n}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=l(e,"finisher"),n=this.toElementDescriptors(e.elements);return{elements:n,finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var n=(0,t[i])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}();if(n)for(var h=0;h<n.length;h++)d=n[h](d);var p=t(function(e){d.initializeInstanceElements(e,u.elements)},i),u=d.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===l.key&&e.placement===l.placement},n=0;n<e.length;n++){var o,l=e[n];if("method"===l.kind&&(o=t.find(i)))if(s(l.descriptor)||s(o.descriptor)){if(a(l)||a(o))throw new ReferenceError("Duplicated methods ("+l.key+") can't be decorated.");o.descriptor=l.descriptor}else{if(a(l)){if(a(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+l.key+").");o.decorators=l.decorators}r(l,o)}else t.push(l)}return t}(p.d.map(o)),e);return d.initializeClassElements(p.F,u.elements),d.runClassFinishers(p.F,u.finishers)}(null,function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(n.g)()],key:"header",value:void 0},{kind:"get",static:!0,key:"styles",value:function(){return n.c`
      :host {
        background: var(
          --ha-card-background,
          var(--paper-card-background-color, white)
        );
        border-radius: var(--ha-card-border-radius, 2px);
        box-shadow: var(
          --ha-card-box-shadow,
          0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12),
          0 3px 1px -2px rgba(0, 0, 0, 0.2)
        );
        color: var(--primary-text-color);
        display: block;
        transition: all 0.3s ease-out;
        position: relative;
      }

      .card-header,
      :host ::slotted(.card-header) {
        color: var(--ha-card-header-color, --primary-text-color);
        font-family: var(--ha-card-header-font-family, inherit);
        font-size: var(--ha-card-header-font-size, 24px);
        letter-spacing: -0.012em;
        line-height: 32px;
        padding: 24px 16px 16px;
        display: block;
      }

      :host ::slotted(.card-content:not(:first-child)),
      slot:not(:first-child)::slotted(.card-content) {
        padding-top: 0px;
        margin-top: -8px;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
      }
    `}},{kind:"method",key:"render",value:function(){return n.f`
      ${this.header?n.f`
            <div class="card-header">${this.header}</div>
          `:n.f``}
      <slot></slot>
    `}}]}},n.a);customElements.define("ha-card",d)},173:function(e,t,i){"use strict";var n=i(185);t.a=(e=>void 0===e.attributes.friendly_name?Object(n.a)(e.entity_id).replace(/_/g," "):e.attributes.friendly_name||"")},175:function(e,t,i){"use strict";i.d(t,"a",function(){return o});var n=i(118);function o(e){return Object(n.a)(e.entity_id)}},176:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var n=i(116);const o={alert:"hass:alert",alexa:"hass:amazon-alexa",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",google_assistant:"hass:google-assistant",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weather:"hass:weather-cloudy",weblink:"hass:open-in-new"};function r(e,t){if(e in o)return o[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return t&&"off"===t?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===t?"hass:window-closed":"hass:window-open";case"lock":return t&&"unlocked"===t?"hass:lock-open":"hass:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"hass:cast-connected":"hass:cast";case"zwave":switch(t){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),n.a}}},177:function(e,t,i){"use strict";i.d(t,"a",function(){return r});i(107);const n=customElements.get("iron-icon");let o=!1;class r extends n{constructor(...e){super(...e),this._iconsetName=void 0}listen(e,t,n){super.listen(e,t,n),o||"mdi"!==this._iconsetName||(o=!0,i.e(72).then(i.bind(null,215)))}}customElements.define("ha-icon",r)},178:function(e,t,i){"use strict";i(4),i(44),i(41),i(52);var n=i(5),o=i(3);Object(n.a)({_template:o.a`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:"paper-item-body"})},179:function(e,t,i){"use strict";i.d(t,"c",function(){return s}),i.d(t,"b",function(){return h}),i.d(t,"a",function(){return F}),i.d(t,"e",function(){return R}),i.d(t,"d",function(){return o});var n=function(){},o={},r=[],a=[];function s(e,t){var i,s,l,c,d=a;for(c=arguments.length;c-- >2;)r.push(arguments[c]);for(t&&null!=t.children&&(r.length||r.push(t.children),delete t.children);r.length;)if((s=r.pop())&&void 0!==s.pop)for(c=s.length;c--;)r.push(s[c]);else"boolean"==typeof s&&(s=null),(l="function"!=typeof e)&&(null==s?s="":"number"==typeof s?s=String(s):"string"!=typeof s&&(l=!1)),l&&i?d[d.length-1]+=s:d===a?d=[s]:d.push(s),i=l;var h=new n;return h.nodeName=e,h.children=d,h.attributes=null==t?void 0:t,h.key=null==t?void 0:t.key,void 0!==o.vnode&&o.vnode(h),h}function l(e,t){for(var i in t)e[i]=t[i];return e}function c(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}var d="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function h(e,t){return s(e.nodeName,l(l({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var p=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,u=[];function m(e){!e._dirty&&(e._dirty=!0)&&1==u.push(e)&&(o.debounceRendering||d)(f)}function f(){for(var e;e=u.pop();)e._dirty&&V(e)}function v(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function g(e){var t=l({},e.attributes);t.children=e.children;var i=e.nodeName.defaultProps;if(void 0!==i)for(var n in i)void 0===t[n]&&(t[n]=i[n]);return t}function _(e){var t=e.parentNode;t&&t.removeChild(e)}function b(e,t,i,n,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)c(i,null),c(n,e);else if("class"!==t||o)if("style"===t){if(n&&"string"!=typeof n&&"string"!=typeof i||(e.style.cssText=n||""),n&&"object"==typeof n){if("string"!=typeof i)for(var r in i)r in n||(e.style[r]="");for(var r in n)e.style[r]="number"==typeof n[r]&&!1===p.test(r)?n[r]+"px":n[r]}}else if("dangerouslySetInnerHTML"===t)n&&(e.innerHTML=n.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),n?i||e.addEventListener(t,y,a):e.removeEventListener(t,y,a),(e._listeners||(e._listeners={}))[t]=n}else if("list"!==t&&"type"!==t&&!o&&t in e){try{e[t]=null==n?"":n}catch(l){}null!=n&&!1!==n||"spellcheck"==t||e.removeAttribute(t)}else{var s=o&&t!==(t=t.replace(/^xlink:?/,""));null==n||!1===n?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof n&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):e.setAttribute(t,n))}else e.className=n||""}function y(e){return this._listeners[e.type](o.event&&o.event(e)||e)}var w=[],x=0,C=!1,k=!1;function I(){for(var e;e=w.shift();)o.afterMount&&o.afterMount(e),e.componentDidMount&&e.componentDidMount()}function E(e,t,i,n,o,r){x++||(C=null!=o&&void 0!==o.ownerSVGElement,k=null!=e&&!("__preactattr_"in e));var a=S(e,t,i,n,r);return o&&a.parentNode!==o&&o.appendChild(a),--x||(k=!1,r||I()),a}function S(e,t,i,n,o){var r=e,a=C;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(r=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(r,e),O(e,!0))),r.__preactattr_=!0,r;var s,l,c=t.nodeName;if("function"==typeof c)return function(e,t,i,n){var o=e&&e._component,r=o,a=e,s=o&&e._componentConstructor===t.nodeName,l=s,c=g(t);for(;o&&!l&&(o=o._parentComponent);)l=o.constructor===t.nodeName;o&&l&&(!n||o._component)?(z(o,c,3,i,n),e=o.base):(r&&!s&&($(r),e=a=null),o=A(t.nodeName,c,i),e&&!o.nextBase&&(o.nextBase=e,a=null),z(o,c,1,i,n),e=o.base,a&&e!==a&&(a._component=null,O(a,!1)));return e}(e,t,i,n);if(C="svg"===c||"foreignObject"!==c&&C,c=String(c),(!e||!v(e,c))&&(s=c,(l=C?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,r=l,e)){for(;e.firstChild;)r.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(r,e),O(e,!0)}var d=r.firstChild,h=r.__preactattr_,p=t.children;if(null==h){h=r.__preactattr_={};for(var u=r.attributes,m=u.length;m--;)h[u[m].name]=u[m].value}return!k&&p&&1===p.length&&"string"==typeof p[0]&&null!=d&&void 0!==d.splitText&&null==d.nextSibling?d.nodeValue!=p[0]&&(d.nodeValue=p[0]):(p&&p.length||null!=d)&&function(e,t,i,n,o){var r,a,s,l,c,d=e.childNodes,h=[],p={},u=0,m=0,f=d.length,g=0,b=t?t.length:0;if(0!==f)for(var y=0;y<f;y++){var w=d[y],x=w.__preactattr_,C=b&&x?w._component?w._component.__key:x.key:null;null!=C?(u++,p[C]=w):(x||(void 0!==w.splitText?!o||w.nodeValue.trim():o))&&(h[g++]=w)}if(0!==b)for(var y=0;y<b;y++){l=t[y],c=null;var C=l.key;if(null!=C)u&&void 0!==p[C]&&(c=p[C],p[C]=void 0,u--);else if(m<g)for(r=m;r<g;r++)if(void 0!==h[r]&&(k=a=h[r],E=o,"string"==typeof(I=l)||"number"==typeof I?void 0!==k.splitText:"string"==typeof I.nodeName?!k._componentConstructor&&v(k,I.nodeName):E||k._componentConstructor===I.nodeName)){c=a,h[r]=void 0,r===g-1&&g--,r===m&&m++;break}c=S(c,l,i,n),s=d[y],c&&c!==e&&c!==s&&(null==s?e.appendChild(c):c===s.nextSibling?_(s):e.insertBefore(c,s))}var k,I,E;if(u)for(var y in p)void 0!==p[y]&&O(p[y],!1);for(;m<=g;)void 0!==(c=h[g--])&&O(c,!1)}(r,p,i,n,k||null!=h.dangerouslySetInnerHTML),function(e,t,i){var n;for(n in i)t&&null!=t[n]||null==i[n]||b(e,n,i[n],i[n]=void 0,C);for(n in t)"children"===n||"innerHTML"===n||n in i&&t[n]===("value"===n||"checked"===n?e[n]:i[n])||b(e,n,i[n],i[n]=t[n],C)}(r,t.attributes,h),C=a,r}function O(e,t){var i=e._component;i?$(i):(null!=e.__preactattr_&&c(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||_(e),P(e))}function P(e){for(e=e.lastChild;e;){var t=e.previousSibling;O(e,!0),e=t}}var T=[];function A(e,t,i){var n,o=T.length;for(e.prototype&&e.prototype.render?(n=new e(t,i),F.call(n,t,i)):((n=new F(t,i)).constructor=e,n.render=j);o--;)if(T[o].constructor===e)return n.nextBase=T[o].nextBase,T.splice(o,1),n;return n}function j(e,t,i){return this.constructor(e,i)}function z(e,t,i,n,r){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,n)),n&&n!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=n),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==i&&(1!==i&&!1===o.syncComponentUpdates&&e.base?m(e):V(e,1,r)),c(e.__ref,e))}function V(e,t,i,n){if(!e._disable){var r,a,s,c=e.props,d=e.state,h=e.context,p=e.prevProps||c,u=e.prevState||d,m=e.prevContext||h,f=e.base,v=e.nextBase,_=f||v,b=e._component,y=!1,C=m;if(e.constructor.getDerivedStateFromProps&&(d=l(l({},d),e.constructor.getDerivedStateFromProps(c,d)),e.state=d),f&&(e.props=p,e.state=u,e.context=m,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(c,d,h)?y=!0:e.componentWillUpdate&&e.componentWillUpdate(c,d,h),e.props=c,e.state=d,e.context=h),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!y){r=e.render(c,d,h),e.getChildContext&&(h=l(l({},h),e.getChildContext())),f&&e.getSnapshotBeforeUpdate&&(C=e.getSnapshotBeforeUpdate(p,u));var k,S,P=r&&r.nodeName;if("function"==typeof P){var T=g(r);(a=b)&&a.constructor===P&&T.key==a.__key?z(a,T,1,h,!1):(k=a,e._component=a=A(P,T,h),a.nextBase=a.nextBase||v,a._parentComponent=e,z(a,T,0,h,!1),V(a,1,i,!0)),S=a.base}else s=_,(k=b)&&(s=e._component=null),(_||1===t)&&(s&&(s._component=null),S=E(s,r,h,i||!f,_&&_.parentNode,!0));if(_&&S!==_&&a!==b){var j=_.parentNode;j&&S!==j&&(j.replaceChild(S,_),k||(_._component=null,O(_,!1)))}if(k&&$(k),e.base=S,S&&!n){for(var F=e,R=e;R=R._parentComponent;)(F=R).base=S;S._component=F,S._componentConstructor=F.constructor}}for(!f||i?w.push(e):y||(e.componentDidUpdate&&e.componentDidUpdate(p,u,C),o.afterUpdate&&o.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);x||n||I()}}function $(e){o.beforeUnmount&&o.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var i=e._component;i?$(i):t&&(null!=t.__preactattr_&&c(t.__preactattr_.ref,null),e.nextBase=t,_(t),T.push(e),P(t)),c(e.__ref,null)}function F(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function R(e,t,i){return E(i,e,{},!1,t,!1)}l(F.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=l(l({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),m(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),V(this,2)},render:function(){}})},183:function(e,t,i){"use strict";var n=i(0),o=(i(177),i(175)),r=i(189);function a(e){var t,i=h(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function s(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function l(e){return e.decorators&&e.decorators.length}function c(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function h(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}let p=function(e,t,i,n){var o=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(i){t.forEach(function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach(function(n){t.forEach(function(t){var o=t.placement;if(t.kind===n&&("static"===o||"prototype"===o)){var r="static"===o?e:i;this.defineClassElement(r,t)}},this)},this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var n=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],n=[],o={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,o)},this),e.forEach(function(e){if(!l(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),n.push.apply(n,t.finishers)},this),!t)return{elements:i,finishers:n};var r=this.decorateConstructor(i,t);return n.push.apply(n,r.finishers),r.finishers=n,r},addElementPlacement:function(e,t,i){var n=t[e.placement];if(!i&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var i=[],n=[],o=e.decorators,r=o.length-1;r>=0;r--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[r])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&n.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:n,extras:i}},decorateConstructor:function(e,t){for(var i=[],n=t.length-1;n>=0;n--){var o=this.fromClassDescriptor(e),r=this.toClassDescriptor((0,t[n])(o)||o);if(void 0!==r.finisher&&i.push(r.finisher),void 0!==r.elements){e=r.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=h(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var r={kind:t,key:i,placement:n,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),r.initializer=e.initializer),r},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),i=d(e,"finisher"),n=this.toElementDescriptors(e.extras);return{element:t,finisher:i,extras:n}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=d(e,"finisher"),n=this.toElementDescriptors(e.elements);return{elements:n,finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var n=(0,t[i])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}();if(n)for(var r=0;r<n.length;r++)o=n[r](o);var p=t(function(e){o.initializeInstanceElements(e,u.elements)},i),u=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===r.key&&e.placement===r.placement},n=0;n<e.length;n++){var o,r=e[n];if("method"===r.kind&&(o=t.find(i)))if(c(r.descriptor)||c(o.descriptor)){if(l(r)||l(o))throw new ReferenceError("Duplicated methods ("+r.key+") can't be decorated.");o.descriptor=r.descriptor}else{if(l(r)){if(l(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+r.key+").");o.decorators=r.decorators}s(r,o)}else t.push(r)}return t}(p.d.map(a)),e);return o.initializeClassElements(p.F,u.elements),o.runClassFinishers(p.F,u.finishers)}(null,function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[Object(n.g)()],key:"stateObj",value:void 0},{kind:"field",decorators:[Object(n.g)()],key:"overrideIcon",value:void 0},{kind:"field",decorators:[Object(n.h)("ha-icon")],key:"_icon",value:void 0},{kind:"method",key:"render",value:function(){const e=this.stateObj;return e?n.f`
      <ha-icon
        id="icon"
        data-domain=${Object(o.a)(e)}
        data-state=${e.state}
        .icon=${this.overrideIcon||Object(r.a)(e)}
      ></ha-icon>
    `:n.f``}},{kind:"method",key:"updated",value:function(e){if(!e.has("stateObj")||!this.stateObj)return;const t=this.stateObj,i={color:"",filter:""},n={backgroundImage:""};if(t)if(t.attributes.entity_picture&&!this.overrideIcon){let e=t.attributes.entity_picture;this.hass&&(e=this.hass.hassUrl(e)),n.backgroundImage=`url(${e})`,i.display="none"}else{if(t.attributes.hs_color){const e=t.attributes.hs_color[0],n=t.attributes.hs_color[1];n>10&&(i.color=`hsl(${e}, 100%, ${100-n/2}%)`)}if(t.attributes.brightness){const e=t.attributes.brightness;if("number"!=typeof e){const i=`Type error: state-badge expected number, but type of ${t.entity_id}.attributes.brightness is ${typeof e} (${e})`;console.warn(i)}i.filter=`brightness(${(e+245)/5}%)`}}Object.assign(this._icon.style,i),Object.assign(this.style,n)}},{kind:"get",static:!0,key:"styles",value:function(){return n.c`
      :host {
        position: relative;
        display: inline-block;
        width: 40px;
        color: var(--paper-item-icon-color, #44739e);
        border-radius: 50%;
        height: 40px;
        text-align: center;
        background-size: cover;
        line-height: 40px;
      }

      ha-icon {
        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
      }

      /* Color the icon if light or sun is on */
      ha-icon[data-domain="light"][data-state="on"],
      ha-icon[data-domain="switch"][data-state="on"],
      ha-icon[data-domain="binary_sensor"][data-state="on"],
      ha-icon[data-domain="fan"][data-state="on"],
      ha-icon[data-domain="sun"][data-state="above_horizon"] {
        color: var(--paper-item-icon-active-color, #fdd835);
      }

      /* Color the icon if unavailable */
      ha-icon[data-state="unavailable"] {
        color: var(--state-icon-unavailable-color);
      }
    `}}]}},n.a);customElements.define("state-badge",p)},184:function(e,t,i){"use strict";i(4),i(44),i(52),i(140);var n=i(5),o=i(3),r=i(117);Object(n.a)({_template:o.a`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,is:"paper-icon-item",behaviors:[r.a]})},185:function(e,t,i){"use strict";function n(e){return e.substr(e.indexOf(".")+1)}i.d(t,"a",function(){return n})},187:function(e,t,i){"use strict";i(105),i(90),i(184),i(178),i(222);var n=i(125),o=(i(183),i(173)),r=i(0),a=i(19);function s(e){var t,i=p(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function l(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function c(e){return e.decorators&&e.decorators.length}function d(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function h(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function p(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function u(e,t,i){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(i):o.value}})(e,t,i||e)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}let f=function(e,t,i,n){var o=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(i){t.forEach(function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach(function(n){t.forEach(function(t){var o=t.placement;if(t.kind===n&&("static"===o||"prototype"===o)){var r="static"===o?e:i;this.defineClassElement(r,t)}},this)},this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var n=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],n=[],o={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,o)},this),e.forEach(function(e){if(!c(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),n.push.apply(n,t.finishers)},this),!t)return{elements:i,finishers:n};var r=this.decorateConstructor(i,t);return n.push.apply(n,r.finishers),r.finishers=n,r},addElementPlacement:function(e,t,i){var n=t[e.placement];if(!i&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var i=[],n=[],o=e.decorators,r=o.length-1;r>=0;r--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[r])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&n.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:n,extras:i}},decorateConstructor:function(e,t){for(var i=[],n=t.length-1;n>=0;n--){var o=this.fromClassDescriptor(e),r=this.toClassDescriptor((0,t[n])(o)||o);if(void 0!==r.finisher&&i.push(r.finisher),void 0!==r.elements){e=r.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=p(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var r={kind:t,key:i,placement:n,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),r.initializer=e.initializer),r},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),i=h(e,"finisher"),n=this.toElementDescriptors(e.extras);return{element:t,finisher:i,extras:n}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=h(e,"finisher"),n=this.toElementDescriptors(e.elements);return{elements:n,finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var n=(0,t[i])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}();if(n)for(var r=0;r<n.length;r++)o=n[r](o);var a=t(function(e){o.initializeInstanceElements(e,u.elements)},i),u=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===r.key&&e.placement===r.placement},n=0;n<e.length;n++){var o,r=e[n];if("method"===r.kind&&(o=t.find(i)))if(d(r.descriptor)||d(o.descriptor)){if(c(r)||c(o))throw new ReferenceError("Duplicated methods ("+r.key+") can't be decorated.");o.descriptor=r.descriptor}else{if(c(r)){if(c(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+r.key+").");o.decorators=r.decorators}l(r,o)}else t.push(r)}return t}(a.d.map(s)),e);return o.initializeClassElements(a.F,u.elements),o.runClassFinishers(a.F,u.finishers)}(null,function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[Object(r.g)({type:Boolean})],key:"autofocus",value:void 0},{kind:"field",decorators:[Object(r.g)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[Object(r.g)({type:Boolean,attribute:"allow-custom-entity"})],key:"allowCustomEntity",value:void 0},{kind:"field",decorators:[Object(r.g)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(r.g)()],key:"label",value:void 0},{kind:"field",decorators:[Object(r.g)()],key:"value",value:void 0},{kind:"field",decorators:[Object(r.g)({attribute:"domain-filter"})],key:"domainFilter",value:void 0},{kind:"field",decorators:[Object(r.g)()],key:"entityFilter",value:void 0},{kind:"field",decorators:[Object(r.g)({type:Boolean})],key:"_opened",value:void 0},{kind:"field",decorators:[Object(r.g)()],key:"_hass",value:void 0},{kind:"field",key:"_getStates",value(){return Object(n.a)((e,t,i)=>{let n=[];if(!e)return[];let o=Object.keys(e.states);return t&&(o=o.filter(e=>e.substr(0,e.indexOf("."))===t)),n=o.sort().map(t=>e.states[t]),i&&(n=n.filter(e=>e.entity_id===this.value||i(e))),n})}},{kind:"method",key:"updated",value:function(e){u(m(i.prototype),"updated",this).call(this,e),e.has("hass")&&!this._opened&&(this._hass=this.hass)}},{kind:"method",key:"render",value:function(){const e=this._getStates(this._hass,this.domainFilter,this.entityFilter);return r.f`
      <vaadin-combo-box-light
        item-value-path="entity_id"
        item-label-path="entity_id"
        .items=${e}
        .value=${this._value}
        .allowCustomValue=${this.allowCustomEntity}
        .renderer=${(e,t,i)=>{e.firstElementChild||(e.innerHTML='\n      <style>\n        paper-icon-item {\n          margin: -10px;\n          padding: 0;\n        }\n      </style>\n      <paper-icon-item>\n        <state-badge state-obj="[[item]]" slot="item-icon"></state-badge>\n        <paper-item-body two-line="">\n          <div class=\'name\'>[[_computeStateName(item)]]</div>\n          <div secondary>[[item.entity_id]]</div>\n        </paper-item-body>\n      </paper-icon-item>\n    '),e.querySelector("state-badge").stateObj=i.item,e.querySelector(".name").textContent=Object(o.a)(i.item),e.querySelector("[secondary]").textContent=i.item.entity_id}}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
      >
        <paper-input
          .autofocus=${this.autofocus}
          .label=${void 0===this.label&&this._hass?this._hass.localize("ui.components.entity.entity-picker.entity"):this.label}
          .value=${this._value}
          .disabled=${this.disabled}
          class="input"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        >
          ${this.value?r.f`
                <paper-icon-button
                  aria-label="Clear"
                  slot="suffix"
                  class="clear-button"
                  icon="hass:close"
                  no-ripple
                >
                  Clear
                </paper-icon-button>
              `:""}
          ${e.length>0?r.f`
                <paper-icon-button
                  aria-label="Show entities"
                  slot="suffix"
                  class="toggle-button"
                  .icon=${this._opened?"hass:menu-up":"hass:menu-down"}
                >
                  Toggle
                </paper-icon-button>
              `:""}
        </paper-input>
      </vaadin-combo-box-light>
    `}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_valueChanged",value:function(e){e.detail.value!==this._value&&(this.value=e.detail.value,setTimeout(()=>{Object(a.a)(this,"value-changed",{value:this.value}),Object(a.a)(this,"change")},0))}},{kind:"get",static:!0,key:"styles",value:function(){return r.c`
      paper-input > paper-icon-button {
        width: 24px;
        height: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      [hidden] {
        display: none;
      }
    `}}]}},r.a);customElements.define("ha-entity-picker",f)},189:function(e,t,i){"use strict";var n=i(116),o=i(118),r=i(176);const a={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"};i.d(t,"a",function(){return l});const s={binary_sensor:function(e){const t=e.state&&"off"===e.state;switch(e.attributes.device_class){case"battery":return t?"hass:battery":"hass:battery-outline";case"cold":return t?"hass:thermometer":"hass:snowflake";case"connectivity":return t?"hass:server-network-off":"hass:server-network";case"door":return t?"hass:door-closed":"hass:door-open";case"garage_door":return t?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return t?"hass:shield-check":"hass:alert";case"heat":return t?"hass:thermometer":"hass:fire";case"light":return t?"hass:brightness-5":"hass:brightness-7";case"lock":return t?"hass:lock":"hass:lock-open";case"moisture":return t?"hass:water-off":"hass:water";case"motion":return t?"hass:walk":"hass:run";case"occupancy":return t?"hass:home-outline":"hass:home";case"opening":return t?"hass:square":"hass:square-outline";case"plug":return t?"hass:power-plug-off":"hass:power-plug";case"presence":return t?"hass:home-outline":"hass:home";case"sound":return t?"hass:music-note-off":"hass:music-note";case"vibration":return t?"hass:crop-portrait":"hass:vibrate";case"window":return t?"hass:window-closed":"hass:window-open";default:return t?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(e){const t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"hass:garage-open":"hass:garage";case"door":return t?"hass:door-open":"hass:door-closed";case"window":return t?"hass:window-open":"hass:window-closed";default:return Object(r.a)("cover",e.state)}},sensor:function(e){const t=e.attributes.device_class;if(t&&t in a)return a[t];if("battery"===t){const t=Number(e.state);if(isNaN(t))return"hass:battery-unknown";const i=10*Math.round(t/10);return i>=100?"hass:battery":i<=0?"hass:battery-alert":`hass:battery-${i}`}const i=e.attributes.unit_of_measurement;return i===n.j||i===n.k?"hass:thermometer":Object(r.a)("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?Object(r.a)("input_datetime"):"hass:calendar":"hass:clock"}};function l(e){if(!e)return n.a;if(e.attributes.icon)return e.attributes.icon;const t=Object(o.a)(e.entity_id);return t in s?s[t](e):Object(r.a)(t,e.state)}},191:function(e,t,i){"use strict";var n=i(3),o=i(25);i(92);customElements.define("ha-config-section",class extends o.a{static get template(){return n.a`
      <style include="iron-flex ha-style">
        .content {
          padding: 28px 20px 0;
          max-width: 1040px;
          margin: 0 auto;
        }

        .header {
          @apply --paper-font-display1;
          opacity: var(--dark-primary-opacity);
        }

        .together {
          margin-top: 32px;
        }

        .intro {
          @apply --paper-font-subhead;
          width: 100%;
          max-width: 400px;
          margin-right: 40px;
          opacity: var(--dark-primary-opacity);
        }

        .panel {
          margin-top: -24px;
        }

        .panel ::slotted(*) {
          margin-top: 24px;
          display: block;
        }

        .narrow.content {
          max-width: 640px;
        }
        .narrow .together {
          margin-top: 20px;
        }
        .narrow .header {
          @apply --paper-font-headline;
        }
        .narrow .intro {
          font-size: 14px;
          padding-bottom: 20px;
          margin-right: 0;
          max-width: 500px;
        }
      </style>
      <div class$="[[computeContentClasses(isWide)]]">
        <div class="header"><slot name="header"></slot></div>
        <div class$="[[computeClasses(isWide)]]">
          <div class="intro"><slot name="introduction"></slot></div>
          <div class="panel flex-auto"><slot></slot></div>
        </div>
      </div>
    `}static get properties(){return{hass:{type:Object},narrow:{type:Boolean},isWide:{type:Boolean,value:!1}}}computeContentClasses(e){return e?"content ":"content narrow"}computeClasses(e){return"together layout "+(e?"horizontal":"vertical narrow")}})},199:function(e,t,i){"use strict";i(4),i(44);var n=i(5),o=i(1),r=i(3),a=i(124);Object(n.a)({_template:r.a`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,is:"app-header-layout",behaviors:[a.a],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return Object(o.a)(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var e=this.header;if(this.isAttached&&e){this.$.wrapper.classList.remove("initializing"),e.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var t=e.offsetHeight;this.hasScrollingRegion?(e.style.left="",e.style.right=""):requestAnimationFrame(function(){var t=this.getBoundingClientRect(),i=document.documentElement.clientWidth-t.right;e.style.left=t.left+"px",e.style.right=i+"px"}.bind(this));var i=this.$.contentContainer.style;e.fixed&&!e.condenses&&this.hasScrollingRegion?(i.marginTop=t+"px",i.paddingTop=""):(i.paddingTop=t+"px",i.marginTop="")}}})},200:function(e,t,i){"use strict";function n(e,t){const i=this.props[e];if(t.target.value===i[t.target.name])return;const n=Object.assign({},i);t.target.value?n[t.target.name]=t.target.value:delete n[t.target.name],this.props.onChange(this.props.index,n)}i.d(t,"a",function(){return n})},204:function(e,t,i){"use strict";i(4),i(83);const n=i(3).a`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;n.setAttribute("style","display: none;"),document.head.appendChild(n.content)},211:function(e,t,i){"use strict";i(4),i(44);var n=i(34),o=i(60),r=i(5),a=i(1),s=i(3);Object(r.a)({_template:s.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        border: 1px solid;
        padding: 2px;
        -moz-appearance: textarea;
        -webkit-appearance: textarea;
        overflow: hidden;
      }

      .mirror-text {
        visibility: hidden;
        word-wrap: break-word;
        @apply --iron-autogrow-textarea;
      }

      .fit {
        @apply --layout-fit;
      }

      textarea {
        position: relative;
        outline: none;
        border: none;
        resize: none;
        background: inherit;
        color: inherit;
        /* see comments in template */
        width: 100%;
        height: 100%;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        text-align: inherit;
        @apply --iron-autogrow-textarea;
      }

      textarea::-webkit-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea::-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-ms-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }
    </style>

    <!-- the mirror sizes the input/textarea so it grows with typing -->
    <!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML -->
    <div id="mirror" class="mirror-text" aria-hidden="true">&nbsp;</div>

    <!-- size the input/textarea with a div, because the textarea has intrinsic size in ff -->
    <div class="textarea-container fit">
      <textarea id="textarea" name\$="[[name]]" aria-label\$="[[label]]" autocomplete\$="[[autocomplete]]" autofocus\$="[[autofocus]]" inputmode\$="[[inputmode]]" placeholder\$="[[placeholder]]" readonly\$="[[readonly]]" required\$="[[required]]" disabled\$="[[disabled]]" rows\$="[[rows]]" minlength\$="[[minlength]]" maxlength\$="[[maxlength]]"></textarea>
    </div>
`,is:"iron-autogrow-textarea",behaviors:[o.a,n.a],properties:{value:{observer:"_valueChanged",type:String,notify:!0},bindValue:{observer:"_bindValueChanged",type:String,notify:!0},rows:{type:Number,value:1,observer:"_updateCached"},maxRows:{type:Number,value:0,observer:"_updateCached"},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,value:!1},inputmode:{type:String},placeholder:{type:String},readonly:{type:String},required:{type:Boolean},minlength:{type:Number},maxlength:{type:Number},label:{type:String}},listeners:{input:"_onInput"},get textarea(){return this.$.textarea},get selectionStart(){return this.$.textarea.selectionStart},get selectionEnd(){return this.$.textarea.selectionEnd},set selectionStart(e){this.$.textarea.selectionStart=e},set selectionEnd(e){this.$.textarea.selectionEnd=e},attached:function(){navigator.userAgent.match(/iP(?:[oa]d|hone)/)&&(this.$.textarea.style.marginLeft="-3px")},validate:function(){var e=this.$.textarea.validity.valid;return e&&(this.required&&""===this.value?e=!1:this.hasValidator()&&(e=o.a.validate.call(this,this.value))),this.invalid=!e,this.fire("iron-input-validate"),e},_bindValueChanged:function(e){this.value=e},_valueChanged:function(e){var t=this.textarea;t&&(t.value!==e&&(t.value=e||0===e?e:""),this.bindValue=e,this.$.mirror.innerHTML=this._valueForMirror(),this.fire("bind-value-changed",{value:this.bindValue}))},_onInput:function(e){var t=Object(a.a)(e).path;this.value=t?t[0].value:e.target.value},_constrain:function(e){var t;for(e=e||[""],t=this.maxRows>0&&e.length>this.maxRows?e.slice(0,this.maxRows):e.slice(0);this.rows>0&&t.length<this.rows;)t.push("");return t.join("<br/>")+"&#160;"},_valueForMirror:function(){var e=this.textarea;if(e)return this.tokens=e&&e.value?e.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n"):[""],this._constrain(this.tokens)},_updateCached:function(){this.$.mirror.innerHTML=this._constrain(this.tokens)}});i(112),i(113),i(114);var l=i(59),c=i(94);Object(r.a)({_template:s.a`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container no-label-float$="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <iron-autogrow-textarea class="paper-input-input" slot="input" id$="[[_inputId]]" aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" bind-value="{{value}}" invalid="{{invalid}}" validator$="[[validator]]" disabled$="[[disabled]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" autocapitalize$="[[autocapitalize]]" rows$="[[rows]]" max-rows$="[[maxRows]]" on-change="_onChange"></iron-autogrow-textarea>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
`,is:"paper-textarea",behaviors:[c.a,l.a],properties:{_ariaLabelledBy:{observer:"_ariaLabelledByChanged",type:String},_ariaDescribedBy:{observer:"_ariaDescribedByChanged",type:String},value:{type:String},rows:{type:Number,value:1},maxRows:{type:Number,value:0}},get selectionStart(){return this.$.input.textarea.selectionStart},set selectionStart(e){this.$.input.textarea.selectionStart=e},get selectionEnd(){return this.$.input.textarea.selectionEnd},set selectionEnd(e){this.$.input.textarea.selectionEnd=e},_ariaLabelledByChanged:function(e){this._focusableElement.setAttribute("aria-labelledby",e)},_ariaDescribedByChanged:function(e){this._focusableElement.setAttribute("aria-describedby",e)},get _focusableElement(){return this.inputElement.textarea}})},216:function(e,t,i){"use strict";i(4),i(44);var n=i(5),o=i(1),r=i(3),a=i(124),s=i(253);Object(n.a)({_template:r.a`
    <style>
      :host {
        position: relative;
        display: block;
        transition-timing-function: linear;
        transition-property: -webkit-transform;
        transition-property: transform;
      }

      :host::before {
        position: absolute;
        right: 0px;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: "";
        transition: opacity 0.4s;
        pointer-events: none;
        opacity: 0;
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        will-change: opacity;
        @apply --app-header-shadow;
      }

      :host([shadow])::before {
        opacity: 1;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
      }

      #backgroundFrontLayer,
      #backgroundRearLayer {
        @apply --layout-fit;
        height: 100%;
        pointer-events: none;
        background-size: cover;
      }

      #backgroundFrontLayer {
        @apply --app-header-background-front-layer;
      }

      #backgroundRearLayer {
        opacity: 0;
        @apply --app-header-background-rear-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled])::after,
      :host([disabled]) #backgroundFrontLayer,
      :host([disabled]) #backgroundRearLayer,
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]),
      :host([silent-scroll])::after,
      :host([silent-scroll]) #backgroundFrontLayer,
      :host([silent-scroll]) #backgroundRearLayer {
        transition: none !important;
      }

      :host([disabled]) ::slotted(app-toolbar:first-of-type),
      :host([disabled]) ::slotted([sticky]),
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),
      :host([silent-scroll]) ::slotted([sticky]) {
        transition: none !important;
      }

    </style>
    <div id="contentContainer">
      <slot id="slot"></slot>
    </div>
`,is:"app-header",behaviors:[s.a,a.a],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef)return this._stickyElRef;for(var e,t=Object(o.a)(this.$.slot).getDistributedNodes(),i=0;e=t[i];i++)if(e.nodeType===Node.ELEMENT_NODE){if(e.hasAttribute("sticky")){this._stickyElRef=e;break}this._stickyElRef||(this._stickyElRef=e)}return this._stickyElRef},_configChanged:function(){this.resetLayout(),this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var e=this._clampedScrollTop,t=0===this._height||0===e,i=this.disabled;this._height=this.offsetHeight,this._stickyElRef=null,this.disabled=!0,t||this._updateScrollState(0,!0),this._mayMove()?this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0:this._dHeight=0,this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0,this._setUpEffect(),t?this._updateScrollState(e,!0):(this._updateScrollState(this._lastScrollTop,!0),this._layoutIfDirty()),this.disabled=i}},_updateScrollState:function(e,t){if(0!==this._height){var i=0,n=0,o=this._top,r=(this._lastScrollTop,this._maxHeaderTop),a=e-this._lastScrollTop,s=Math.abs(a),l=e>this._lastScrollTop,c=performance.now();if(this._mayMove()&&(n=this._clamp(this.reveals?o+a:e,0,r)),e>=this._dHeight&&(n=this.condenses&&!this.fixed?Math.max(this._dHeight,n):n,this.style.transitionDuration="0ms"),this.reveals&&!this.disabled&&s<100&&((c-this._initTimestamp>300||this._wasScrollingDown!==l)&&(this._initScrollTop=e,this._initTimestamp=c),e>=r))if(Math.abs(this._initScrollTop-e)>30||s>10){l&&e>=r?n=r:!l&&e>=this._dHeight&&(n=this.condenses&&!this.fixed?this._dHeight:0);var d=a/(c-this._lastTimestamp);this.style.transitionDuration=this._clamp((n-o)/d,0,300)+"ms"}else n=this._top;i=0===this._dHeight?e>0?1:0:n/this._dHeight,t||(this._lastScrollTop=e,this._top=n,this._wasScrollingDown=l,this._lastTimestamp=c),(t||i!==this._progress||o!==n||0===e)&&(this._progress=i,this._runEffects(i,n),this._transformHeader(n))}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return this._dHeight>0&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?this._clampedScrollTop>0:this._clampedScrollTop-this._maxHeaderTop>=0},_transformHeader:function(e){this.translate3d(0,-e+"px",0),this._stickyEl&&this.translate3d(0,this.condenses&&e>=this._stickyElTop?Math.min(e,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)},_clamp:function(e,t,i){return Math.min(i,Math.max(t,e))},_ensureBgContainers:function(){this._bgContainer||(this._bgContainer=document.createElement("div"),this._bgContainer.id="background",this._bgRear=document.createElement("div"),this._bgRear.id="backgroundRearLayer",this._bgContainer.appendChild(this._bgRear),this._bgFront=document.createElement("div"),this._bgFront.id="backgroundFrontLayer",this._bgContainer.appendChild(this._bgFront),Object(o.a)(this.root).insertBefore(this._bgContainer,this.$.contentContainer))},_getDOMRef:function(e){switch(e){case"backgroundFrontLayer":return this._ensureBgContainers(),this._bgFront;case"backgroundRearLayer":return this._ensureBgContainers(),this._bgRear;case"background":return this._ensureBgContainers(),this._bgContainer;case"mainTitle":return Object(o.a)(this).querySelector("[main-title]");case"condensedTitle":return Object(o.a)(this).querySelector("[condensed-title]")}return null},getScrollState:function(){return{progress:this._progress,top:this._top}}})},222:function(e,t,i){"use strict";i(202),i(195),i(196),i(327);var n=i(3);const o=n.a`<dom-module id="lumo-vaadin-overlay" theme-for="vaadin-overlay">
  <template>
    <style include="lumo-overlay">
      /* stylelint-disable no-empty-source */
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);var r=i(252);i(292);const a=n.a`<dom-module id="lumo-combo-box-overlay" theme-for="vaadin-combo-box-overlay">
  <template>
    <style include="lumo-overlay lumo-menu-overlay-core">
      [part="content"] {
        padding: 0;
      }

      :host {
        /* TODO: using a legacy mixin (unsupported) */
        --iron-list-items-container: {
          border-width: var(--lumo-space-xs);
          border-style: solid;
          border-color: transparent;
        };
      }

      /* TODO: workaround ShadyCSS issue when using inside of the dom-if */
      :host([opened]) {
        --iron-list-items-container_-_border-width: var(--lumo-space-xs);
        --iron-list-items-container_-_border-style: solid;
        --iron-list-items-container_-_border-color: transparent;
      }

      /* Loading state */

      /* When items are empty, the sinner needs some room */
      :host(:not([closing])) [part~="content"] {
        min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
      }

      [part~="overlay"] {
        position: relative;
      }

      :host([loading]) [part~="loader"] {
        box-sizing: border-box;
        width: var(--lumo-icon-size-s);
        height: var(--lumo-icon-size-s);
        position: absolute;
        z-index: 1;
        left: var(--lumo-space-s);
        right: var(--lumo-space-s);
        top: var(--lumo-space-s);
        margin-left: auto;
        margin-inline-start: auto;
        margin-inline-end: 0;
        border: 2px solid transparent;
        border-color:
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color)
          var(--lumo-primary-color);
        border-radius: calc(0.5 * var(--lumo-icon-size-s));
        opacity: 0;
        animation:
          1s linear infinite lumo-combo-box-loader-rotate,
          .3s .1s lumo-combo-box-loader-fade-in both;
        pointer-events: none;
      }

      @keyframes lumo-combo-box-loader-fade-in {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }

      @keyframes lumo-combo-box-loader-rotate {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(a.content);i(237),i(214),i(221);const s=document.createElement("template");s.innerHTML='<dom-module id="lumo-item" theme-for="vaadin-item">\n  <template>\n    <style>\n      :host {\n        display: flex;\n        align-items: center;\n        box-sizing: border-box;\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        line-height: var(--lumo-line-height-xs);\n        padding: 0.5em 1em;\n        min-height: var(--lumo-size-m);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      /* Selectable items have a checkmark icon */\n      :host([tabindex])::before {\n        display: var(--_lumo-item-selected-icon-display, none);\n        content: var(--lumo-icons-checkmark);\n        font-family: lumo-icons;\n        font-size: var(--lumo-icon-size-m);\n        line-height: 1;\n        font-weight: normal;\n        width: 1em;\n        height: 1em;\n        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;\n        color: var(--lumo-primary-text-color);\n        flex: none;\n        opacity: 0;\n        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;\n      }\n\n      :host([selected])::before {\n        opacity: 1;\n      }\n\n      :host([active]:not([selected]))::before {\n        transform: scale(0.8);\n        opacity: 0;\n        transition-duration: 0s;\n      }\n\n      [part="content"] {\n        flex: auto;\n      }\n\n      /* Disabled item */\n\n      :host([disabled]) {\n        color: var(--lumo-disabled-text-color);\n        cursor: default;\n        pointer-events: none;\n      }\n\n      /* Slotted icons */\n\n      :host ::slotted(iron-icon) {\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(s.content);var l=i(25),c=i(198);const d=e=>(class extends e{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}constructor(){super(),this.value}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");null!==e&&(this.value=e),this.addEventListener("focus",e=>this._setFocused(!0),!0),this.addEventListener("blur",e=>this._setFocused(!1),!0),this.addEventListener("mousedown",e=>{this._setActive(this._mousedown=!0);const t=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)}),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("keyup",e=>this._onKeyup(e))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){e?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(e){e?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(e){e?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(e){/^( |SpaceBar|Enter)$/.test(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this._setActive(!0))}_onKeyup(e){this.hasAttribute("active")&&(this._setActive(!1),this.click())}});class h extends(d(Object(c.a)(l.a))){static get template(){return n.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>
    <div part="content">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-item"}static get version(){return"2.1.0"}}customElements.define(h.is,h);const p=n.a`<dom-module id="lumo-combo-box-item" theme-for="vaadin-combo-box-item">
  <template>
    <style include="lumo-item">
      /* TODO partly duplicated from vaadin-list-box styles. Should find a way to make it DRY */

      :host {
        cursor: default;
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        padding-left: calc(var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        transition: background-color 100ms;
        border-radius: var(--lumo-border-radius);
        overflow: hidden;
        --_lumo-item-selected-icon-display: block;
      }

      /* ShadyCSS workaround (show the selected item checkmark) */
      :host::before {
        display: block;
      }

      :host(:hover) {
        background-color: var(--lumo-primary-color-10pct);
      }

      :host([focused]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        :host(:hover) {
          background-color: transparent;
        }

        :host([focused]:not([disabled])) {
          box-shadow: none;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(p.content);var u=i(250),m=i(11),f=i(24),v=i(32),g=i(91),_=i(31),b=i(62);const y=class{toString(){return""}},w=e=>(class extends e{static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},disabled:{type:Boolean,value:!1,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array},value:{type:String,observer:"_valueChanged",notify:!0,value:""},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,name:{type:String},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_toggleElement:Object,_clearElement:Object,_inputElementValue:String,_closeOnBlurIsPrevented:Boolean,_previousDocumentPointerEvents:String,_itemTemplate:Object}}static get observers(){return["_filterChanged(filter, itemValuePath, itemLabelPath)","_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)","_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)","_templateOrRendererChanged(_itemTemplate, renderer)","_loadingChanged(loading)","_selectedItemChanged(selectedItem, itemLabelPath)","_toggleElementChanged(_toggleElement)"]}ready(){super.ready(),this.addEventListener("focusout",e=>{const t=this.$.overlay.$.dropdown;t&&t.$&&e.relatedTarget===t.$.overlay?e.composedPath()[0].focus():this._closeOnBlurIsPrevented||this.close()}),this._lastCommittedValue=this.value,g.a.requestAvailability(),this.$.overlay.addEventListener("selection-changed",this._overlaySelectedItemChanged.bind(this)),this.addEventListener("vaadin-combo-box-dropdown-closed",this._onClosed.bind(this)),this.addEventListener("vaadin-combo-box-dropdown-opened",this._onOpened.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this)),this.addEventListener("click",this._onClick.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-touch-action",this._onOverlayTouchAction.bind(this)),this.addEventListener("touchend",e=>{this._clearElement&&e.composedPath()[0]===this._clearElement&&(e.preventDefault(),this._clear())}),this._observer=new b.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)})}render(){this.$.overlay._selector&&this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item").forEach(e=>e._render())}_setTemplateFromNodes(e){this._itemTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._itemTemplate}_removeNewRendererOrTemplate(e,t,i,n){e!==t?this._itemTemplate=void 0:i!==n&&(this.renderer=void 0)}_templateOrRendererChanged(e,t){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for combo box items");this._oldTemplate=e,this._oldRenderer=t}open(){this.disabled||this.readonly||(this.opened=!0)}close(){this.opened=!1}_openedChanged(e,t){void 0!==t&&(this.opened?(this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring"),this.$.overlay.touchDevice||this.focused||this.focus()):(this._openedWithFocusRing&&this.hasAttribute("focused")&&this.focusElement.setAttribute("focus-ring",""),this._onClosed()))}_onOverlayTouchAction(e){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_onClick(e){this._closeOnBlurIsPrevented=!0;const t=e.composedPath();-1!==t.indexOf(this._clearElement)?(this._clear(),this.focus()):-1!==t.indexOf(this.inputElement)&&(t.indexOf(this._toggleElement)>-1&&this.opened?this.close():this.open()),this._closeOnBlurIsPrevented=!1}_onKeyDown(e){this._isEventKey(e,"down")?(this._closeOnBlurIsPrevented=!0,this._onArrowDown(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):this._isEventKey(e,"up")?(this._closeOnBlurIsPrevented=!0,this._onArrowUp(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):this._isEventKey(e,"enter")?this._onEnter(e):this._isEventKey(e,"esc")&&this._onEscape(e)}_isEventKey(e,t){return _.a.keyboardEventMatchesKeys(e,t)}_getItemLabel(e){return this.$.overlay.getItemLabel(e)}_getItemValue(e){let t=e&&this.itemValuePath?this.get(this.itemValuePath,e):void 0;return void 0===t&&(t=e?e.toString():""),t}_onArrowDown(){this.opened?this.$.overlay._items&&(this._focusedIndex=Math.min(this.$.overlay._items.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel()):this.open()}_onArrowUp(){this.opened?(this._focusedIndex>-1?this._focusedIndex=Math.max(0,this._focusedIndex-1):this.$.overlay._items&&(this._focusedIndex=this.$.overlay._items.length-1),this._prefillFocusedItemLabel()):this.open()}_prefillFocusedItemLabel(){this._focusedIndex>-1&&(this._inputElementValue="",setTimeout(()=>{this._inputElementValue=this._getItemLabel(this.$.overlay._focusedItem),this._markAllSelectionRange()},1))}_setSelectionRange(e,t){const i=this._nativeInput||this.inputElement;if(this.hasAttribute("focused")&&i&&i.setSelectionRange)try{i.setSelectionRange(e,t)}catch(n){}}_markAllSelectionRange(){void 0!==this._inputElementValue&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(void 0!==this._inputElementValue){const e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_onEnter(e){this.opened&&(this.allowCustomValue||""===this._inputElementValue||this._focusedIndex>-1)&&(this.close(),e.preventDefault())}_onEscape(e){this.opened&&(this._stopPropagation(e),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel())}_toggleElementChanged(e){e&&e.addEventListener("mousedown",e=>e.preventDefault())}_clear(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this.opened||this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this.close()}_onOpened(){Object(f.b)(),this.$.overlay.ensureItemsRendered(),this.$.overlay._selector.toggleScrollListener(!0),this.$.overlay.updateViewportBoundaries(),this.$.overlay._selector._increasePoolIfNeeded(),setTimeout(()=>this._resizeDropdown(),1),window.requestAnimationFrame(()=>this.$.overlay.adjustScrollPosition()),this._lastCommittedValue=this.value}_onClosed(){if(this.opened&&this.close(),this.$.overlay._items&&this._focusedIndex>-1){const e=this.$.overlay._items[this._focusedIndex];this.selectedItem!==e&&(this.selectedItem=e),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(""===this._inputElementValue||void 0===this._inputElementValue)this.selectedItem=null,this.allowCustomValue&&(this.value="");else if(this.allowCustomValue){const e=new CustomEvent("custom-value-set",{detail:this._inputElementValue,composed:!0,cancelable:!0,bubbles:!0});if(this.dispatchEvent(e),!e.defaultPrevented){const e=this._inputElementValue;this._selectItemForValue(e),this.value=e}}else this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):"";this._detectAndDispatchChange(),this._clearSelectionRange(),this.dataProvider||(this.filter="")}get _propertyForValue(){return"value"}_inputValueChanged(e){-1!==e.composedPath().indexOf(this.inputElement)&&(this._inputElementValue=this.inputElement[this._propertyForValue],this._filterFromInput())}_filterFromInput(e){this.opened||this.open(),this.filter===this._inputElementValue?this._filterChanged(this.filter,this.itemValuePath,this.itemLabelPath):this.filter=this._inputElementValue}_itemLabelPathChanged(e,t){"string"!=typeof e&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e,t,i){void 0!==e&&(this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged({path:"filteredItems",value:this.filteredItems},t,i))}_loadingChanged(e){e&&(this._focusedIndex=-1)}_revertInputValue(){""!==this.filter?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_resizeDropdown(){this.$.overlay.$.dropdown.notifyResize()}_updateHasValue(e){e?this.setAttribute("has-value",""):this.removeAttribute("has-value")}_selectedItemChanged(e,t){if(null==e)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._updateHasValue(""!==this.value),this._inputElementValue=this.value);else{const t=this._getItemValue(e);this.value!==t&&(this.value=t),this._updateHasValue(!0),this._inputElementValue=this._getItemLabel(e),this.inputElement&&(this.inputElement[this._propertyForValue]=this._inputElementValue)}this.$.overlay._selectedItem=e,this.filteredItems&&this.$.overlay._items&&(this._focusedIndex=this.filteredItems.indexOf(e))}_valueChanged(e,t){if(""!==e||void 0!==t){if(this._isValidValue(e)){let t;this._getItemValue(this.selectedItem)!==e?this._selectItemForValue(e):t=this.selectedItem,!t&&this.allowCustomValue&&(this._inputElementValue=e),this._updateHasValue(""!==this.value)}else this.selectedItem=null;this._lastCommittedValue=void 0}}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.items=t})}_itemsOrPathsChanged(e,t,i){if(void 0!==e.value&&("items"===e.path||"items.splices"===e.path)){this.filteredItems=this.items?this.items.slice(0):this.items;const e=this._indexOfValue(this.value,this.items);this._focusedIndex=e;const t=e>-1&&this.items[e];t&&(this.selectedItem=t)}}_filteredItemsChanged(e,t,i){void 0!==e.value&&("filteredItems"!==e.path&&"filteredItems.splices"!==e.path||(this._setOverlayItems(this.filteredItems),this._focusedIndex=this.opened?this.$.overlay.indexOfLabel(this.filter):this._indexOfValue(this.value,this.filteredItems),this.opened&&this._repositionOverlay()))}_filterItems(e,t){return e?e.filter(e=>(t=t?t.toString().toLowerCase():"",this._getItemLabel(e).toString().toLowerCase().indexOf(t)>-1)):e}_selectItemForValue(e){const t=this._indexOfValue(e,this.filteredItems),i=this.selectedItem;this.selectedItem=t>=0?this.filteredItems[t]:this.dataProvider&&void 0===this.selectedItem?void 0:null,null===this.selectedItem&&null===i&&this._selectedItemChanged(this.selectedItem)}_setOverlayItems(e){this.$.overlay.set("_items",e),this.opened&&this._resizeDropdown()}_repositionOverlay(){setTimeout(()=>{this._resizeDropdown(),this.$.overlay.updateViewportBoundaries(),this.$.overlay.ensureItemsRendered(),this.$.overlay._selector.notifyResize(),Object(f.b)()},1)}_indexOfValue(e,t){if(t&&this._isValidValue(e))for(let i=0;i<t.length;i++)if(this._getItemValue(t[i])===e)return i;return-1}_isValidValue(e){return null!=e}_overlaySelectedItemChanged(e){e.stopPropagation(),e.detail.item instanceof y||(this.opened&&this.close(),this.selectedItem!==e.detail.item&&(this.selectedItem=e.detail.item,this._detectAndDispatchChange()))}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){if(this.inputElement.validate)return this.inputElement.validate()}get _instanceProps(){return{item:!0,index:!0,selected:!0,focused:!0}}_ensureTemplatized(){if(!this._TemplateClass){const e=this._itemTemplate||this._getRootTemplate();e&&(this._TemplateClass=Object(v.b)(e,this,{instanceProps:this._instanceProps,forwardHostProp:function(e,t){const i=this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item");Array.prototype.forEach.call(i,i=>{i._itemTemplateInstance&&(i._itemTemplateInstance.set(e,t),i._itemTemplateInstance.notifyPath(e,t,!0))})}}))}}_getRootTemplate(){return Array.prototype.filter.call(this.children,e=>"TEMPLATE"===e.tagName)[0]}_preventInputBlur(){this._toggleElement&&this._toggleElement.addEventListener("click",this._preventDefault),this._clearElement&&this._clearElement.addEventListener("click",this._preventDefault)}_restoreInputBlur(){this._toggleElement&&this._toggleElement.removeEventListener("click",this._preventDefault),this._clearElement&&this._clearElement.removeEventListener("click",this._preventDefault)}_preventDefault(e){e.preventDefault()}_stopPropagation(e){e.stopPropagation()}}),x=e=>(class extends e{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new y}}}static get observers(){return["_dataProviderFilterChanged(filter, dataProvider)","_dataProviderClearFilter(dataProvider, opened, value)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}_dataProviderClearFilter(e,t,i){e&&this.filter&&(this.size=void 0,this._pendingRequests={},this.filter="",this.clearCache())}ready(){super.ready(),this.clearCache(),this.$.overlay.addEventListener("index-requested",e=>{const t=e.detail.index;if(void 0!==t){const e=this._getPageForIndex(t);this._shouldLoadPage(e)&&this._loadPage(e)}})}_dataProviderFilterChanged(){this.dataProvider&&this.opened&&(this.size=void 0,this._pendingRequests={},this.clearCache())}_ensureFirstPage(e){e&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldLoadPage(e){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const t=this.filteredItems[e*this.pageSize];return void 0!==t?t instanceof y:void 0===this.size}_loadPage(e){if(!this._pendingRequests[e]&&this.dataProvider){this.loading=!0;const t={page:e,pageSize:this.pageSize,filter:this.filter},i=(n,o)=>{if(this._pendingRequests[e]===i){if(this.filteredItems)this.splice("filteredItems",t.page*t.pageSize,n.length,...n);else{const e=[];e.splice(t.page*t.pageSize,n.length,...n),this.filteredItems=e}this._isValidValue(this.value)&&this._getItemValue(this.selectedItem)!==this.value&&this._selectItemForValue(this.value),this.size=o,delete this._pendingRequests[e],0===Object.keys(this._pendingRequests).length&&(this.loading=!1)}};this._pendingRequests[e]=i,this.dataProvider(t,i)}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const e=[];for(let t=0;t<(this.size||0);t++)e.push(this.__placeHolder);this.filteredItems=e,this.opened?this._loadPage(0):this._forceNextRequest=!0}_sizeChanged(e=0){const t=(this.filteredItems||[]).slice(0,e);for(let i=0;i<e;i++)t[i]=void 0!==t[i]?t[i]:this.__placeHolder;this.filteredItems=t}_pageSizeChanged(e,t){if(Math.floor(e)!==e||0===e)throw this.pageSize=t,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.dataProvider=t})}_ensureItemsOrDataProvider(e){if(void 0!==this.items&&void 0!==this.dataProvider)throw e(),new Error("Using `items` and `dataProvider` together is not supported")}_warnDataProviderValue(e,t){if(e&&""!==t&&(void 0===this.selectedItem||null===this.selectedItem)){const e=this._indexOfValue(t,this.filteredItems);(e<0||!this._getItemLabel(this.filteredItems[e]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}});i(4);var C=i(95),k=i(241),I=i(98),E=i(5),S=i(1),O=i(97),P=i(21),T=i(2),A=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),j=A&&A[1]>=8;Object(E.a)({_template:n.a`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        @apply --iron-list-items-container;
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:!1},selectedItem:{type:Object,notify:!0},selectedItems:{type:Object,notify:!0},multiSelection:{type:Boolean,value:!1},scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[O.a,C.a,k.a,I.a],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return(this.grid?this._physicalRows*this._rowHeight:this._physicalSize)-this._viewportHeight},get _itemsParent(){return Object(S.a)(Object(S.a)(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var e=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,e-this._physicalCount)},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this.grid&&(e-=e%this._itemsPerRow),this._virtualStartVal=e},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this.grid&&(e-=e%this._itemsPerRow),this._physicalStartVal=e},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(e){this._physicalCountVal=e},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var e=this._firstVisibleIndexVal;if(null==e){var t=this._physicalTop+this._scrollOffset;e=this._iterateItems(function(e,i){return(t+=this._getPhysicalSizeIncrement(e))>this._scrollPosition?this.grid?i-i%this._itemsPerRow:i:this.grid&&this._virtualCount-1===i?i-i%this._itemsPerRow:void 0})||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){var e=this._lastVisibleIndexVal;if(null==e){if(this.grid)e=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var t=this._physicalTop+this._scrollOffset;this._iterateItems(function(i,n){t<this._scrollBottom&&(e=n),t+=this._getPhysicalSizeIncrement(i)})}this._lastVisibleIndexVal=e}return e},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),!0)},attached:function(){this._debounce("_render",this._render,m.a),this.listen(this,"iron-resize","_resizeHandler"),this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler"),this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(e){this.style.webkitOverflowScrolling=e===this?"touch":"",this.style.overflowY=e===this?"auto":"",this._lastVisibleIndexVal=null,this._firstVisibleIndexVal=null,this._debounce("_render",this._render,m.a)},updateViewportBoundaries:function(){var e=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),t=e-this._scrollPosition,i=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;var n=Math.round(t/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+n,this._physicalStart=this._physicalStart+n,this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._update()}else if(this._physicalCount>0){var o=this._getReusables(i);i?(this._physicalTop=o.physicalTop,this._virtualStart=this._virtualStart+o.indexes.length,this._physicalStart=this._physicalStart+o.indexes.length):(this._virtualStart=this._virtualStart-o.indexes.length,this._physicalStart=this._physicalStart-o.indexes.length),this._update(o.indexes,i?null:o.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),m.c)}},_getReusables:function(e){var t,i,n,o=[],r=this._hiddenContentSize*this._ratio,a=this._virtualStart,s=this._virtualEnd,l=this._physicalCount,c=this._physicalTop+this._scrollOffset,d=this._physicalBottom+this._scrollOffset,h=this._scrollTop,p=this._scrollBottom;for(e?(t=this._physicalStart,this._physicalEnd,i=h-c):(t=this._physicalEnd,this._physicalStart,i=d-p);i-=n=this._getPhysicalSizeIncrement(t),!(o.length>=l||i<=r);)if(e){if(s+o.length+1>=this._virtualCount)break;if(c+n>=h-this._scrollOffset)break;o.push(t),c+=n,t=(t+1)%l}else{if(a-o.length<=0)break;if(c+this._physicalSize-n<=p)break;o.push(t),c-=n,t=0===t?l-1:t-1}return{indexes:o,physicalTop:c-this._scrollOffset}},_update:function(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._manageFocus(),this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){var i=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(i)}this._positionItems(),this._updateScrollerSize()}},_createPool:function(e){var t,i;this._ensureTemplatized();var n=new Array(e);for(t=0;t<e;t++)i=this.stamp(null),n[t]=i.root.querySelector("*"),this._itemsParent.appendChild(i.root);return n},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(e){var t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart);if(t=this._convertIndexToCompleteRow(t),this.grid){var i=t%this._itemsPerRow;i&&t-i<=this._physicalCount&&(t+=this._itemsPerRow),t-=i}var n=t-this._physicalCount,o=Math.round(.5*this._physicalCount);if(!(n<0)){if(n>0){var r=window.performance.now();[].push.apply(this._physicalItems,this._createPool(n));for(var a=0;a<n;a++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+n,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+n),this._update(),this._templateCost=(window.performance.now()-r)/n,o=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===o||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,o)),m.b):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,o),m.c))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){var e=this._getReusables(!0);this._physicalTop=e.physicalTop,this._virtualStart=this._virtualStart+e.indexes.length,this._physicalStart=this._physicalStart+e.indexes.length,this._update(e.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_ensureTemplatized:function(){if(!this.ctor){this._userTemplate=this.queryEffectiveChildren("template"),this._userTemplate||console.warn("iron-list requires a template to be provided in light-dom");var e={__key__:!0};e[this.as]=!0,e[this.indexAs]=!0,e[this.selectedAs]=!0,e.tabIndex=!0,this._instanceProps=e,this.templatize(this._userTemplate,this.mutableData)}},_gridChanged:function(e,t){void 0!==t&&(this.notifyResize(),Object(f.b)(),e&&this._updateGridMetrics())},_itemsChanged:function(e){if("items"===e.path)this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,m.a);else if("items.splices"===e.path){if(this._adjustVirtualIndex(e.value.indexSplices),this._virtualCount=this.items?this.items.length:0,e.value.indexSplices.some(function(e){return e.addedCount>0||e.removed.length>0})){var t=this._getActiveElement();this.contains(t)&&t.blur()}var i=e.value.indexSplices.some(function(e){return e.index+e.addedCount>=this._virtualStart&&e.index<=this._virtualEnd},this);this._isClientFull()&&!i||this._debounce("_render",this._render,m.a)}else"items.length"!==e.path&&this._forwardItemPath(e.path,e.value)},_forwardItemPath:function(e,t){var i,n,o,r=(e=e.slice(6)).indexOf(".");-1===r&&(r=e.length);var a=this.modelForElement(this._offscreenFocusedItem),s=parseInt(e.substring(0,r),10);(i=this._isIndexRendered(s))?(n=this._getPhysicalIndex(s),o=this.modelForElement(this._physicalItems[n])):a&&(o=a),o&&o[this.indexAs]===s&&(e=e.substring(r+1),e=this.as+(e?"."+e:""),o._setPendingPropertyOrPath(e,t,!1,!0),o._flushProperties&&o._flushProperties(!0),i&&(this._updateMetrics([n]),this._positionItems(),this._updateScrollerSize()))},_adjustVirtualIndex:function(e){e.forEach(function(e){if(e.removed.forEach(this._removeItem,this),e.index<this._virtualStart){var t=Math.max(e.addedCount-e.removed.length,e.index-this._virtualStart);this._virtualStart=this._virtualStart+t,this._focusedVirtualIndex>=0&&(this._focusedVirtualIndex=this._focusedVirtualIndex+t)}},this)},_removeItem:function(e){this.$.selector.deselect(e),this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===e&&this._removeFocusedItem()},_iterateItems:function(e,t){var i,n,o,r;if(2===arguments.length&&t){for(r=0;r<t.length;r++)if(i=t[r],n=this._computeVidx(i),null!=(o=e.call(this,i,n)))return o}else{for(i=this._physicalStart,n=this._virtualStart;i<this._physicalCount;i++,n++)if(null!=(o=e.call(this,i,n)))return o;for(i=0;i<this._physicalStart;i++,n++)if(null!=(o=e.call(this,i,n)))return o}},_computeVidx:function(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_assignModels:function(e){this._iterateItems(function(e,t){var i=this._physicalItems[e],n=this.items&&this.items[t];if(null!=n){var o=this.modelForElement(i);o.__key__=null,this._forwardProperty(o,this.as,n),this._forwardProperty(o,this.selectedAs,this.$.selector.isSelected(n)),this._forwardProperty(o,this.indexAs,t),this._forwardProperty(o,"tabIndex",this._focusedVirtualIndex===t?0:-1),this._physicalIndexForKey[o.__key__]=e,o._flushProperties&&o._flushProperties(!0),i.removeAttribute("hidden")}else i.setAttribute("hidden","")},e)},_updateMetrics:function(e){Object(f.b)();var t=0,i=0,n=this._physicalAverageCount,o=this._physicalAverage;this._iterateItems(function(e,n){i+=this._physicalSizes[e],this._physicalSizes[e]=this._physicalItems[e].offsetHeight,t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0},e),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(i=1===this._itemsPerRow?i:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+t-i,this._itemsPerRow=1),this._physicalAverageCount!==n&&(this._physicalAverage=Math.round((o*n+t)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var e=this._physicalTop;if(this.grid){var t=this._itemsPerRow*this._itemWidth,i=(this._viewportWidth-t)/2;this._iterateItems(function(t,n){var o=n%this._itemsPerRow,r=Math.floor(o*this._itemWidth+i);this._isRTL&&(r*=-1),this.translate3d(r+"px",e+"px",0,this._physicalItems[t]),this._shouldRenderNextRow(n)&&(e+=this._rowHeight)})}else this._iterateItems(function(t,i){this.translate3d(0,e+"px",0,this._physicalItems[t]),e+=this._physicalSizes[t]})},_getPhysicalSizeIncrement:function(e){return this.grid?this._computeVidx(e)%this._itemsPerRow!=this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[e]},_shouldRenderNextRow:function(e){return e%this._itemsPerRow==this._itemsPerRow-1},_adjustScrollPosition:function(){var e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop=this._physicalTop-e;var t=this._scrollTop;!j&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition:function(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(e){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((e=(e=(e=e||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||this.grid&&this.$.items.style.height<this._estScrollHeight)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToItem:function(e){return this.scrollToIndex(this.items.indexOf(e))},scrollToIndex:function(e){if(!("number"!=typeof e||e<0||e>this.items.length-1)&&(Object(f.b)(),0!==this._physicalCount)){e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=this.grid?e-2*this._itemsPerRow:e-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var t=this._physicalStart,i=this._virtualStart,n=0,o=this._hiddenContentSize;i<e&&n<=o;)n+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,i++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+n),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},m.a)},selectItem:function(e){return this.selectIndex(this.items.indexOf(e))},selectIndex:function(e){if(!(e<0||e>=this._virtualCount)){if(!this.multiSelection&&this.selectedItem&&this.clearSelection(),this._isIndexRendered(e)){var t=this.modelForElement(this._physicalItems[this._getPhysicalIndex(e)]);t&&(t[this.selectedAs]=!0),this.updateSizeForIndex(e)}this.$.selector.selectIndex(e)}},deselectItem:function(e){return this.deselectIndex(this.items.indexOf(e))},deselectIndex:function(e){if(!(e<0||e>=this._virtualCount)){if(this._isIndexRendered(e))this.modelForElement(this._physicalItems[this._getPhysicalIndex(e)])[this.selectedAs]=!1,this.updateSizeForIndex(e);this.$.selector.deselectIndex(e)}},toggleSelectionForItem:function(e){return this.toggleSelectionForIndex(this.items.indexOf(e))},toggleSelectionForIndex:function(e){(this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(e):this.$.selector.isSelected(this.items[e]))?this.deselectIndex(e):this.selectIndex(e)},clearSelection:function(){this._iterateItems(function(e,t){this.modelForElement(this._physicalItems[e])[this.selectedAs]=!1}),this.$.selector.clearSelection()},_selectionEnabledChanged:function(e){(e?this.listen:this.unlisten).call(this,this,"tap","_selectionHandler")},_selectionHandler:function(e){var t=this.modelForElement(e.target);if(t){var i,n,o=Object(S.a)(e).path[0],r=this._getActiveElement(),a=this._physicalItems[this._getPhysicalIndex(t[this.indexAs])];"input"!==o.localName&&"button"!==o.localName&&"select"!==o.localName&&(i=t.tabIndex,t.tabIndex=-100,n=r?r.tabIndex:-1,t.tabIndex=i,r&&a!==r&&a.contains(r)&&-100!==n||this.toggleSelectionForItem(t[this.as]))}},_multiSelectionChanged:function(e){this.clearSelection(),this.$.selector.multi=e},updateSizeForItem:function(e){return this.updateSizeForIndex(this.items.indexOf(e))},updateSizeForIndex:function(e){return this._isIndexRendered(e)?(this._updateMetrics([this._getPhysicalIndex(e)]),this._positionItems(),null):null},_manageFocus:function(){var e=this._focusedVirtualIndex;e>=0&&e<this._virtualCount?this._isIndexRendered(e)?this._restoreFocusedItem():this._createFocusBackfillItem():this._virtualCount>0&&this._physicalCount>0&&(this._focusedPhysicalIndex=this._physicalStart,this._focusedVirtualIndex=this._virtualStart,this._focusedItem=this._physicalItems[this._physicalStart])},_convertIndexToCompleteRow:function(e){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(e/this._itemsPerRow)*this._itemsPerRow:e},_isIndexRendered:function(e){return e>=this._virtualStart&&e<=this._virtualEnd},_isIndexVisible:function(e){return e>=this.firstVisibleIndex&&e<=this.lastVisibleIndex},_getPhysicalIndex:function(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},focusItem:function(e){this._focusPhysicalItem(e)},_focusPhysicalItem:function(e){if(!(e<0||e>=this._virtualCount)){this._restoreFocusedItem(),this._isIndexRendered(e)||this.scrollToIndex(e);var t,i=this._physicalItems[this._getPhysicalIndex(e)],n=this.modelForElement(i);n.tabIndex=-100,-100===i.tabIndex&&(t=i),t||(t=Object(S.a)(i).querySelector('[tabindex="-100"]')),n.tabIndex=0,this._focusedVirtualIndex=e,t&&t.focus()}},_removeFocusedItem:function(){this._offscreenFocusedItem&&this._itemsParent.removeChild(this._offscreenFocusedItem),this._offscreenFocusedItem=null,this._focusBackfillItem=null,this._focusedItem=null,this._focusedVirtualIndex=-1,this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var e=this._focusedPhysicalIndex;if(!(this._offscreenFocusedItem||this._focusedVirtualIndex<0)){if(!this._focusBackfillItem){var t=this.stamp(null);this._focusBackfillItem=t.root.querySelector("*"),this._itemsParent.appendChild(t.root)}this._offscreenFocusedItem=this._physicalItems[e],this.modelForElement(this._offscreenFocusedItem).tabIndex=0,this._physicalItems[e]=this._focusBackfillItem,this._focusedPhysicalIndex=e,this.translate3d(0,"-10000px",0,this._offscreenFocusedItem)}},_restoreFocusedItem:function(){if(this._offscreenFocusedItem&&!(this._focusedVirtualIndex<0)){this._assignModels();var e=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex),t=this._physicalItems[e];if(t){var i=this.modelForElement(t),n=this.modelForElement(this._offscreenFocusedItem);i[this.as]===n[this.as]?(this._focusBackfillItem=t,i.tabIndex=-1,this._physicalItems[e]=this._offscreenFocusedItem,this.translate3d(0,"-10000px",0,this._focusBackfillItem)):(this._removeFocusedItem(),this._focusBackfillItem=null),this._offscreenFocusedItem=null}}},_didFocus:function(e){var t=this.modelForElement(e.target),i=this.modelForElement(this._focusedItem),n=null!==this._offscreenFocusedItem,o=this._focusedVirtualIndex;t&&(i===t?this._isIndexVisible(o)||this.scrollToIndex(o):(this._restoreFocusedItem(),i&&(i.tabIndex=-1),t.tabIndex=0,o=t[this.indexAs],this._focusedVirtualIndex=o,this._focusedPhysicalIndex=this._getPhysicalIndex(o),this._focusedItem=this._physicalItems[this._focusedPhysicalIndex],n&&!this._offscreenFocusedItem&&this._update()))},_keydownHandler:function(e){switch(e.keyCode){case 40:this._focusedVirtualIndex<this._virtualCount-1&&e.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:this._focusedVirtualIndex>0&&e.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex),this.selectionEnabled&&this._selectionHandler(e)}},_clamp:function(e,t,i){return Math.min(i,Math.max(t,e))},_debounce:function(e,t,i){this._debouncers=this._debouncers||{},this._debouncers[e]=P.a.debounce(this._debouncers[e],i,t.bind(this)),Object(f.a)(this._debouncers[e])},_forwardProperty:function(e,t,i){e._setPendingProperty(t,i)},_forwardHostPropV2:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(i){i&&this.modelForElement(i).forwardHostProp(e,t)},this)},_notifyInstancePropV2:function(e,t,i){if(Object(T.e)(this.as,t)){var n=e[this.indexAs];t==this.as&&(this.items[n]=i),this.notifyPath(Object(T.i)(this.as,"items."+n,t),i)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(e,t,i){0===t.indexOf(this.as+".")&&this.notifyPath("items."+e.__key__+"."+t.slice(this.as.length+1),i)},_forwardParentPath:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(i){i&&this.modelForElement(i).notifyPath(e,t,!0)},this)},_forwardParentProp:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(i){i&&(this.modelForElement(i)[e]=t)},this)},_getActiveElement:function(){var e=this._itemsParent.node.domHost;return Object(S.a)(e?e.root:document).activeElement}});class z extends(Object(c.a)(l.a)){static get template(){return n.a`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
         display: none;
      }
    </style>
    <div part="content" id="content"></div>
`}static get is(){return"vaadin-combo-box-item"}static get properties(){return{index:Number,item:Object,label:String,selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},_itemTemplateInstance:Object,renderer:Function,_oldRenderer:Function}}static get observers(){return["_rendererOrItemChanged(renderer, index, item.*)","_updateLabel(label, _itemTemplateInstance)",'_updateTemplateInstanceVariable("index", index, _itemTemplateInstance)','_updateTemplateInstanceVariable("item", item, _itemTemplateInstance)','_updateTemplateInstanceVariable("selected", selected, _itemTemplateInstance)','_updateTemplateInstanceVariable("focused", focused, _itemTemplateInstance)']}connectedCallback(){if(super.connectedCallback(),!this._itemTemplateInstance){const e=this.getRootNode().host.getRootNode().host.__dataHost.getRootNode().host;this._comboBox=e.getRootNode().host,this._comboBox._ensureTemplatized(),this._comboBox._TemplateClass&&(this._itemTemplateInstance=new this._comboBox._TemplateClass({}),this.$.content.textContent="",this.$.content.appendChild(this._itemTemplateInstance.root))}}_render(){if(!this.renderer)return;const e={index:this.index,item:this.item};this.renderer(this.$.content,this._comboBox,e)}_rendererOrItemChanged(e,t,i){void 0!==i&&void 0!==t&&(this._oldRenderer!==e&&(this.$.content.innerHTML=""),e&&(this._oldRenderer=e,this._render()))}_updateLabel(e,t){void 0===t&&this.$.content&&!this.renderer&&(this.$.content.textContent=e)}_updateTemplateInstanceVariable(e,t,i){void 0!==e&&void 0!==t&&void 0!==i&&(i[e]=t)}}customElements.define(z.is,z);var V=i(293),$=i(70);class F extends r.a{static get is(){return"vaadin-combo-box-overlay"}ready(){super.ready();const e=document.createElement("div");e.setAttribute("part","loader");const t=this.shadowRoot.querySelector(['[part~="content"]']);t.parentNode.insertBefore(e,t)}}customElements.define(F.is,F);class R extends(Object(V.a)(Object($.b)(C.a,l.a))){static get template(){return n.a`
    <style>
      :host {
        display: block;
      }

      :host > #overlay {
        display: none;
      }
    </style>
    <vaadin-combo-box-overlay id="overlay" hidden\$="[[hidden]]" opened="[[opened]]" template="{{template}}" style="align-items: stretch; margin: 0;" theme\$="[[theme]]">
      <slot></slot>
    </vaadin-combo-box-overlay>
`}static get is(){return"vaadin-combo-box-dropdown"}static get properties(){return{opened:{type:Boolean,observer:"_openedChanged"},template:{type:Object,notify:!0},positionTarget:{type:Object},alignedAbove:{type:Boolean,value:!1},theme:String}}constructor(){super(),this._boundSetPosition=this._setPosition.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("iron-resize",this._boundSetPosition)}ready(){super.ready(),this.$.overlay.addEventListener("vaadin-overlay-outside-click",e=>{e.preventDefault()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("iron-resize",this._boundSetPosition),this.opened=!1}notifyResize(){super.notifyResize(),this.positionTarget&&this.opened&&(this._setPosition(),requestAnimationFrame(this._setPosition.bind(this)))}_openedChanged(e,t){!!e!=!!t&&(e?(this.$.overlay.style.position=this._isPositionFixed(this.positionTarget)?"fixed":"absolute",this._setPosition(),window.addEventListener("scroll",this._boundSetPosition,!0),document.addEventListener("click",this._boundOutsideClickListener,!0),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0}))):(window.removeEventListener("scroll",this._boundSetPosition,!0),document.removeEventListener("click",this._boundOutsideClickListener,!0),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0}))))}_outsideClickListener(e){const t=e.composedPath();t.indexOf(this.positionTarget)<0&&t.indexOf(this.$.overlay)<0&&(this.opened=!1)}_isPositionFixed(e){const t=this._getOffsetParent(e);return"fixed"===window.getComputedStyle(e).position||t&&this._isPositionFixed(t)}_getOffsetParent(e){if(e.assignedSlot)return e.assignedSlot.parentElement;if(e.parentElement)return e.offsetParent;const t=e.parentNode;return t&&11===t.nodeType&&t.host?t.host:void 0}_verticalOffset(e,t){return this.alignedAbove?-e.height:t.height}_shouldAlignAbove(e){return(window.innerHeight-e.bottom-Math.min(document.body.scrollTop,0))/window.innerHeight<.3}_setPosition(e){if(e&&e.target){const t=e.target===document?document.body:e.target,i=this.$.overlay.parentElement;if(!t.contains(this.$.overlay)&&!t.contains(this.positionTarget)||i!==document.body)return}const t=this.positionTarget.getBoundingClientRect();this.alignedAbove=this._shouldAlignAbove(t);const i=this.$.overlay.getBoundingClientRect();this._translateX=t.left-i.left+(this._translateX||0),this._translateY=t.top-i.top+(this._translateY||0)+this._verticalOffset(i,t);const n=window.devicePixelRatio||1;this._translateX=Math.round(this._translateX*n)/n,this._translateY=Math.round(this._translateY*n)/n,this.$.overlay.style.transform=`translate3d(${this._translateX}px, ${this._translateY}px, 0)`,this.$.overlay.style.width=this.positionTarget.clientWidth+"px",this.$.overlay.style.justifyContent=this.alignedAbove?"flex-end":"flex-start",this.dispatchEvent(new CustomEvent("position-changed"))}}customElements.define(R.is,R);const D=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();class L extends class extends l.a{}{static get template(){return n.a`
    <vaadin-combo-box-dropdown id="dropdown" hidden="[[_hidden(_items.*, loading)]]" position-target="[[positionTarget]]" on-template-changed="_templateChanged" on-position-changed="_setOverlayHeight" disable-upgrade="" theme="[[theme]]">
      <template>
        <style>
          #scroller {
            overflow: auto;

            /* Fixes item background from getting on top of scrollbars on Safari */
            transform: translate3d(0, 0, 0);

            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */
            -webkit-overflow-scrolling: touch;

            /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
            box-shadow: 0 0 0 white;
          }
        </style>
        <div id="scroller" on-click="_stopPropagation">
          <iron-list id="selector" role="listbox" items="[[_getItems(opened, _items)]]" scroll-target="[[_scroller]]">
            <template>
              <vaadin-combo-box-item on-click="_onItemClick" index="[[__requestItemByIndex(item, index)]]" item="[[item]]" label="[[getItemLabel(item, _itemLabelPath)]]" selected="[[_isItemSelected(item, _selectedItem, _itemIdPath)]]" renderer="[[renderer]]" role\$="[[_getAriaRole(index)]]" aria-selected\$="[[_getAriaSelected(_focusedIndex,index)]]" focused="[[_isItemFocused(_focusedIndex,index)]]" tabindex="-1" theme\$="[[theme]]">
              </vaadin-combo-box-item>
            </template>
          </iron-list>
        </div>
      </template>
    </vaadin-combo-box-dropdown>
`}static get is(){return"vaadin-combo-box-dropdown-wrapper"}static get properties(){return{touchDevice:{type:Boolean,value:D},opened:Boolean,positionTarget:{type:Object},renderer:Function,loading:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_setOverlayHeight"},theme:String,_selectedItem:{type:Object},_items:{type:Object},_focusedIndex:{type:Number,value:-1,observer:"_focusedIndexChanged"},_focusedItem:{type:String,computed:"_getFocusedItem(_focusedIndex)"},_itemLabelPath:{type:String,value:"label"},_itemValuePath:{type:String,value:"value"},_selector:Object,_itemIdPath:String}}static get observers(){return["_selectorChanged(_selector)","_loadingChanged(loading)","_openedChanged(opened, _items, loading)"]}_fireTouchAction(e){this.dispatchEvent(new CustomEvent("vaadin-overlay-touch-action",{detail:{sourceEvent:e}}))}_getItems(e,t){return e?t:[]}_openedChanged(e,t,i){if(this.$.dropdown.hasAttribute("disable-upgrade")){if(!e)return;this._initDropdown()}this.$.dropdown.opened=!(!e||!(i||this.$.dropdown.opened||t&&t.length))}_initDropdown(){this.$.dropdown.removeAttribute("disable-upgrade"),this._templateChanged(),this._loadingChanged(this.loading),this.$.dropdown.$.overlay.addEventListener("touchend",e=>this._fireTouchAction(e)),this.$.dropdown.$.overlay.addEventListener("touchmove",e=>this._fireTouchAction(e)),this.$.dropdown.$.overlay.addEventListener("mousedown",e=>e.preventDefault()),/Trident/.test(navigator.userAgent)&&this._scroller.setAttribute("unselectable","on")}_templateChanged(e){this.$.dropdown.hasAttribute("disable-upgrade")||(this._selector=this.$.dropdown.$.overlay.content.querySelector("#selector"),this._scroller=this.$.dropdown.$.overlay.content.querySelector("#scroller"))}_loadingChanged(e){this.$.dropdown.hasAttribute("disable-upgrade")||(e?this.$.dropdown.$.overlay.setAttribute("loading",""):this.$.dropdown.$.overlay.removeAttribute("loading"))}_selectorChanged(e){this._patchWheelOverScrolling()}_setOverlayHeight(){if(!this.opened||!this.positionTarget||!this._selector)return;const e=this.positionTarget.getBoundingClientRect();this._scroller.style.maxHeight=(window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-combo-box-overlay-max-height"):getComputedStyle(this).getPropertyValue("--vaadin-combo-box-overlay-max-height"))||"65vh";const t=this._maxOverlayHeight(e);this.$.dropdown.$.overlay.style.maxHeight=t,this._selector.style.maxHeight=t,this.updateViewportBoundaries()}_maxOverlayHeight(e){const t=Math.min(window.innerHeight,document.body.scrollHeight-document.body.scrollTop);return this.$.dropdown.alignedAbove?Math.max(e.top-8+Math.min(document.body.scrollTop,0),116)+"px":Math.max(t-e.bottom-8,116)+"px"}_getFocusedItem(e){if(e>=0)return this._items[e]}_isItemSelected(e,t,i){return!(e instanceof y)&&(i&&void 0!==e&&void 0!==t?this.get(i,e)===this.get(i,t):e===t)}_onItemClick(e){e.detail&&e.detail.sourceEvent&&e.detail.sourceEvent.stopPropagation&&this._stopPropagation(e.detail.sourceEvent),this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.model.item}}))}indexOfLabel(e){if(this._items&&e)for(let t=0;t<this._items.length;t++)if(this.getItemLabel(this._items[t]).toString().toLowerCase()===e.toString().toLowerCase())return t;return-1}__requestItemByIndex(e,t){return e instanceof y&&void 0!==t&&this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:t}})),t}getItemLabel(e,t){t=t||this._itemLabelPath;let i=e&&t?this.get(t,e):void 0;return null==i&&(i=e?e.toString():""),i}_isItemFocused(e,t){return e==t}_getAriaSelected(e,t){return this._isItemFocused(e,t).toString()}_getAriaRole(e){return void 0!==e&&"option"}_focusedIndexChanged(e){e>=0&&this._scrollIntoView(e)}_scrollIntoView(e){const t=this._visibleItemsCount();if(void 0===t)return;let i=e;e>this._selector.lastVisibleIndex-1?i=e-t+1:e>this._selector.firstVisibleIndex&&(i=this._selector.firstVisibleIndex),this._selector.scrollToIndex(Math.max(0,i));const n=this._selector._getPhysicalIndex(e),o=this._selector._physicalItems[n];if(!o)return;const r=o.getBoundingClientRect(),a=this._scroller.getBoundingClientRect(),s=r.bottom-a.bottom+this._viewportTotalPaddingBottom;s>0&&(this._scroller.scrollTop+=s)}ensureItemsRendered(){this._selector._render()}adjustScrollPosition(){this.opened&&this._items&&this._scrollIntoView(this._focusedIndex)}_patchWheelOverScrolling(){const e=this._selector;e.addEventListener("wheel",t=>{const i=e._scroller||e.scrollTarget,n=0===i.scrollTop,o=i.scrollHeight-i.scrollTop-i.clientHeight<=1;n&&t.deltaY<0?t.preventDefault():o&&t.deltaY>0&&t.preventDefault()})}updateViewportBoundaries(){this._cachedViewportTotalPaddingBottom=void 0,this._selector.updateViewportBoundaries()}get _viewportTotalPaddingBottom(){if(void 0===this._cachedViewportTotalPaddingBottom){const e=window.getComputedStyle(this._selector.$.items);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map(e=>parseInt(e,10)).reduce((e,t)=>e+t)}return this._cachedViewportTotalPaddingBottom}_visibleItemsCount(){if(this._selector)return this._selector.flushDebouncer("_debounceTemplate"),this._selector.scrollToIndex(this._selector.firstVisibleIndex),this.updateViewportBoundaries(),this._selector.lastVisibleIndex-this._selector.firstVisibleIndex+1}_selectItem(e){e="number"==typeof e?this._items[e]:e,this._selector.selectedItem!==e&&this._selector.selectItem(e)}_preventDefault(e){e.cancelable&&e.preventDefault()}_stopPropagation(e){e.stopPropagation()}_hidden(e){return!(this.loading||this._items&&this._items.length)}}customElements.define(L.is,L);var B=i(22);class N extends(Object(u.a)(Object(c.a)(x(w(l.a))))){static get template(){return n.a`
    <slot></slot>

    <vaadin-combo-box-dropdown-wrapper id="overlay" opened="[[opened]]" position-target="[[inputElement]]" renderer="[[renderer]]" _focused-index="[[_focusedIndex]]" _item-id-path="[[itemIdPath]]" _item-label-path="[[itemLabelPath]]" loading="[[loading]]" theme="[[theme]]">
    </vaadin-combo-box-dropdown-wrapper>
`}static get is(){return"vaadin-combo-box-light"}static get properties(){return{attrForValue:{type:String,value:"value"},inputElement:{type:Element,readOnly:!0}}}constructor(){super(),this._boundInputValueChanged=this._inputValueChanged.bind(this)}ready(){super.ready(),this._toggleElement=this.querySelector(".toggle-button"),this._clearElement=this.querySelector(".clear-button")}get focused(){return this.getRootNode().activeElement===this.inputElement}connectedCallback(){super.connectedCallback();this._setInputElement(this.querySelector("vaadin-text-field,iron-input,paper-input,.paper-input-input,.input")),this._revertInputValue(),this.inputElement.addEventListener("input",this._boundInputValueChanged),this._preventInputBlur()}disconnectedCallback(){super.disconnectedCallback(),this.inputElement.removeEventListener("input",this._boundInputValueChanged),this._restoreInputBlur()}get _propertyForValue(){return Object(B.b)(this.attrForValue)}get _inputElementValue(){return this.inputElement&&this.inputElement[this._propertyForValue]}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._propertyForValue]=e)}}customElements.define(N.is,N)},227:function(e,t,i){"use strict";i(4),i(31),i(107),i(143),i(41),i(144),i(145);var n=i(53),o=i(34),r=i(59),a=i(60),s=i(67),l=i(5),c=i(1),d=i(35),h=i(3);Object(l.a)({_template:h.a`
    <style include="paper-dropdown-menu-shared-styles">
      :host(:focus) {
        outline: none;
      }

      :host {
        width: 200px;  /* Default size of an <input> */
      }

      /**
       * All of these styles below are for styling the fake-input display
       */
      [slot="dropdown-trigger"] {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        padding: 16px 0 8px 0;
      }

      :host([disabled]) [slot="dropdown-trigger"] {
        pointer-events: none;
        opacity: var(--paper-dropdown-menu-disabled-opacity, 0.33);
      }

      :host([no-label-float]) [slot="dropdown-trigger"] {
        padding-top: 8px;   /* If there's no label, we need less space up top. */
      }

      #input {
        @apply --paper-font-subhead;
        @apply --paper-font-common-nowrap;
        line-height: 1.5;
        border-bottom: 1px solid var(--paper-dropdown-menu-color, var(--secondary-text-color));
        color: var(--paper-dropdown-menu-color, var(--primary-text-color));
        width: 100%;
        box-sizing: border-box;
        padding: 12px 20px 0 0;   /* Right padding so that text doesn't overlap the icon */
        outline: none;
        @apply --paper-dropdown-menu-input;
      }

      #input:dir(rtl) {
        padding-right: 0px;
        padding-left: 20px;
      }

      :host([disabled]) #input {
        border-bottom: 1px dashed var(--paper-dropdown-menu-color, var(--secondary-text-color));
      }

      :host([invalid]) #input {
        border-bottom: 2px solid var(--paper-dropdown-error-color, var(--error-color));
      }

      :host([no-label-float]) #input {
        padding-top: 0;   /* If there's no label, we need less space up top. */
      }

      label {
        @apply --paper-font-subhead;
        @apply --paper-font-common-nowrap;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        /**
         * The container has a 16px top padding, and there's 12px of padding
         * between the input and the label (from the input's padding-top)
         */
        top: 28px;
        box-sizing: border-box;
        width: 100%;
        padding-right: 20px;    /* Right padding so that text doesn't overlap the icon */
        text-align: left;
        transition-duration: .2s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        color: var(--paper-dropdown-menu-color, var(--secondary-text-color));
        @apply --paper-dropdown-menu-label;
      }

      label:dir(rtl) {
        padding-right: 0px;
        padding-left: 20px;
      }

      :host([no-label-float]) label {
        top: 8px;
        /* Since the label doesn't need to float, remove the animation duration
        which slows down visibility changes (i.e. when a selection is made) */
        transition-duration: 0s;
      }

      label.label-is-floating {
        font-size: 12px;
        top: 8px;
      }

      label.label-is-hidden {
        visibility: hidden;
      }

      :host([focused]) label.label-is-floating {
        color: var(--paper-dropdown-menu-focus-color, var(--primary-color));
      }

      :host([invalid]) label.label-is-floating {
        color: var(--paper-dropdown-error-color, var(--error-color));
      }

      /**
       * Sets up the focused underline. It's initially hidden, and becomes
       * visible when it's focused.
       */
      label:after {
        background-color: var(--paper-dropdown-menu-focus-color, var(--primary-color));
        bottom: 7px;    /* The container has an 8px bottom padding */
        content: '';
        height: 2px;
        left: 45%;
        position: absolute;
        transition-duration: .2s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        visibility: hidden;
        width: 8px;
        z-index: 10;
      }

      :host([invalid]) label:after {
        background-color: var(--paper-dropdown-error-color, var(--error-color));
      }

      :host([no-label-float]) label:after {
        bottom: 7px;    /* The container has a 8px bottom padding */
      }

      :host([focused]:not([disabled])) label:after {
        left: 0;
        visibility: visible;
        width: 100%;
      }

      iron-icon {
        position: absolute;
        right: 0px;
        bottom: 8px;    /* The container has an 8px bottom padding */
        @apply --paper-font-subhead;
        color: var(--disabled-text-color);
        @apply --paper-dropdown-menu-icon;
      }

      iron-icon:dir(rtl) {
        left: 0;
        right: auto;
      }

      :host([no-label-float]) iron-icon {
        margin-top: 0px;
      }

      .error {
        display: inline-block;
        visibility: hidden;
        color: var(--paper-dropdown-error-color, var(--error-color));
        @apply --paper-font-caption;
        position: absolute;
        left:0;
        right:0;
        bottom: -12px;
      }

      :host([invalid]) .error {
        visibility: visible;
      }
    </style>

    <!-- this div fulfills an a11y requirement for combobox, do not remove -->
    <span role="button"></span>
    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <label class\$="[[_computeLabelClass(noLabelFloat,alwaysFloatLabel,hasContent)]]">
          [[label]]
        </label>
        <div id="input" tabindex="-1">&nbsp;</div>
        <iron-icon icon="paper-dropdown-menu:arrow-drop-down"></iron-icon>
        <span class="error">[[errorMessage]]</span>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,is:"paper-dropdown-menu-light",behaviors:[n.a,o.a,s.a,r.a,a.a],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0,observer:"_valueChanged"},label:{type:String},placeholder:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,hasContent:{type:Boolean,readOnly:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},hostAttributes:{tabindex:0,role:"combobox","aria-autocomplete":"none","aria-haspopup":"true"},observers:["_selectedItemChanged(selectedItem)"],attached:function(){var e=this.contentElement;e&&e.selectedItem&&this._setSelectedItem(e.selectedItem)},get contentElement(){for(var e=Object(c.a)(this.$.content).getDistributedNodes(),t=0,i=e.length;t<i;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(e){this._setSelectedItem(e.detail.item)},_onIronDeselect:function(e){this._setSelectedItem(null)},_onTap:function(e){d.c(e)===this&&this.open()},_selectedItemChanged:function(e){var t="";t=e?e.label||e.getAttribute("label")||e.textContent.trim():"",this.value=t,this._setSelectedItemLabel(t)},_computeMenuVerticalOffset:function(e,t){return t||(e?-4:8)},_getValidity:function(e){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var e=this.opened?"true":"false",t=this.contentElement;t&&t.setAttribute("aria-expanded",e)},_computeLabelClass:function(e,t,i){var n="";return!0===e?i?"label-is-hidden":"":((i||!0===t)&&(n+=" label-is-floating"),n)},_valueChanged:function(){this.$.input&&this.$.input.textContent!==this.value&&(this.$.input.textContent=this.value),this._setHasContent(!!this.value)}})},229:function(e,t,i){"use strict";i(4),i(44),i(107),i(204),i(55),i(41);var n=i(53),o=i(34),r=i(67);const a={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var e=1;this.disabled?e=0:this.active||this.pressed?e=4:this.receivedFocusFromKeyboard&&(e=3),this._setElevation(e)},_computeKeyboardClass:function(e){this.toggleClass("keyboard-focus",e)},_spaceKeyDownHandler:function(e){n.b._spaceKeyDownHandler.call(this,e),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(e){n.b._spaceKeyUpHandler.call(this,e),this.hasRipple()&&this._ripple.uiUpAction()}},s=[n.a,o.a,r.a,a];var l=i(5);const c=i(3).a`
  <style include="paper-material-styles">
    :host {
      @apply --layout-vertical;
      @apply --layout-center-center;

      background: var(--paper-fab-background, var(--accent-color));
      border-radius: 50%;
      box-sizing: border-box;
      color: var(--text-primary-color);
      cursor: pointer;
      height: 56px;
      min-width: 0;
      outline: none;
      padding: 16px;
      position: relative;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      width: 56px;
      z-index: 0;

      /* NOTE: Both values are needed, since some phones require the value \`transparent\`. */
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent;

      @apply --paper-fab;
    }

    [hidden] {
      display: none !important;
    }

    :host([mini]) {
      width: 40px;
      height: 40px;
      padding: 8px;

      @apply --paper-fab-mini;
    }

    :host([disabled]) {
      color: var(--paper-fab-disabled-text, var(--paper-grey-500));
      background: var(--paper-fab-disabled-background, var(--paper-grey-300));

      @apply --paper-fab-disabled;
    }

    iron-icon {
      @apply --paper-fab-iron-icon;
    }

    span {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;

      @apply --paper-fab-label;
    }

    :host(.keyboard-focus) {
      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }
  </style>

  <iron-icon id="icon" hidden\$="{{!_computeIsIconFab(icon, src)}}" src="[[src]]" icon="[[icon]]"></iron-icon>
  <span hidden\$="{{_computeIsIconFab(icon, src)}}">{{label}}</span>
`;c.setAttribute("strip-whitespace",""),Object(l.a)({_template:c,is:"paper-fab",behaviors:[s],properties:{src:{type:String,value:""},icon:{type:String,value:""},mini:{type:Boolean,value:!1,reflectToAttribute:!0},label:{type:String,observer:"_labelChanged"}},_labelChanged:function(){this.setAttribute("aria-label",this.label)},_computeIsIconFab:function(e,t){return e.length>0||t.length>0}})},233:function(e,t,i){"use strict";i(4),i(41),i(44);var n=i(120),o=i(5),r=i(3),a=i(61);const s=r.a`
<style>
  :host {
    display: inline-block;
    line-height: 0;
    white-space: nowrap;
    cursor: pointer;
    @apply --paper-font-common-base;
    --calculated-paper-radio-button-size: var(--paper-radio-button-size, 16px);
    /* -1px is a sentinel for the default and is replace in \`attached\`. */
    --calculated-paper-radio-button-ink-size: var(--paper-radio-button-ink-size, -1px);
  }

  :host(:focus) {
    outline: none;
  }

  #radioContainer {
    @apply --layout-inline;
    @apply --layout-center-center;
    position: relative;
    width: var(--calculated-paper-radio-button-size);
    height: var(--calculated-paper-radio-button-size);
    vertical-align: middle;

    @apply --paper-radio-button-radio-container;
  }

  #ink {
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    width: var(--calculated-paper-radio-button-ink-size);
    height: var(--calculated-paper-radio-button-ink-size);
    color: var(--paper-radio-button-unchecked-ink-color, var(--primary-text-color));
    opacity: 0.6;
    pointer-events: none;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  #ink[checked] {
    color: var(--paper-radio-button-checked-ink-color, var(--primary-color));
  }

  #offRadio, #onRadio {
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  #offRadio {
    border: 2px solid var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    background-color: var(--paper-radio-button-unchecked-background-color, transparent);
    transition: border-color 0.28s;
  }

  #onRadio {
    background-color: var(--paper-radio-button-checked-color, var(--primary-color));
    -webkit-transform: scale(0);
    transform: scale(0);
    transition: -webkit-transform ease 0.28s;
    transition: transform ease 0.28s;
    will-change: transform;
  }

  :host([checked]) #offRadio {
    border-color: var(--paper-radio-button-checked-color, var(--primary-color));
  }

  :host([checked]) #onRadio {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }

  #radioLabel {
    line-height: normal;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-left: var(--paper-radio-button-label-spacing, 10px);
    white-space: normal;
    color: var(--paper-radio-button-label-color, var(--primary-text-color));

    @apply --paper-radio-button-label;
  }

  :host([checked]) #radioLabel {
    @apply --paper-radio-button-label-checked;
  }

  #radioLabel:dir(rtl) {
    margin-left: 0;
    margin-right: var(--paper-radio-button-label-spacing, 10px);
  }

  #radioLabel[hidden] {
    display: none;
  }

  /* disabled state */

  :host([disabled]) #offRadio {
    border-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled][checked]) #onRadio {
    background-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled]) #radioLabel {
    /* slightly darker than the button, so that it's readable */
    opacity: 0.65;
  }
</style>

<div id="radioContainer">
  <div id="offRadio"></div>
  <div id="onRadio"></div>
</div>

<div id="radioLabel"><slot></slot></div>`;s.setAttribute("strip-whitespace",""),Object(o.a)({_template:s,is:"paper-radio-button",behaviors:[n.a],hostAttributes:{role:"radio","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},ready:function(){this._rippleContainer=this.$.radioContainer},attached:function(){Object(a.a)(this,function(){if("-1px"===this.getComputedStyleValue("--calculated-paper-radio-button-ink-size").trim()){var e=parseFloat(this.getComputedStyleValue("--calculated-paper-radio-button-size").trim()),t=Math.floor(3*e);t%2!=e%2&&t++,this.updateStyles({"--paper-radio-button-ink-size":t+"px"})}})}})},235:function(e,t,i){"use strict";i.d(t,"b",function(){return o}),i.d(t,"a",function(){return r});i(4);var n=i(121);const o={hostAttributes:{role:"menubar"},keyBindings:{left:"_onLeftKey",right:"_onRightKey"},_onUpKey:function(e){this.focusedItem.click(),e.detail.keyboardEvent.preventDefault()},_onDownKey:function(e){this.focusedItem.click(),e.detail.keyboardEvent.preventDefault()},get _isRTL(){return"rtl"===window.getComputedStyle(this).direction},_onLeftKey:function(e){this._isRTL?this._focusNext():this._focusPrevious(),e.detail.keyboardEvent.preventDefault()},_onRightKey:function(e){this._isRTL?this._focusPrevious():this._focusNext(),e.detail.keyboardEvent.preventDefault()},_onKeydown:function(e){this.keyboardEventMatchesKeys(e,"up down left right esc")||this._focusWithKeyboardEvent(e)}},r=[n.a,o]},236:function(e,t,i){"use strict";i(4);var n=i(5);Object(n.a)({is:"app-route",properties:{route:{type:Object,notify:!0},pattern:{type:String},data:{type:Object,value:function(){return{}},notify:!0},autoActivate:{type:Boolean,value:!1},_queryParamsUpdating:{type:Boolean,value:!1},queryParams:{type:Object,value:function(){return{}},notify:!0},tail:{type:Object,value:function(){return{path:null,prefix:null,__queryParams:null}},notify:!0},active:{type:Boolean,notify:!0,readOnly:!0},_matched:{type:String,value:""}},observers:["__tryToMatch(route.path, pattern)","__updatePathOnDataChange(data.*)","__tailPathChanged(tail.path)","__routeQueryParamsChanged(route.__queryParams)","__tailQueryParamsChanged(tail.__queryParams)","__queryParamsChanged(queryParams.*)"],created:function(){this.linkPaths("route.__queryParams","tail.__queryParams"),this.linkPaths("tail.__queryParams","route.__queryParams")},__routeQueryParamsChanged:function(e){if(e&&this.tail){if(this.tail.__queryParams!==e&&this.set("tail.__queryParams",e),!this.active||this._queryParamsUpdating)return;var t={},i=!1;for(var n in e)t[n]=e[n],!i&&this.queryParams&&e[n]===this.queryParams[n]||(i=!0);for(var n in this.queryParams)if(i||!(n in e)){i=!0;break}if(!i)return;this._queryParamsUpdating=!0,this.set("queryParams",t),this._queryParamsUpdating=!1}},__tailQueryParamsChanged:function(e){e&&this.route&&this.route.__queryParams!=e&&this.set("route.__queryParams",e)},__queryParamsChanged:function(e){this.active&&!this._queryParamsUpdating&&this.set("route.__"+e.path,e.value)},__resetProperties:function(){this._setActive(!1),this._matched=null},__tryToMatch:function(){if(this.route){var e=this.route.path,t=this.pattern;if(this.autoActivate&&""===e&&(e="/"),t)if(e){for(var i=e.split("/"),n=t.split("/"),o=[],r={},a=0;a<n.length;a++){var s=n[a];if(!s&&""!==s)break;var l=i.shift();if(!l&&""!==l)return void this.__resetProperties();if(o.push(l),":"==s.charAt(0))r[s.slice(1)]=l;else if(s!==l)return void this.__resetProperties()}this._matched=o.join("/");var c={};this.active||(c.active=!0);var d=this.route.prefix+this._matched,h=i.join("/");for(var p in i.length>0&&(h="/"+h),this.tail&&this.tail.prefix===d&&this.tail.path===h||(c.tail={prefix:d,path:h,__queryParams:this.route.__queryParams}),c.data=r,this._dataInUrl={},r)this._dataInUrl[p]=r[p];this.setProperties?this.setProperties(c,!0):this.__setMulti(c)}else this.__resetProperties()}},__tailPathChanged:function(e){if(this.active){var t=e,i=this._matched;t&&("/"!==t.charAt(0)&&(t="/"+t),i+=t),this.set("route.path",i)}},__updatePathOnDataChange:function(){if(this.route&&this.active){var e=this.__getLink({});e!==this.__getLink(this._dataInUrl)&&this.set("route.path",e)}},__getLink:function(e){var t={tail:null};for(var i in this.data)t[i]=this.data[i];for(var i in e)t[i]=e[i];var n=this.pattern.split("/").map(function(e){return":"==e[0]&&(e=t[e.slice(1)]),e},this);return t.tail&&t.tail.path&&(n.length>0&&"/"===t.tail.path.charAt(0)?n.push(t.tail.path.slice(1)):n.push(t.tail.path)),n.join("/")},__setMulti:function(e){for(var t in e)this._propertySetter(t,e[t]);void 0!==e.data&&(this._pathEffector("data",this.data),this._notifyChange("data")),void 0!==e.active&&(this._pathEffector("active",this.active),this._notifyChange("active")),void 0!==e.tail&&(this._pathEffector("tail",this.tail),this._notifyChange("tail"))}})},238:function(e,t,i){"use strict";i(211);var n=i(3),o=i(25);customElements.define("ha-textarea",class extends o.a{static get template(){return n.a`
      <style>
        :host {
          display: block;
        }
      </style>
      <paper-textarea label="[[label]]" value="{{value}}"></paper-textarea>
    `}static get properties(){return{name:String,label:String,value:{type:String,notify:!0}}}})},241:function(e,t,i){"use strict";i.d(t,"a",function(){return o});i(4);var n=i(1);const o={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),t)if("document"===e)this.scrollTarget=this._doc;else if("string"==typeof e){var i=this.domHost;this.scrollTarget=i&&i.$?i.$[e]:Object(n.a)(this.ownerDocument).querySelector("#"+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){var i;"object"==typeof e?(i=e.left,t=e.top):i=e,i=i||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(i,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var i=t===this._doc?window:t;e?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),i.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(i.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}}},243:function(e,t,i){"use strict";var n=i(8),o=i(96);t.a=Object(n.a)(e=>(class extends e{navigate(...e){Object(o.a)(this,...e)}}))},246:function(e,t,i){"use strict";i(199);var n=i(3);i(25);customElements.define("ha-app-layout",class extends(customElements.get("app-header-layout")){static get template(){return n.a`
      <style>
        :host {
          display: block;
          /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
          position: relative;
          z-index: 0;
        }

        #wrapper ::slotted([slot="header"]) {
          @apply --layout-fixed-top;
          z-index: 1;
        }

        #wrapper.initializing ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) {
          height: 100%;
        }

        :host([has-scrolling-region]) #wrapper ::slotted([slot="header"]) {
          position: absolute;
        }

        :host([has-scrolling-region])
          #wrapper.initializing
          ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) #wrapper #contentContainer {
          @apply --layout-fit;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
          position: relative;
        }

        #contentContainer {
          /* Create a stacking context here so that all children appear below the header. */
          position: relative;
          z-index: 0;
          /* Using 'transform' will cause 'position: fixed' elements to behave like
           'position: absolute' relative to this element. */
          transform: translate(0);
        }

        @media print {
          :host([has-scrolling-region]) #wrapper #contentContainer {
            overflow-y: visible;
          }
        }
      </style>

      <div id="wrapper" class="initializing">
        <slot id="headerSlot" name="header"></slot>

        <div id="contentContainer"><slot></slot></div>
        <slot id="fab" name="fab"></slot>
      </div>
    `}})},251:function(e,t,i){"use strict";i(4),i(31),i(233);var n=i(235),o=i(87),r=i(5),a=i(3);Object(r.a)({_template:a.a`
    <style>
      :host {
        display: inline-block;
      }

      :host ::slotted(*) {
        padding: var(--paper-radio-group-item-padding, 12px);
      }
    </style>

    <slot></slot>
`,is:"paper-radio-group",behaviors:[n.a],hostAttributes:{role:"radiogroup"},properties:{attrForSelected:{type:String,value:"name"},selectedAttribute:{type:String,value:"checked"},selectable:{type:String,value:"paper-radio-button"},allowEmptySelection:{type:Boolean,value:!1}},select:function(e){var t=this._valueToItem(e);if(!t||!t.hasAttribute("disabled")){if(this.selected){var i=this._valueToItem(this.selected);if(this.selected==e){if(!this.allowEmptySelection)return void(i&&(i.checked=!0));e=""}i&&(i.checked=!1)}o.a.select.apply(this,[e]),this.fire("paper-radio-group-changed")}},_activateFocusedItem:function(){this._itemActivate(this._valueForItem(this.focusedItem),this.focusedItem)},_onUpKey:function(e){this._focusPrevious(),e.preventDefault(),this._activateFocusedItem()},_onDownKey:function(e){this._focusNext(),e.preventDefault(),this._activateFocusedItem()},_onLeftKey:function(e){n.b._onLeftKey.apply(this,arguments),this._activateFocusedItem()},_onRightKey:function(e){n.b._onRightKey.apply(this,arguments),this._activateFocusedItem()}})},253:function(e,t,i){"use strict";i.d(t,"a",function(){return r});i(4);var n=i(241),o=i(254);const r=[n.a,{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],_updateScrollState:function(e){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return Math.max(0,this._scrollTop)},attached:function(){this._scrollStateChanged()},detached:function(){this._tearDownEffects()},createEffect:function(e,t){var i=o.a[e];if(!i)throw new ReferenceError(this._getUndefinedMsg(e));var n=this._boundEffect(i,t||{});return n.setUp(),n},_effectsChanged:function(e,t,i){this._tearDownEffects(),e&&i&&(e.split(" ").forEach(function(e){var i;""!==e&&((i=o.a[e])?this._effects.push(this._boundEffect(i,t[e])):console.warn(this._getUndefinedMsg(e)))},this),this._setUpEffect())},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(e,t){t=t||{};var i=parseFloat(t.startsAt||0),n=parseFloat(t.endsAt||1),o=n-i,r=function(){},a=0===i&&1===n?e.run:function(t,n){e.run.call(this,Math.max(0,(t-i)/o),n)};return{setUp:e.setUp?e.setUp.bind(this,t):r,run:e.run?a.bind(this):r,tearDown:e.tearDown?e.tearDown.bind(this):r}},_setUpEffect:function(){this.isAttached&&this._effects&&(this._effectsRunFn=[],this._effects.forEach(function(e){!1!==e.setUp()&&this._effectsRunFn.push(e.run)},this))},_tearDownEffects:function(){this._effects&&this._effects.forEach(function(e){e.tearDown()}),this._effectsRunFn=[],this._effects=[]},_runEffects:function(e,t){this._effectsRunFn&&this._effectsRunFn.forEach(function(i){i(e,t)})},_scrollHandler:function(){this._scrollStateChanged()},_scrollStateChanged:function(){if(!this.disabled){var e=this._clampedScrollTop;this._updateScrollState(e),this.threshold>0&&this._setThresholdTriggered(e>=this.threshold)}},_getDOMRef:function(e){console.warn("_getDOMRef","`"+e+"` is undefined")},_getUndefinedMsg:function(e){return"Scroll effect `"+e+"` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/"+e+".html ?"}}]},254:function(e,t,i){"use strict";i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o});i(4);const n={};const o=function(e,t){if(null!=n[e])throw new Error("effect `"+e+"` is already registered.");n[e]=t}},269:function(e,t,i){"use strict";var n=i(3),o=i(25),r=(i(105),i(90),i(139),i(222),i(106));customElements.define("ha-combo-box",class extends(Object(r.a)(o.a)){static get template(){return n.a`
      <style>
        paper-input > paper-icon-button {
          width: 24px;
          height: 24px;
          padding: 2px;
          color: var(--secondary-text-color);
        }
        [hidden] {
          display: none;
        }
      </style>
      <vaadin-combo-box-light
        items="[[_items]]"
        item-value-path="[[itemValuePath]]"
        item-label-path="[[itemLabelPath]]"
        value="{{value}}"
        opened="{{opened}}"
        allow-custom-value="[[allowCustomValue]]"
        on-change="_fireChanged"
      >
        <paper-input
          autofocus="[[autofocus]]"
          label="[[label]]"
          class="input"
          value="[[value]]"
        >
          <paper-icon-button
            slot="suffix"
            class="clear-button"
            icon="hass:close"
            hidden$="[[!value]]"
            >Clear</paper-icon-button
          >
          <paper-icon-button
            slot="suffix"
            class="toggle-button"
            icon="[[_computeToggleIcon(opened)]]"
            hidden$="[[!items.length]]"
            >Toggle</paper-icon-button
          >
        </paper-input>
        <template>
          <style>
            paper-item {
              margin: -5px -10px;
              padding: 0;
            }
          </style>
          <paper-item>[[_computeItemLabel(item, itemLabelPath)]]</paper-item>
        </template>
      </vaadin-combo-box-light>
    `}static get properties(){return{allowCustomValue:Boolean,items:{type:Object,observer:"_itemsChanged"},_items:Object,itemLabelPath:String,itemValuePath:String,autofocus:Boolean,label:String,opened:{type:Boolean,value:!1,observer:"_openedChanged"},value:{type:String,notify:!0}}}_openedChanged(e){e||(this._items=this.items)}_itemsChanged(e){this.opened||(this._items=e)}_computeToggleIcon(e){return e?"hass:menu-up":"hass:menu-down"}_computeItemLabel(e,t){return t?e[t]:e}_fireChanged(e){e.stopPropagation(),this.fire("change")}});var a=i(171);customElements.define("ha-service-picker",class extends(Object(a.a)(o.a)){static get template(){return n.a`
      <ha-combo-box
        label="[[localize('ui.components.service-picker.service')]]"
        items="[[_services]]"
        value="{{value}}"
        allow-custom-value=""
      ></ha-combo-box>
    `}static get properties(){return{hass:{type:Object,observer:"_hassChanged"},_services:Array,value:{type:String,notify:!0}}}_hassChanged(e,t){if(!e)return void(this._services=[]);if(t&&e.services===t.services)return;const i=[];Object.keys(e.services).sort().forEach(t=>{const n=Object.keys(e.services[t]).sort();for(let e=0;e<n.length;e++)i.push(`${t}.${n[e]}`)}),this._services=i}})},303:function(e,t,i){"use strict";i.d(t,"a",function(){return o});var n=i(179);i(238);class o extends n.a{constructor(e){super(e),this.state.isValid=!0,this.state.value=JSON.stringify(e.value||{},null,2),this.onChange=this.onChange.bind(this)}onChange(e){const t=e.target.value;let i,n;try{i=JSON.parse(t),n=!0}catch(o){n=!1}this.setState({value:t,isValid:n}),n&&this.props.onChange(i)}componentWillReceiveProps({value:e}){e!==this.props.value&&this.setState({value:JSON.stringify(e,null,2),isValid:!0})}render({label:e},{value:t,isValid:i}){const o={minWidth:300,width:"100%"};return i||(o.border="1px solid red"),Object(n.c)("ha-textarea",{label:e,value:t,style:o,"onvalue-changed":this.onChange,dir:"ltr"})}}},329:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var n=i(179),o=(i(90),i(187),i(200));class r extends n.a{constructor(){super(),this.onChange=o.a.bind(this,"condition"),this.entityPicked=this.entityPicked.bind(this)}entityPicked(e){this.props.onChange(this.props.index,Object.assign({},this.props.condition,{entity_id:e.target.value}))}render({condition:e,hass:t,localize:i}){const{entity_id:o,state:r}=e,a=e.for;return Object(n.c)("div",null,Object(n.c)("ha-entity-picker",{value:o,onChange:this.entityPicked,hass:t,allowCustomEntity:!0}),Object(n.c)("paper-input",{label:i("ui.panel.config.automation.editor.conditions.type.state.state"),name:"state",value:r,"onvalue-changed":this.onChange}),a&&Object(n.c)("pre",null,"For: ",JSON.stringify(a,null,2)))}}r.defaultConfig={entity_id:"",state:""}},355:function(e,t,i){"use strict";function n(e){return"latitude"in e.attributes&&"longitude"in e.attributes}i.d(t,"a",function(){return n})},360:function(e,t,i){"use strict";var n=i(179),o=(i(227),i(141),i(139),i(90),i(238),i(187),i(200));class r extends n.a{constructor(){super(),this.onChange=o.a.bind(this,"condition"),this.entityPicked=this.entityPicked.bind(this)}entityPicked(e){this.props.onChange(this.props.index,Object.assign({},this.props.condition,{entity_id:e.target.value}))}render({condition:e,hass:t,localize:i}){const{value_template:o,entity_id:r,below:a,above:s}=e;return Object(n.c)("div",null,Object(n.c)("ha-entity-picker",{value:r,onChange:this.entityPicked,hass:t,allowCustomEntity:!0}),Object(n.c)("paper-input",{label:i("ui.panel.config.automation.editor.conditions.type.numeric_state.above"),name:"above",value:s,"onvalue-changed":this.onChange}),Object(n.c)("paper-input",{label:i("ui.panel.config.automation.editor.conditions.type.numeric_state.below"),name:"below",value:a,"onvalue-changed":this.onChange}),Object(n.c)("ha-textarea",{label:i("ui.panel.config.automation.editor.conditions.type.numeric_state.value_template"),name:"value_template",value:o,"onvalue-changed":this.onChange,dir:"ltr"}))}}r.defaultConfig={entity_id:""};var a=i(329);i(233),i(251);class s extends n.a{constructor(){super(),this.onChange=o.a.bind(this,"condition"),this.afterPicked=this.radioGroupPicked.bind(this,"after"),this.beforePicked=this.radioGroupPicked.bind(this,"before")}radioGroupPicked(e,t){const i=Object.assign({},this.props.condition);t.target.selected?i[e]=t.target.selected:delete i[e],this.props.onChange(this.props.index,i)}render({condition:e,localize:t}){const{after:i,after_offset:o,before:r,before_offset:a}=e;return Object(n.c)("div",null,Object(n.c)("label",{id:"beforelabel"},t("ui.panel.config.automation.editor.conditions.type.sun.before")),Object(n.c)("paper-radio-group",{"allow-empty-selection":!0,selected:r,"aria-labelledby":"beforelabel","onpaper-radio-group-changed":this.beforePicked},Object(n.c)("paper-radio-button",{name:"sunrise"},t("ui.panel.config.automation.editor.conditions.type.sun.sunrise")),Object(n.c)("paper-radio-button",{name:"sunset"},t("ui.panel.config.automation.editor.conditions.type.sun.sunset"))),Object(n.c)("paper-input",{label:t("ui.panel.config.automation.editor.conditions.type.sun.before_offset"),name:"before_offset",value:a,"onvalue-changed":this.onChange,disabled:void 0===r}),Object(n.c)("label",{id:"afterlabel"},t("ui.panel.config.automation.editor.conditions.type.sun.after")),Object(n.c)("paper-radio-group",{"allow-empty-selection":!0,selected:i,"aria-labelledby":"afterlabel","onpaper-radio-group-changed":this.afterPicked},Object(n.c)("paper-radio-button",{name:"sunrise"},t("ui.panel.config.automation.editor.conditions.type.sun.sunrise")),Object(n.c)("paper-radio-button",{name:"sunset"},t("ui.panel.config.automation.editor.conditions.type.sun.sunset"))),Object(n.c)("paper-input",{label:t("ui.panel.config.automation.editor.conditions.type.sun.after_offset"),name:"after_offset",value:o,"onvalue-changed":this.onChange,disabled:void 0===i}))}}s.defaultConfig={};class l extends n.a{constructor(){super(),this.onChange=o.a.bind(this,"condition")}render({condition:e,localize:t}){const{value_template:i}=e;return Object(n.c)("div",null,Object(n.c)("ha-textarea",{label:t("ui.panel.config.automation.editor.conditions.type.template.value_template"),name:"value_template",value:i,"onvalue-changed":this.onChange,dir:"ltr"}))}}l.defaultConfig={value_template:""};class c extends n.a{constructor(){super(),this.onChange=o.a.bind(this,"condition")}render({condition:e,localize:t}){const{after:i,before:o}=e;return Object(n.c)("div",null,Object(n.c)("paper-input",{label:t("ui.panel.config.automation.editor.conditions.type.time.after"),name:"after",value:i,"onvalue-changed":this.onChange}),Object(n.c)("paper-input",{label:t("ui.panel.config.automation.editor.conditions.type.time.before"),name:"before",value:o,"onvalue-changed":this.onChange}))}}c.defaultConfig={};var d=i(355),h=i(175);function p(e){return Object(d.a)(e)&&"zone"!==Object(h.a)(e)}class u extends n.a{constructor(){super(),this.onChange=o.a.bind(this,"condition"),this.entityPicked=this.entityPicked.bind(this),this.zonePicked=this.zonePicked.bind(this)}entityPicked(e){this.props.onChange(this.props.index,Object.assign({},this.props.condition,{entity_id:e.target.value}))}zonePicked(e){this.props.onChange(this.props.index,Object.assign({},this.props.condition,{zone:e.target.value}))}render({condition:e,hass:t,localize:i}){const{entity_id:o,zone:r}=e;return Object(n.c)("div",null,Object(n.c)("ha-entity-picker",{label:i("ui.panel.config.automation.editor.conditions.type.zone.entity"),value:o,onChange:this.entityPicked,hass:t,allowCustomEntity:!0,entityFilter:p}),Object(n.c)("ha-entity-picker",{label:i("ui.panel.config.automation.editor.conditions.type.zone.zone"),value:r,onChange:this.zonePicked,hass:t,allowCustomEntity:!0,domainFilter:"zone"}))}}u.defaultConfig={entity_id:"",zone:""},i.d(t,"a",function(){return v});const m={state:a.a,numeric_state:r,sun:s,template:l,time:c,zone:u},f=Object.keys(m).sort();class v extends n.a{constructor(){super(),this.typeChanged=this.typeChanged.bind(this)}typeChanged(e){const t=e.target.selectedItem.attributes.condition.value;t!==this.props.condition.condition&&this.props.onChange(this.props.index,Object.assign({condition:t},m[t].defaultConfig))}render({index:e,condition:t,onChange:i,hass:o,localize:r}){const a=m[t.condition],s=f.indexOf(t.condition);return a?Object(n.c)("div",null,Object(n.c)("paper-dropdown-menu-light",{label:r("ui.panel.config.automation.editor.conditions.type_select"),"no-animations":!0},Object(n.c)("paper-listbox",{slot:"dropdown-content",selected:s,"oniron-select":this.typeChanged},f.map(e=>Object(n.c)("paper-item",{condition:e},r(`ui.panel.config.automation.editor.conditions.type.${e}.label`))))),Object(n.c)(a,{index:e,condition:t,onChange:i,hass:o,localize:r})):Object(n.c)("div",null,r("ui.panel.config.automation.editor.conditions.unsupported_condition","condition",t.condition),Object(n.c)("pre",null,JSON.stringify(t,null,2)))}}},400:function(e,t,i){"use strict";i.d(t,"a",function(){return o});var n=i(179);function o(e){Object(n.e)(()=>null,e)}},410:function(e,t,i){"use strict";var n=i(179),o=(i(82),i(172),i(143),i(105),i(139),i(141),i(227),i(269),i(303));class r extends n.a{constructor(){super(),this.serviceChanged=this.serviceChanged.bind(this),this.serviceDataChanged=this.serviceDataChanged.bind(this)}serviceChanged(e){this.props.onChange(this.props.index,Object.assign({},this.props.action,{service:e.target.value}))}serviceDataChanged(e){this.props.onChange(this.props.index,Object.assign({},this.props.action,{data:e}))}render({action:e,hass:t,localize:i}){const{service:r,data:a}=e;return Object(n.c)("div",null,Object(n.c)("ha-service-picker",{hass:t,value:r,onChange:this.serviceChanged}),Object(n.c)(o.a,{label:i("ui.panel.config.automation.editor.actions.type.service.service_data"),value:a,onChange:this.serviceDataChanged}))}}r.defaultConfig={alias:"",service:"",data:{}};var a=i(329),s=i(360);class l extends n.a{render({action:e,index:t,onChange:i,hass:o,localize:r}){return Object(n.c)(s.a,{condition:e,onChange:i,index:t,hass:o,localize:r})}}l.defaultConfig=Object.assign({condition:"state"},a.a.defaultConfig);i(90);var c=i(200);class d extends n.a{constructor(){super(),this.onChange=c.a.bind(this,"action")}render({action:e,localize:t}){const{delay:i}=e;return Object(n.c)("div",null,Object(n.c)("paper-input",{label:t("ui.panel.config.automation.editor.actions.type.delay.delay"),name:"delay",value:i,"onvalue-changed":this.onChange}))}}d.defaultConfig={delay:""};i(238);class h extends n.a{constructor(){super(),this.onChange=c.a.bind(this,"action"),this.onTemplateChange=this.onTemplateChange.bind(this)}onTemplateChange(e){this.props.onChange(this.props.index,Object.assign({},this.props.action,{[e.target.getAttribute("name")]:e.target.value}))}render({action:e,localize:t}){const{wait_template:i,timeout:o}=e;return Object(n.c)("div",null,Object(n.c)("ha-textarea",{label:t("ui.panel.config.automation.editor.actions.type.wait_template.wait_template"),name:"wait_template",value:i,"onvalue-changed":this.onTemplateChange,dir:"ltr"}),Object(n.c)("paper-input",{label:t("ui.panel.config.automation.editor.actions.type.wait_template.timeout"),name:"timeout",value:o,"onvalue-changed":this.onChange}))}}h.defaultConfig={wait_template:"",timeout:""};const p={service:r,delay:d,wait_template:h,condition:l,event:class extends n.a{static get defaultConfig(){return{event:"",event_data:{}}}constructor(){super(),this.onChange=void 0,this.onChange=c.a.bind(this,"action"),this.serviceDataChanged=this.serviceDataChanged.bind(this)}render(){const{action:{event:e,event_data:t},localize:i}=this.props;return Object(n.c)("div",null,Object(n.c)("paper-input",{label:i("ui.panel.config.automation.editor.actions.type.event.event"),name:"event",value:e,"onvalue-changed":this.onChange}),Object(n.c)(o.a,{label:i("ui.panel.config.automation.editor.actions.type.event.service_data"),value:t,onChange:this.serviceDataChanged}))}serviceDataChanged(e){this.props.onChange(this.props.index,Object.assign({},this.props.action,{event_data:e}))}}},u=Object.keys(p).sort();function m(e){const t=Object.keys(p);for(let i=0;i<t.length;i++)if(t[i]in e)return t[i];return null}class f extends n.a{constructor(){super(),this.typeChanged=this.typeChanged.bind(this)}typeChanged(e){const t=e.target.selectedItem.attributes.action.value;m(this.props.action)!==t&&this.props.onChange(this.props.index,p[t].defaultConfig)}render({index:e,action:t,onChange:i,hass:o,localize:r}){const a=m(t),s=a&&p[a],l=u.indexOf(a);return s?Object(n.c)("div",null,Object(n.c)("paper-dropdown-menu-light",{label:r("ui.panel.config.automation.editor.actions.type_select"),"no-animations":!0},Object(n.c)("paper-listbox",{slot:"dropdown-content",selected:l,"oniron-select":this.typeChanged},u.map(e=>Object(n.c)("paper-item",{action:e},r(`ui.panel.config.automation.editor.actions.type.${e}.label`))))),Object(n.c)(s,{index:e,action:t,onChange:i,hass:o,localize:r})):Object(n.c)("div",null,r("ui.panel.config.automation.editor.actions.unsupported_action","action",a),Object(n.c)("pre",null,JSON.stringify(t,null,2)))}}class v extends n.a{constructor(){super(),this.onDelete=this.onDelete.bind(this)}onDelete(){confirm(this.props.localize("ui.panel.config.automation.editor.actions.delete_confirm"))&&this.props.onChange(this.props.index,null)}render(e){return Object(n.c)("ha-card",null,Object(n.c)("div",{class:"card-content"},Object(n.c)("div",{class:"card-menu"},Object(n.c)("paper-menu-button",{"no-animations":!0,"horizontal-align":"right","horizontal-offset":"-5","vertical-offset":"-5"},Object(n.c)("paper-icon-button",{icon:"hass:dots-vertical",slot:"dropdown-trigger"}),Object(n.c)("paper-listbox",{slot:"dropdown-content"},Object(n.c)("paper-item",{disabled:!0},e.localize("ui.panel.config.automation.editor.actions.duplicate")),Object(n.c)("paper-item",{onTap:this.onDelete},e.localize("ui.panel.config.automation.editor.actions.delete"))))),Object(n.c)(f,e)))}}i.d(t,"a",function(){return g});class g extends n.a{constructor(){super(),this.addAction=this.addAction.bind(this),this.actionChanged=this.actionChanged.bind(this)}addAction(){const e=this.props.script.concat({service:""});this.props.onChange(e)}actionChanged(e,t){const i=this.props.script.concat();null===t?i.splice(e,1):i[e]=t,this.props.onChange(i)}render({script:e,hass:t,localize:i}){return Object(n.c)("div",{class:"script"},e.map((e,o)=>Object(n.c)(v,{index:o,action:e,onChange:this.actionChanged,hass:t,localize:i})),Object(n.c)("ha-card",null,Object(n.c)("div",{class:"card-actions add-card"},Object(n.c)("mwc-button",{onTap:this.addAction},i("ui.panel.config.automation.editor.actions.add")))))}}},723:function(e,t,i){"use strict";i.r(t);i(236);var n=i(3),o=i(25),r=(i(216),i(146),i(105),i(229),i(179)),a=(i(246),i(127),i(90),i(191),i(172),i(410));class s extends r.a{constructor(){super(),this.onChange=this.onChange.bind(this),this.sequenceChanged=this.sequenceChanged.bind(this)}onChange(e){this.props.onChange(Object.assign({},this.props.script,{[e.target.name]:e.target.value}))}sequenceChanged(e){this.props.onChange(Object.assign({},this.props.script,{sequence:e}))}render({script:e,isWide:t,hass:i,localize:n}){const{alias:o,sequence:s}=e;return Object(r.c)("div",null,Object(r.c)("ha-config-section",{"is-wide":t},Object(r.c)("span",{slot:"header"},o),Object(r.c)("span",{slot:"introduction"},"Use scripts to execute a sequence of actions."),Object(r.c)("ha-card",null,Object(r.c)("div",{class:"card-content"},Object(r.c)("paper-input",{label:"Name",name:"alias",value:o,"onvalue-changed":this.onChange})))),Object(r.c)("ha-config-section",{"is-wide":t},Object(r.c)("span",{slot:"header"},"Sequence"),Object(r.c)("span",{slot:"introduction"},"The sequence of actions of this script.",Object(r.c)("p",null,Object(r.c)("a",{href:"https://home-assistant.io/docs/scripts/",target:"_blank"},"Learn more about available actions."))),Object(r.c)(a.a,{script:s,onChange:this.sequenceChanged,hass:i,localize:n})))}}var l=i(400),c=i(185),d=i(173),h=i(243),p=i(171),u=i(93);const m=(e,t)=>e.callApi("DELETE",`config/script/config/${t}`);customElements.define("ha-script-editor",class extends(Object(p.a)(Object(h.a)(o.a))){static get template(){return n.a`
      <style include="ha-style">
        .errors {
          padding: 20px;
          font-weight: bold;
          color: var(--google-red-500);
        }
        .content {
          padding-bottom: 20px;
        }
        .triggers,
        .script {
          margin-top: -16px;
        }
        .triggers ha-card,
        .script ha-card {
          margin-top: 16px;
        }
        .add-card mwc-button {
          display: block;
          text-align: center;
        }
        .card-menu {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
          color: var(--primary-text-color);
        }
        .card-menu paper-item {
          cursor: pointer;
        }
        span[slot="introduction"] a {
          color: var(--primary-color);
        }
        paper-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
          margin-bottom: -80px;
          transition: margin-bottom 0.3s;
        }

        paper-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }

        paper-fab[dirty] {
          margin-bottom: 0;
        }

        paper-fab[rtl] {
          right: auto;
          left: 16px;
        }

        paper-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }
      </style>
      <ha-app-layout has-scrolling-region="">
        <app-header slot="header" fixed="">
          <app-toolbar>
            <ha-paper-icon-button-arrow-prev
              on-click="backTapped"
            ></ha-paper-icon-button-arrow-prev>
            <div main-title>Script [[computeName(script)]]</div>
            <template is="dom-if" if="[[!creatingNew]]">
              <paper-icon-button
                icon="hass:delete"
                on-click="_delete"
              ></paper-icon-button>
            </template>
          </app-toolbar>
        </app-header>
        <div class="content">
          <template is="dom-if" if="[[errors]]">
            <div class="errors">[[errors]]</div>
          </template>
          <div id="root"></div>
        </div>
        <paper-fab
          slot="fab"
          is-wide$="[[isWide]]"
          dirty$="[[dirty]]"
          icon="hass:content-save"
          title="Save"
          on-click="saveScript"
          rtl$="[[rtl]]"
        ></paper-fab>
      </ha-app-layout>
    `}static get properties(){return{hass:{type:Object},errors:{type:Object,value:null},dirty:{type:Boolean,value:!1},config:{type:Object,value:null},script:{type:Object,observer:"scriptChanged"},creatingNew:{type:Boolean,observer:"creatingNewChanged"},isWide:{type:Boolean,observer:"_updateComponent"},_rendered:{type:Object,value:null},_renderScheduled:{type:Boolean,value:!1},rtl:{type:Boolean,reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}ready(){this.configChanged=this.configChanged.bind(this),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this._rendered&&(Object(l.a)(this._rendered),this._rendered=null)}configChanged(e){null!==this._rendered&&(this.config=e,this.errors=null,this.dirty=!0,this._updateComponent())}scriptChanged(e,t){e&&(this.hass?t&&t.entity_id===e.entity_id||this.hass.callApi("get","config/script/config/"+Object(c.a)(e.entity_id)).then(e=>{var t=e.sequence;t&&!Array.isArray(t)&&(e.sequence=[t]),this.dirty=!1,this.config=e,this._updateComponent()},()=>{alert("Only scripts inside scripts.yaml are editable."),history.back()}):setTimeout(()=>this.scriptChanged(e,t),0))}creatingNewChanged(e){e&&(this.dirty=!1,this.config={alias:"New Script",sequence:[{service:"",data:{}}]},this._updateComponent())}backTapped(){this.dirty&&!confirm("You have unsaved changes. Are you sure you want to leave?")||history.back()}_updateComponent(){!this._renderScheduled&&this.hass&&this.config&&(this._renderScheduled=!0,Promise.resolve().then(()=>{this._rendered=function(e,t,i){return Object(r.e)(Object(r.c)(s,t),e,i)}(this.$.root,{script:this.config,onChange:this.configChanged,isWide:this.isWide,hass:this.hass,localize:this.localize},this._rendered),this._renderScheduled=!1}))}async _delete(){confirm("Are you sure you want to delete this script?")&&(await m(this.hass,Object(c.a)(this.script.entity_id)),history.back())}saveScript(){var e=this.creatingNew?""+Date.now():Object(c.a)(this.script.entity_id);this.hass.callApi("post","config/script/config/"+e,this.config).then(()=>{this.dirty=!1,this.creatingNew&&this.navigate(`/config/script/edit/${e}`,!0)},e=>{throw this.errors=e.body.message,e})}computeName(e){return e&&Object(d.a)(e)}_computeRTL(e){return Object(u.a)(e)}});var f=i(0),v=(i(178),i(148),i(54)),g=i(50);function _(e){var t,i=C(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function b(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function y(e){return e.decorators&&e.decorators.length}function w(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function x(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function C(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}!function(e,t,i,n){var o=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(i){t.forEach(function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach(function(n){t.forEach(function(t){var o=t.placement;if(t.kind===n&&("static"===o||"prototype"===o)){var r="static"===o?e:i;this.defineClassElement(r,t)}},this)},this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var n=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],n=[],o={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,o)},this),e.forEach(function(e){if(!y(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),n.push.apply(n,t.finishers)},this),!t)return{elements:i,finishers:n};var r=this.decorateConstructor(i,t);return n.push.apply(n,r.finishers),r.finishers=n,r},addElementPlacement:function(e,t,i){var n=t[e.placement];if(!i&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var i=[],n=[],o=e.decorators,r=o.length-1;r>=0;r--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[r])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&n.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:n,extras:i}},decorateConstructor:function(e,t){for(var i=[],n=t.length-1;n>=0;n--){var o=this.fromClassDescriptor(e),r=this.toClassDescriptor((0,t[n])(o)||o);if(void 0!==r.finisher&&i.push(r.finisher),void 0!==r.elements){e=r.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=C(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var r={kind:t,key:i,placement:n,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),r.initializer=e.initializer),r},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),i=x(e,"finisher"),n=this.toElementDescriptors(e.extras);return{element:t,finisher:i,extras:n}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=x(e,"finisher"),n=this.toElementDescriptors(e.elements);return{elements:n,finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var n=(0,t[i])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}();if(n)for(var r=0;r<n.length;r++)o=n[r](o);var a=t(function(e){o.initializeInstanceElements(e,s.elements)},i),s=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===r.key&&e.placement===r.placement},n=0;n<e.length;n++){var o,r=e[n];if("method"===r.kind&&(o=t.find(i)))if(w(r.descriptor)||w(o.descriptor)){if(y(r)||y(o))throw new ReferenceError("Duplicated methods ("+r.key+") can't be decorated.");o.descriptor=r.descriptor}else{if(y(r)){if(y(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+r.key+").");o.decorators=r.decorators}b(r,o)}else t.push(r)}return t}(a.d.map(_)),e);o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}([Object(f.d)("ha-script-picker")],function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(f.g)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(f.g)()],key:"scripts",value:void 0},{kind:"field",decorators:[Object(f.g)()],key:"isWide",value:void 0},{kind:"method",key:"render",value:function(){return f.f`
      <hass-subpage
        .header=${this.hass.localize("ui.panel.config.script.caption")}
      >
        <ha-config-section .isWide=${this.isWide}>
          <div slot="header">Script Editor</div>
          <div slot="introduction">
            The script editor allows you to create and edit scripts. Please read
            <a
              href="https://home-assistant.io/docs/scripts/editor/"
              target="_blank"
              >the instructions</a
            >
            to make sure that you have configured JAVIS Home correctly.
          </div>

          <ha-card header="Pick script to edit">
            ${0===this.scripts.length?f.f`
                  <div class="card-content">
                    <p>We couldn't find any scripts.</p>
                  </div>
                `:this.scripts.map(e=>f.f`
                    <div class="script">
                      <paper-icon-button
                        .script=${e}
                        icon="hass:play"
                        @click=${this._runScript}
                      ></paper-icon-button>
                      <paper-item-body>
                        <div>${Object(d.a)(e)}</div>
                      </paper-item-body>
                      <div class="actions">
                        <a href=${`/config/script/edit/${e.entity_id}`}>
                          <paper-icon-button
                            icon="hass:pencil"
                          ></paper-icon-button>
                        </a>
                      </div>
                    </div>
                  `)}
          </ha-card>
        </ha-config-section>

        <a href="/config/script/new">
          <paper-fab
            slot="fab"
            ?is-wide=${this.isWide}
            icon="hass:plus"
            title="Add Script"
            ?rtl=${Object(u.a)(this.hass)}
          ></paper-fab>
        </a>
      </hass-subpage>
    `}},{kind:"method",key:"_runScript",value:async function(e){const t=e.currentTarget.script;await((e,t,i)=>e.callService("script",Object(c.a)(t),i))(this.hass,t.entity_id),Object(g.a)(this,{message:`Triggered ${Object(d.a)(t)}`})}},{kind:"get",static:!0,key:"styles",value:function(){return[v.a,f.c`
        :host {
          display: block;
        }

        ha-card {
          padding-bottom: 8px;
          margin-bottom: 56px;
        }

        .script {
          display: flex;
          flex-direction: horizontal;
          align-items: center;
          padding: 0 8px;
          margin: 4px 0;
        }

        .script > *:first-child {
          margin-right: 8px;
        }

        .script a[href],
        paper-icon-button {
          color: var(--primary-text-color);
        }

        .actions {
          display: flex;
        }

        paper-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
        }

        paper-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }

        paper-fab[rtl] {
          right: auto;
          left: 16px;
        }

        paper-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }

        a {
          color: var(--primary-color);
        }
      `]}}]}},f.a);var k=i(175);customElements.define("ha-config-script",class extends o.a{static get template(){return n.a`
      <style>
        ha-script-picker,
        ha-script-editor {
          height: 100%;
        }
      </style>
      <app-route
        route="[[route]]"
        pattern="/edit/:script"
        data="{{_routeData}}"
        active="{{_edittingScript}}"
      ></app-route>
      <app-route
        route="[[route]]"
        pattern="/new"
        active="{{_creatingNew}}"
      ></app-route>

      <template is="dom-if" if="[[!showEditor]]">
        <ha-script-picker
          hass="[[hass]]"
          scripts="[[scripts]]"
          is-wide="[[isWide]]"
        ></ha-script-picker>
      </template>

      <template is="dom-if" if="[[showEditor]]" restamp="">
        <ha-script-editor
          hass="[[hass]]"
          script="[[script]]"
          is-wide="[[isWide]]"
          creating-new="[[_creatingNew]]"
        ></ha-script-editor>
      </template>
    `}static get properties(){return{hass:Object,route:Object,isWide:Boolean,_routeData:Object,_routeMatches:Boolean,_creatingNew:Boolean,_edittingScript:Boolean,scripts:{type:Array,computed:"computeScripts(hass)"},script:{type:Object,computed:"computeScript(scripts, _edittingScript, _routeData)"},showEditor:{type:Boolean,computed:"computeShowEditor(_edittingScript, _creatingNew)"}}}computeScript(e,t,i){if(!e||!t)return null;for(var n=0;n<e.length;n++)if(e[n].entity_id===i.script)return e[n];return null}computeScripts(e){var t=[];return Object.keys(e.states).forEach(function(i){var n=e.states[i];"script"===Object(k.a)(n)&&t.push(n)}),t.sort(function(e,t){var i=Object(d.a)(e),n=Object(d.a)(t);return i<n?-1:i>n?1:0})}computeShowEditor(e,t){return t||e}})},90:function(e,t,i){"use strict";i(4),i(111),i(112),i(113),i(114);var n=i(59),o=(i(40),i(5)),r=i(3),a=i(94);Object(o.a)({is:"paper-input",_template:r.a`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[a.a,n.a],properties:{value:{type:String}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}})},91:function(e,t,i){"use strict";i.d(t,"a",function(){return r});i(4);var n=i(5),o=i(3);const r=Object(n.a)({_template:o.a`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){r.instance||(r.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async(function(){this._text=e},100)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});r.instance=null,r.requestAvailability=function(){r.instance||(r.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(r.instance)}}}]);
//# sourceMappingURL=chunk.fa2b0905cb8458d8c61b.js.map