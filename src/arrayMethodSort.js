'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const cmp =
      typeof compareFunction === 'function'
        ? compareFunction
        : (a, b) => (String(a) > String(b) ? 1 : -1);
    // We don’t write additional 0 yet, because no difference in 0 and -1

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (cmp(this[i], this[j]) > 0) {
          // 1 variant
          // const temp = this[i];

          // this[i] = this[j];
          // this[j] = temp;

          // 2 variant
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
