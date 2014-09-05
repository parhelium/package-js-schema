Package.describe({
  summary: "js-schema library package",
  version: "1.0.0",
  git: "https://github.com/parhelium/package-js-schema"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles('js-schema.min.js');
  api.export('schema', ['client', 'server']);
});
