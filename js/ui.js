export function el(tag, attrs = {}, children = "") {
  const element = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => element.setAttribute(k, v));
  element.innerHTML = children;
  return element;
}
