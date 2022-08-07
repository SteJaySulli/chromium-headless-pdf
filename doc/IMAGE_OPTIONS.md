# Image Options

When requesting an image, you can supply the following options. 

## Supported Options

* `fullPage` - Boolean, whether to capture the entire page's length, or just the size specified by `width` and `height` below
* `width` - An integer specifying the number of pixels wide the resulting image should be, defaults to 1920
* `height` - An integer specifying the number of pixels high the resulting image should be, defaults to 1080. Note that this has no effect if `fullPage` is set to `true`.
* `omitBackground` - Boolean, whether or not to omit the background. Defaults to `false`.
* `type` - String, must be one of `jpeg`, `png` or `webm`. Defaults to `jpeg`.
* `quality` - Number between 0 and 100, where 0 is the worst and 100 is the best. This effects JPEG compression, so it has not effect on `png` or `webm` images

## Underlying options structure

[This page in the puppeteer documentation](https://pptr.dev/api/puppeteer.screenshotoptions) details the full range of options available in the underlying software, but note that **only the above supported options are useable** in order to ensure proper validation & security when using the API.
