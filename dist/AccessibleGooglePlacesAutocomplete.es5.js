module.exports=function(t){var e={};function s(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=t,s.c=e,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(o,r,function(e){return t[e]}.bind(null,r));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=4)}([function(t,e){t.exports=require("react")},function(t,e){t.exports=require("react-load-script")},function(t,e){t.exports=require("accessible-autocomplete/react")},function(t,e){t.exports=require("get-value")},function(t,e,s){"use strict";s.r(e),s.d(e,"AccessibleGooglePlacesAutocomplete",function(){return d});var o=s(0),r=s(1),n=s.n(r),u=s(2),i=s.n(u),a=s(3),c=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])};return function(e,s){function o(){this.constructor=e}t(e,s),e.prototype=null===s?Object.create(s):(o.prototype=s.prototype,new o)}}();function p(){}function l(t,e){var s=a({addressAutoComplete:{noResults:"Address not found",statusNoResults:"No matching addresses",statusResults:"%{smart_count} matching address is available |||| %{smart_count} matching addresses are available",statusSelectedOption:"You’ve selected %{option}"}},t);if(!e)return s;if(!s)return t;void 0!==e.smart_count&&(s=s.split("||||")[1===e.smart_count?0:1].trim());return s.replace(/%\{(.*?)\}/g,function(t,s){return void 0===e[s]?t:"string"==typeof e[s]?e[s].replace(/\$/g,"$$"):e[s]})}var d=function(t){function e(e){var s=t.call(this,e)||this;return s.state={apiLoaded:!1},s.service=null,s.currentStatusMessage="",s.onApiLoad=s.onApiLoad.bind(s),s.getSuggestions=s.getSuggestions.bind(s),s.getNoResultsMessage=s.getNoResultsMessage.bind(s),s.getStatusResultsMessage=s.getStatusResultsMessage.bind(s),s.getStatusSelectedOptionMessage=s.getStatusSelectedOptionMessage.bind(s),s.getStatusNoResultsMessage=s.getStatusNoResultsMessage.bind(s),s}return c(e,t),e.prototype.onApiLoad=function(){this.setState(function(){return{apiLoaded:!0}}),this.service=new google.maps.places.AutocompleteService},e.prototype.getNoResultsMessage=function(){var t=this.props.t;return(void 0===t?l:t)("addressAutoComplete.noResults")},e.prototype.getStatusSelectedOptionMessage=function(t){var e=this.props.t;return(void 0===e?l:e)("addressAutoComplete.statusSelectedOption",{option:t})},e.prototype.getStatusNoResultsMessage=function(){var t=this.props.t,e=(void 0===t?l:t)("addressAutoComplete.statusNoResults");return this.currentStatusMessage===e?"":(this.currentStatusMessage=e,e)},e.prototype.getStatusResultsMessage=function(t,e){var s=this.props.t,o=void 0===s?l:s;if(e)return"";var r=o("addressAutoComplete.statusResults",{smart_count:t});return this.currentStatusMessage===r?"":(this.currentStatusMessage=r,r)},e.prototype.getSuggestions=function(t,e){var s={componentRestrictions:{country:this.props.countryCode},input:t,types:["geocode"]};this.service.getPlacePredictions(s,function(t,s){if(s===google.maps.places.PlacesServiceStatus.OK){var o=t.map(function(t){return t.description});e(o)}else e([])})},e.prototype.render=function(){var t=this.props,e=t.googleMapsApiKey,s=t.id,r=t.minLength,u=void 0===r?4:r,a=this.state.apiLoaded,c="https://maps.googleapis.com/maps/api/js?key="+encodeURIComponent(e)+"&libraries=places";return a?o.createElement(i.a,{id:s,source:this.getSuggestions,minLength:u,required:!0,displayMenu:"overlay",tNoResults:this.getNoResultsMessage,tStatusSelectedOption:this.getStatusSelectedOptionMessage,tStatusNoResults:this.getStatusNoResultsMessage,tStatusResults:this.getStatusResultsMessage,onConfirm:p}):o.createElement(n.a,{url:c,onLoad:this.onApiLoad})},e}(o.Component)}]);
//# sourceMappingURL=AccessibleGooglePlacesAutocomplete.es5.js.map