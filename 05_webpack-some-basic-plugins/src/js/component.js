import "../css/index.css"
import Image from '../img/pexels-photo-10358193.jpeg';

export const component = () => {
  const element = document.createElement("div")

  element.innerHTML = ["hello", "webpack"].join(" ")
  element.className = "content"

  // 创建 img
  const imgEl = document.createElement('img')
  // imgEl.src = require("../img/pexels-photo-10358193.jpeg").default
  imgEl.src = Image
  element.appendChild(imgEl)

  // 设置背景图片
  const bgDivEl = document.createElement('div')
  bgDivEl.style.width = 200 + 'px'
  bgDivEl.style.height = 200 + 'px'
  bgDivEl.className = 'bg-image'
  bgDivEl.style.backgroundColor = "red"
  element.appendChild(bgDivEl)

  return element
}

document.body.appendChild(component())
