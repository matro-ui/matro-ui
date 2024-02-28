export const isEmptyFunction = (func) => {
  return func.toString().replace(" ", "") == "()=>{}"
}