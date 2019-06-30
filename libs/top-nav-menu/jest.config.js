module.exports = {
  name: 'top-nav-menu',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/top-nav-menu',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
