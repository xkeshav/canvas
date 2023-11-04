const reset = () => {
  const markup = document.body.innerHTML
  document.body.innerHTML = ''
  requestAnimationFrame(() => {
    document.body.innerHTML = markup
  })
}
document.body.addEventListener('click', reset)