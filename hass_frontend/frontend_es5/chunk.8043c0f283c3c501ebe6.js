(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{703:function(e,n,t){"use strict";t.r(n);t(90);var r=t(3),o=t(25),i=(t(173),t(223),t(147),t(92),t(106));function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n      <style include="iron-flex ha-style">\n        .content {\n          padding-bottom: 24px;\n          direction: ltr;\n        }\n\n        ha-card {\n          max-width: 600px;\n          margin: 0 auto;\n          margin-top: 24px;\n        }\n        h1 {\n          @apply --paper-font-headline;\n          margin: 0;\n        }\n        .error {\n          color: var(--google-red-500);\n        }\n        .card-actions {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n        }\n        .card-actions a {\n          color: var(--primary-text-color);\n        }\n        [hidden] {\n          display: none;\n        }\n      </style>\n      <hass-subpage header="Forgot Password">\n        <div class="content">\n          <ha-card header="Forgot your password">\n            <div class="card-content">\n              <p>\n                Enter your email address and we will send you a link to reset\n                your password.\n              </p>\n              <div class="error" hidden$="[[!_error]]">[[_error]]</div>\n              <paper-input\n                autofocus=""\n                id="email"\n                label="E-mail"\n                value="{{email}}"\n                type="email"\n                on-keydown="_keyDown"\n                error-message="Invalid email"\n              ></paper-input>\n            </div>\n            <div class="card-actions">\n              <ha-progress-button\n                on-click="_handleEmailPasswordReset"\n                progress="[[_requestInProgress]]"\n                >Send reset email</ha-progress-button\n              >\n            </div>\n          </ha-card>\n        </div>\n      </hass-subpage>\n    ']);return s=function(){return e},e}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,n){return!n||"object"!==a(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),u(this,c(n).apply(this,arguments))}var t,a,d;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(n,Object(i["a"])(o["a"])),t=n,d=[{key:"template",get:function(){return Object(r.a)(s())}},{key:"properties",get:function(){return{hass:Object,email:{type:String,notify:!0,observer:"_emailChanged"},_requestInProgress:{type:Boolean,value:!1},_error:{type:String,value:""}}}}],(a=[{key:"_emailChanged",value:function(){this._error="",this.$.email.invalid=!1}},{key:"_keyDown",value:function(e){13===e.keyCode&&(this._handleEmailPasswordReset(),e.preventDefault())}},{key:"_handleEmailPasswordReset",value:function(){var e=this;this.email&&this.email.includes("@")||(this.$.email.invalid=!0),this.$.email.invalid||(this._requestInProgress=!0,this.hass.callApi("post","cloud/forgot_password",{email:this.email}).then(function(){e._requestInProgress=!1,e.fire("cloud-done",{flashMessage:"Check your email for instructions on how to reset your password."})},function(n){return e.setProperties({_requestInProgress:!1,_error:n&&n.body&&n.body.message?n.body.message:"Unknown error"})}))}}])&&l(t.prototype,a),d&&l(t,d),n}();customElements.define("cloud-forgot-password",d)}}]);
//# sourceMappingURL=chunk.8043c0f283c3c501ebe6.js.map