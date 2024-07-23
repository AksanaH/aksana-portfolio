export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function checkMessage(input) {
  if (typeof input === 'string' && input.length > 0) {
    return true;
  }
  return false;
}

export function checkName(input) {
  const namePattern = /^[A-Za-z]+$/;
  if (typeof input === 'string' && input.match(namePattern)) {
    return true;
  }
  return false;
}