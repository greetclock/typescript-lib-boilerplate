/**
 * Simple demo function.
 * @param message - will be shown in the console.
 */
export function print(message: string) {
  let div = document.createElement('div')
  div.innerHTML = 'Hello, World!'
  document.querySelector('body').append(div)
}
