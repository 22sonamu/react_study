const deepCopy = (obj) => {
    var result = {};
        if (typeof obj === 'object' && obj !== null) {
          for (var prop in obj) {
            result[obj] = deepCopy(obj[prop]);
          }
        } else {
          result = obj;
        }
        return result;
}

export default deepCopy;
