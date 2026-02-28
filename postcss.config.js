export default {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        '>0.2%',
        'not dead',
        'not op_mini all',
        'last 2 versions',
        'Firefox ESR',
        'iOS >= 12',
        'Safari >= 12'
      ]
    }
  }
}
