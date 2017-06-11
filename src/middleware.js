
module.exports = function (promises) {
  return function () {
    return function (next) {
      return function (action) {
        var result = next(action);
        if (result && typeof result.then === 'function') {
          promises.push(result);
        }
        return result;
      };
    };
  };
};
