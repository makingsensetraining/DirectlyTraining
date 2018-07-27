const Logger = require('js-logger');
Logger.useDefaults();
/* istanbul ignore next */
if(process.env.NODE_ENV === 'production') {
  Logger.setLevel(Logger.OFF);
}

// Log unhandled errors
window.onerror = logErrors;

export function logErrors(error) {
  // Logger.error(`An Error Occurred!!: message[${message}], file[${file}], line[${line}], col[${col}]`);
  Logger.error(error);
  return false;
}
