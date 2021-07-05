/**
 * 判断变量类型
 * @returns 
 */
 export function variableType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
 
/**
  * 是否为布尔值
  * @returns 
  */
export function isBoolean(data) {
  return variableType(data) === 'Boolean';
}
 
/**
  * 是否为数值
  * @returns 
  */
export function isNumber(data) {
  return variableType(data) === 'Number';
}
 
/**
  * 是否为字符串
  * @returns 
  */
export function isString(data) {
  return variableType(data) === 'String';
}
 
/**
  * 是否为Undefined
  * @returns 
  */
export function isUndefined(data) {
  return variableType(data) === 'Undefined';
}
 
/**
  * 是否为Null
  * @returns 
  */
export function isNull(data) {
  return variableType(data) === 'Null';
}
 
/**
  * 是否为数组
  * @returns 
  */
export function isArray(data) {
  return variableType(data) === 'Array';
}
 
/**
  * 是否为Object
  * @returns 
  */
export function isObject(data) {
  return variableType(data) === 'Object';
}
 
/**
  * 是否为Function
  * @returns 
  */
export function isFunction(data) {
  return variableType(data) === 'Function';
}
 
/**
  * 是否为Symbol
  * @returns 
  */
export function isSymbol(data) {
  return variableType(data) === 'Symbol';
}