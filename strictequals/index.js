const strictEquals = (a, b) => {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  }

  if (
    (Object.is(-0, a) && Object.is(0, b)) ||
    (Object.is(-0, b) && Object.is(0, a))
  ) {
    return true;
  }

  return Object.is(a, b);
};

module.exports = strictEquals;
