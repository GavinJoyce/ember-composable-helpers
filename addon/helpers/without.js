import { helper } from '@ember/component/helper';
import { A as emberArray, isArray as isEmberArray } from '@ember/array';
import includes from '../utils/includes';

function contains(needle, haystack) {
  return includes(emberArray(haystack), needle);
}

export function without(needle, haystack) {
  if (!isEmberArray(haystack)) {
    return false;
  }

  if (isEmberArray(needle) && needle.length) {
    return haystack.reduce((acc, val) => {
      return contains(val, needle) ? acc : acc.concat(val);
    }, []);
  }

  return emberArray(haystack).without(needle);
}

export default helper(function([needle, haystack]) {
  return without(needle, haystack);
});
