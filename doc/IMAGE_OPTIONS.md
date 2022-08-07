# PDF Options

When requesting a PDF, you can supply the following options (which are analagous to the options in the print dialog of chromium). 

## Supported Options

* `scale` - A number between 0.1 and 2, this specifies the scaling to use. This defaults to 1.
* `printBackground` - Boolean, defaults to true
* `margin` - An object consisting of `top`, `bottom`, `left` and `right` integers; the default is to have 0 margin for all.
* `preferCSSPageSize` - Boolean, defaults to true. This will cause any `@page` media rules in your CSS to override the `format`, `width` and `height` options below.
* `landscape` - Boolean, defaults to `false`. Set this to `true` to get a landscape layout.
* `format` - Paper size format, defaults to `"A4"`.

## Unsupported options

The following is a list of options planned for later inclusion in the API, but are not yet supported:

* `width` - The width of the papaer, overriding the `format` option above
* `height` - The height of the paper, overriding the `format` option above

## Underlying options structure

[This page in the puppeteer documentation](https://pptr.dev/api/puppeteer.pdfoptions) details the full range of options available in the underlying software, but note that **only the above supported options are useable** in order to ensure proper validation & security when using the API.
