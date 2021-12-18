import "../css/index.css"

export const component = () => {
  const element = document.createElement("div")

  element.innerHTML = ["hello", "webpack"].join(" ")
  element.className = "content"

  return element
}

document.body.appendChild(component())
