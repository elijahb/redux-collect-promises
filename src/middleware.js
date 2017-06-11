
module.exports = function (done) {
  var requests = [];
  Promise.all(requests).then(done);
  
  return function () {
    return function (next) {
      return function (action) {
        var result = next(action);
        if (result && typeof result.then === 'function') {
          requests.push(result);
        }
        return result;
      };
    };
  };
};
