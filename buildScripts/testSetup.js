// tell babel to transpile it before testing
require("@babel/register")

// ignore css files if imported
require.extensions['.css'] = function(){}
