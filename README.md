# ng-phone-number
AngularJS directive to make text inputs take only phone-number-valid characters (number, +, -).

It blocks all of the other characters before they are written(including non-ascii code characters such as Hanguel).

## Download
Download using `bower`

`bower install ng-phone-number`

## Compatibility
Tested with AngularJS 1.3, 1.4. Probably works with most of AngularJS versions.
Browser tested with IE9+ and most of the modern browsers.

## Install Guide

### Include files in your project
Include minified(or unminified) js file in `ng-phone-number/dist` folder to your web project.

### Add dependency for your application
Add the ng-phone-number module as a dependency to your application module.

```js
var myAppModule = angular.module('MyApp', ['deopard.ngPhoneNumber']);
```

### Using it in AngularJS application
Use is as an element directive.

```html
<input type="text" phone-number ng-model="myPhoneModel">
```

## Parameters
### ng-model (required)
ngModel is required.


license
=======
[MIT License](https://github.com/deopard/ng-phone-number/blob/master/LICENSE)
