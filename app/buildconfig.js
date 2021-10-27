var buildUrl = "./";
export var config = {
  dataUrl: './app/' + buildUrl + "/webbuild.data", // relative to application directory
  loaderUrl: buildUrl + "/webbuild.loader.js", // relative to Unity plugin
  frameworkUrl: './app/' + buildUrl +"/webbuild.framework.js",
  codeUrl: './app/' + buildUrl + "/webbuild.wasm",
//#if MEMORY_FILENAME
 // memoryUrl: buildUrl + "/{{{ MEMORY_FILENAME }}}",
//#endif
//#if SYMBOLS_FILENAME
//  symbolsUrl: buildUrl + "/{{{ SYMBOLS_FILENAME }}}",
//#endif
  streamingAssetsUrl: "StreamingAssets",
  companyName: "{{{ COMPANY_NAME }}}",
  productName: "{{{ PRODUCT_NAME }}}",
  productVersion: "{{{ PRODUCT_VERSION }}}",
};