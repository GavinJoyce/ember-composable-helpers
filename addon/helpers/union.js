import { helper } from '@ember/component/helper';

export function union([...arrays]) {
  return [...new Set([].concat(...arrays))];
}

export default helper(union);
