'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let cmp = compareFunction;

    if (cmp !== undefined && typeof cmp !== 'function') {
      throw new TypeError(
        'The comparison function must be either a function or undefined',
      );
    }

    if (typeof compareFunction !== 'function') {
      cmp = (a, b) => {
        const sa = String(a);
        const sb = String(b);

        if (sa === sb) {
          return 0;
        }

        return sa > sb ? 1 : -1;
      };
    }

    for (let first = 0; first < this.length; first++) {
      for (let second = first + 1; second < this.length; second++) {
        if (cmp(this[first], this[second]) > 0) {
          [this[first], this[second]] = [this[second], this[first]];
        }
      }
    }

    return this;
  };
}

// function applyCustomSort() {
//   [].__proto__.sort2 = function (compareFunction) {
//     if (
//       compareFunction !== undefined &&
//       typeof compareFunction !== 'function'
//     ) {
//       throw new TypeError(
//         'The comparison function must be either a function or undefined',
//       );
//     }

//     const cmp =
//       typeof compareFunction === 'function'
//         ? compareFunction
//         : (a, b) => (String(a) > String(b) ? 1 : -1);
//         // We don’t write additional 0 yet, because no difference in 0 and -1

//     for (let i = 0; i < this.length; i++) {
//       for (let j = i + 1; j < this.length; j++) {
//         if (cmp(this[i], this[j]) > 0) {
//           // 1 variant
//           // const temp = this[i];

//           // this[i] = this[j];
//           // this[j] = temp;

//           // 2 variant
//           [this[i], this[j]] = [this[j], this[i]];
//         }
//       }
//     }

//     return this;
//   };
// }
module.exports = applyCustomSort;
