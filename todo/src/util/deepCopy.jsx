const deepCopy = (object) => {
    if (object === null || typeof object !== "object") {
        return object;
      }
      // 객체인지 배열인지 판단
      const copy = Array.isArray(object) ? [] : {};
     
      for (let key of Object.keys(object)) {
        copy[key] = deepCopy(object[key]);
      }
     
      return copy;
}

export default deepCopy;
