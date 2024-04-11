const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  
  name: 'mfe1',

  exposes: {
    // './Component': './src/app/app.component.ts',
    './OrderModule': './/src/app/order/order.module.ts'
  },
 
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
