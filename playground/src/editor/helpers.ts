export function errorHasLocation(err: any) {
  return (
    isValidationError(err) ||
    isJsonError(err) ||
    isYamlError(err) ||
    isDereferenceError(err) ||
    isUnsupportedVersionError(err)
  );
}

export function isValidationError(err: any) {
  return (
    err &&
    err.type === 'https://github.com/asyncapi/parser-js/validation-errors'
  );
}

export function isJsonError(err: any) {
  return (
    err && err.type === 'https://github.com/asyncapi/parser-js/invalid-json'
  );
}

export function isYamlError(err: any) {
  return (
    err && err.type === 'https://github.com/asyncapi/parser-js/invalid-yaml'
  );
}

export function isUnsupportedVersionError(err: any) {
  return (
    err &&
    err.type === 'https://github.com/asyncapi/parser-js/unsupported-version'
  );
}

export function isDereferenceError(err: any) {
  return (
    err &&
    err.type === 'https://github.com/asyncapi/parser-js/dereference-error'
  );
}
