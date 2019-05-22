import './print.css'

/**
 * Simple demo function.
 * @param message - will be shown in the console.
 */
export function print(message: string) {
  let div = document.createElement('div')
  div.innerHTML = message
  document.querySelector('body').append(div)
}
