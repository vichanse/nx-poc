module.exports = {
  name: 'webshop',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/webshop',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
