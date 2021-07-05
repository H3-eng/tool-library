/**
 * 获取当前url中获取参数
 * @returns {{}}
 * @example
 */
 export const getCode = function () {
  let url = '';
  url = window.location.search;
  if (url.indexOf('?') == -1) {
    url = '?' + window.location.hash.split('?')[1]
  }
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }

  return obj;
}

