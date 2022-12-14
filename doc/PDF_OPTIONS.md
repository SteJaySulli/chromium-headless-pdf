# PDF Options

When requesting a PDF, you can supply the following options (which are analagous to the options in the print dialog of chromium). 

## Supported Options

* `scale` - A number between 0.1 and 2, this specifies the scaling to use. This defaults to 1.
* `printBackground` - Boolean, defaults to true
* `margin` - An object consisting of `top`, `bottom`, `left` and `right` margins, specified by either a number, or by a string with a number and units (mm, cm or in).
* `preferCSSPageSize` - Boolean, defaults to true. This will cause any `@page` media rules in your CSS to override the `format`, `width` and `height` options below.
* `landscape` - Boolean, defaults to `false`. Set this to `true` to get a landscape layout.
* `format` - Paper size format, defaults to `"A4"`.
* `width` - The width of the paper, overriding the `format` option above, specified either as an integer or by a string with a number and units (mm, cm or in).
* `height` - The height of the paper, overriding the `format` option above, specified either as an integer or by a string with a number and units (mm, cm or in).

Note that if `width` or `height` are specified as 0, neither option will take effect and the `format` options will be used instead.

## Underlying options structure

[This page in the puppeteer documentation](https://pptr.dev/api/puppeteer.pdfoptions) details the full range of options available in the underlying software, but note that **only the above supported options are useable** in order to ensure proper validation & security when using the API.

It's worth noting that in our implementation, `width` and `height` (if set) override the given `format`. This is because we expect the majority of documents to be in the default `A4` format, and that we will specify a standard page size more often than a custom one.