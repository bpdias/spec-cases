module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js', // No need to cover bootstrap file
    '!src/registerServiceWorker.js',
    '!src/router/index.js',
    '!src/store/index.js',
    '!src/views/Home.vue'
  ],
  coverageReporters: [
    'html',
    'text'
  ]
}
