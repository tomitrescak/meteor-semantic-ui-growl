Package.describe({
  name: 'tomi:semantic-ui-growl',
  summary: 'Modified jQuery plugin that turns standard Semantic-UI alerts into Growl-like notifications.',
  version: '1.0.0',
  git: 'git://github.com/tomitrescak/meteor-semantic-ui-growl.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('jquery', 'client');
  api.add_files([
    'lib/jquery.semantic-ui-growl.js'
  ], 'client');
});
