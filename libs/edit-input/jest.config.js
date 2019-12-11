module.exports = {
  name: 'edit-input',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/edit-input',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
