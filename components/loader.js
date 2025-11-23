export function showLoader(container) {
  container.innerHTML = `<div class="loader">Loading...</div>`;
}

export function hideLoader(container) {
  const loader = container.querySelector('.loader');
  if (loader) loader.remove();
}
