export default function classNames(object) {
  // Concatenate class names as strings
  const classNames = Object.keys(object)
    .filter(className => object[className])
    .join(' ');

  return classNames;
}