module.exports = {
  name: 'jcertif',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/jcertif',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
