(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{735:function(e,t,i){"use strict";i.r(t);var n=i(0),r=(i(201),i(105),i(148),i(154),i(172),i(182),i(273)),o=i(125),s=i(461),a=i(207),c=i(173),d=i(19),l=i(50),p=i(462),u=i(118);function h(e){var t,i=v(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function f(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function y(e){return e.decorators&&e.decorators.length}function m(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function g(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function v(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function b(e,t,i){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(n){var r=Object.getOwnPropertyDescriptor(n,t);return r.get?r.get.call(i):r.value}})(e,t,i||e)}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const w=e=>void 0===e.should_expose||e.should_expose;!function(e,t,i,n){var r=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(i){t.forEach(function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach(function(n){t.forEach(function(t){var r=t.placement;if(t.kind===n&&("static"===r||"prototype"===r)){var o="static"===r?e:i;this.defineClassElement(o,t)}},this)},this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var n=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],n=[],r={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,r)},this),e.forEach(function(e){if(!y(e))return i.push(e);var t=this.decorateElement(e,r);i.push(t.element),i.push.apply(i,t.extras),n.push.apply(n,t.finishers)},this),!t)return{elements:i,finishers:n};var o=this.decorateConstructor(i,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,i){var n=t[e.placement];if(!i&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var i=[],n=[],r=e.decorators,o=r.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,r[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var d=c.extras;if(d){for(var l=0;l<d.length;l++)this.addElementPlacement(d[l],t);i.push.apply(i,d)}}return{element:e,finishers:n,extras:i}},decorateConstructor:function(e,t){for(var i=[],n=t.length-1;n>=0;n--){var r=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(r)||r);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=v(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:n,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),i=g(e,"finisher"),n=this.toElementDescriptors(e.extras);return{element:t,finisher:i,extras:n}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=g(e,"finisher"),n=this.toElementDescriptors(e.elements);return{elements:n,finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var n=(0,t[i])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}();if(n)for(var o=0;o<n.length;o++)r=n[o](r);var s=t(function(e){r.initializeInstanceElements(e,a.elements)},i),a=r.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var r,o=e[n];if("method"===o.kind&&(r=t.find(i)))if(m(o.descriptor)||m(r.descriptor)){if(y(o)||y(r))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");r.descriptor=o.descriptor}else{if(y(o)){if(y(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");r.decorators=o.decorators}f(o,r)}else t.push(o)}return t}(s.d.map(h)),e);r.initializeClassElements(s.F,a.elements),r.runClassFinishers(s.F,a.finishers)}([Object(n.d)("cloud-google-assistant")],function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[Object(n.g)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(n.g)()],key:"cloudStatus",value:void 0},{kind:"field",decorators:[Object(n.g)()],key:"narrow",value:void 0},{kind:"field",decorators:[Object(n.g)()],key:"_entities",value:void 0},{kind:"field",decorators:[Object(n.g)()],key:"_entityConfigs",value:()=>({})},{kind:"field",key:"_popstateSyncAttached",value:()=>!1},{kind:"field",key:"_popstateReloadStatusAttached",value:()=>!1},{kind:"field",key:"_isInitialExposed",value:void 0},{kind:"field",key:"_getEntityFilterFunc",value:()=>Object(o.a)(e=>Object(s.a)(e.include_domains,e.include_entities,e.exclude_domains,e.exclude_entities))},{kind:"method",key:"render",value:function(){if(void 0===this._entities)return n.f`
        <hass-loading-screen></hass-loading-screen>
      `;const e=Object(s.b)(this.cloudStatus.google_entities),t=this._getEntityFilterFunc(this.cloudStatus.google_entities),i=this._isInitialExposed||new Set,r=void 0===this._isInitialExposed;let o=0;const a=[],c=[];return this._entities.forEach(s=>{const d=this.hass.states[s.entity_id],l=this._entityConfigs[s.entity_id]||{},p=e?w(l):t(s.entity_id);p&&(o++,r&&i.add(s.entity_id)),(i.has(s.entity_id)?a:c).push(n.f`
        <ha-card>
          <div class="card-content">
            <state-info
              .hass=${this.hass}
              .stateObj=${d}
              secondary-line
              @click=${this._showMoreInfo}
            >
              ${s.traits.map(e=>e.substr(e.lastIndexOf(".")+1)).join(", ")}
            </state-info>
            <paper-toggle-button
              .entityId=${s.entity_id}
              .disabled=${!e}
              .checked=${p}
              @checked-changed=${this._exposeChanged}
            >
              Expose to Google Assistant
            </paper-toggle-button>
            ${s.might_2fa?n.f`
                  <paper-toggle-button
                    .entityId=${s.entity_id}
                    .checked=${Boolean(l.disable_2fa)}
                    @checked-changed=${this._disable2FAChanged}
                  >
                    Disable two factor authentication
                  </paper-toggle-button>
                `:""}
          </div>
        </ha-card>
      `)}),r&&(this._isInitialExposed=i),n.f`
      <hass-subpage header="Google Assistant">
        <span slot="toolbar-icon">
          ${o}${this.narrow?"":n.f`
            selected
          `}
        </span>
        ${e?n.f`
                <paper-icon-button
                  slot="toolbar-icon"
                  icon="hass:tune"
                  @click=${this._openDomainToggler}
                ></paper-icon-button>
              `:""}
        ${e?"":n.f`
                <div class="banner">
                  Editing which entities are exposed via this UI is disabled
                  because you have configured entity filters in
                  configuration.yaml.
                </div>
              `}
          ${a.length>0?n.f`
                  <h1>Exposed entities</h1>
                  <div class="content">${a}</div>
                `:""}
          ${c.length>0?n.f`
                  <h1>Not Exposed entities</h1>
                  <div class="content">${c}</div>
                `:""}
        </div>
      </hass-subpage>
    `}},{kind:"method",key:"firstUpdated",value:function(e){b(k(i.prototype),"firstUpdated",this).call(this,e),this._fetchData()}},{kind:"method",key:"updated",value:function(e){b(k(i.prototype),"updated",this).call(this,e),e.has("cloudStatus")&&(this._entityConfigs=this.cloudStatus.prefs.google_entity_configs)}},{kind:"method",key:"_fetchData",value:async function(){const e=await(e=>e.callWS({type:"cloud/google_assistant/entities"}))(this.hass);e.sort((e,t)=>{const i=this.hass.states[e.entity_id],n=this.hass.states[t.entity_id];return Object(a.b)(i?Object(c.a)(i):e.entity_id,n?Object(c.a)(n):t.entity_id)}),this._entities=e}},{kind:"method",key:"_showMoreInfo",value:function(e){const t=e.currentTarget.stateObj.entity_id;Object(d.a)(this,"hass-more-info",{entityId:t})}},{kind:"method",key:"_exposeChanged",value:async function(e){const t=e.currentTarget.entityId,i=e.detail.value;await this._updateExposed(t,i)}},{kind:"method",key:"_updateExposed",value:async function(e,t){t!==w(this._entityConfigs[e]||{})&&(await this._updateConfig(e,{should_expose:t}),this._ensureEntitySync())}},{kind:"method",key:"_disable2FAChanged",value:async function(e){const t=e.currentTarget.entityId,i=e.detail.value;i!==Boolean((this._entityConfigs[t]||{}).disable_2fa)&&await this._updateConfig(t,{disable_2fa:i})}},{kind:"method",key:"_updateConfig",value:async function(e,t){const i=await Object(r.i)(this.hass,e,t);this._entityConfigs=Object.assign({},this._entityConfigs,{[e]:i}),this._ensureStatusReload()}},{kind:"method",key:"_openDomainToggler",value:function(){Object(p.a)(this,{domains:this._entities.map(e=>Object(u.a)(e.entity_id)).filter((e,t,i)=>i.indexOf(e)===t),toggleDomain:(e,t)=>{this._entities.forEach(i=>{Object(u.a)(i.entity_id)===e&&this._updateExposed(i.entity_id,t)})}})}},{kind:"method",key:"_ensureStatusReload",value:function(){if(this._popstateReloadStatusAttached)return;this._popstateReloadStatusAttached=!0;const e=this.parentElement;window.addEventListener("popstate",()=>Object(d.a)(e,"ha-refresh-cloud-status"),{once:!0})}},{kind:"method",key:"_ensureEntitySync",value:function(){if(this._popstateSyncAttached)return;this._popstateSyncAttached=!0;const e=this.parentElement;window.addEventListener("popstate",()=>{Object(l.a)(e,{message:"Synchronizing changes to Google."}),Object(r.a)(this.hass)},{once:!0})}},{kind:"get",static:!0,key:"styles",value:function(){return n.c`
      .banner {
        color: var(--primary-text-color);
        background-color: var(
          --ha-card-background,
          var(--paper-card-background-color, white)
        );
        padding: 16px 8px;
        text-align: center;
      }
      h1 {
        color: var(--primary-text-color);
        font-size: 24px;
        letter-spacing: -0.012em;
        margin-bottom: 0;
        padding: 0 8px;
      }
      .content {
        display: flex;
        flex-wrap: wrap;
        padding: 4px;
        --paper-toggle-button-label-spacing: 16px;
      }
      ha-card {
        margin: 4px;
        width: 100%;
        max-width: 300px;
      }
      .card-content {
        padding-bottom: 12px;
      }
      state-info {
        cursor: pointer;
      }
      paper-toggle-button {
        padding: 8px 0;
      }

      @media all and (max-width: 450px) {
        ha-card {
          max-width: 100%;
        }
      }
    `}}]}},n.a)}}]);
//# sourceMappingURL=chunk.4ef5e1cbc8041a69b0d8.js.map