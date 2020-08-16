# node-prop-types

Use `prop-types` in production. Just that simple.

You need to require this before otherwise requiring `prop-types` in
your code. After that you can require either one and you'll get the
main PropTypes object back. I recommend just doing
`require('node-prop-types')` somewhere early in your app setup (same
place you might load polyfills, etc).
