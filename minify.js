//build process for frontend dependencies

var buildify = require('buildify');
buildify()
  .concat([
    'node_modules/vue/dist/vue.min.js',
    'node_modules/vue-resource/dist/vue-resource.min.js',
    'node_modules/three/build/three.min.js',
    'app.js'
  ])
  .uglify()
  .save('minified.js');
