const div = document.querySelector('#test')
const div2 = document.querySelectorAll('#hello')[0]



dom.style(div, { color: 'red' })

console.log(div.innerText)
console.log(div.innerHTML)

dom.addClass(div, 'red')
dom.addClass(div, 'blue')
dom.removeClass(div, 'red')
console.log(dom.hasClass(div, 'red'))

let callback = () => console.log('点击了')

dom.on(div, 'click', callback)

dom.off(div, 'click', callback)

console.log(dom.siblings(div2))