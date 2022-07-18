# parcel-local-html

Template project that contains the workaround for the missing support for bundling for `file:///` protocol in parcel.  
See `script/fix-script-tag.ts` and `package.json` for the workaround.  
See https://github.com/parcel-bundler/parcel/issues/7583 and https://github.com/parcel-bundler/parcel/issues/7959 for feature requests.

# Getting started

## Build

- Ensure that a current (compatible) version of [node](https://nodejs.dev/) is installed normally on your computer.
- On Windows, open a terminal in the directory of this file and execute the following command.  
`npm install && npm run build`
- On Non-Windows, you'll be happy to figure it out by yourself.

## Run

- Navigate to the `dist` directory and open the `index.html` file in a browser.