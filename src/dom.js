const createDOM = {
	// 创建一个元素
	create(string) {
		const container = document.createElement('template')
		container.innerHTML = string.trim()
		console.log(container)
		return container.content.firstChild
	},
	// 添加一个哥哥
	before(node, node2) {
		node.parentNode.insertBefore(node2, node)
	},
	// 添加一个弟弟
	after(node, node2) {
		node.parentNode.insertBefore(node2, node.nextSibling)
	},
	// 添加一个儿子
	append(parent, child) {
		parent.appendChild(child)
	},
	// 添加一个爸爸
	wrap(node, parent) {
		dom.before(node, parent)
		dom.append(parent, node)
	}
}

const deleteDOM = {
	// 删除自己
	remove(node) {
		node.parentNode.removeChild(node)
		return node
	},
	// 删除所有儿子
	empty(node) {
		const { childNodes } = node
		const array = []
		while (childNodes.length) {
			this.remove(childNodes[1])
			array.push(childNodes[1])
		}
		return array
	},

}
// 修改属性和读取属性
const updateDOM = {
	attr(node, name, value) {
		if (arguments === 3) {
			node.setAttribute(name, value)
		} else if (arguments === 2) {
			return node.getAttribute(name)
		}
	},
	// 修改文本和读取文本
	text(node, string) {
		// innerText 是 ie 的，textContent 是 Chrome / FireFox 的，一般都有
		if (arguments.length === 2) {
			if ('innerText' in node) {
				node.innerText = string
			} else {
				node.textContent = string
			}
		} else if (arguments.length === 1) {
			return node.innerText
		}
	},
	// 修改 HTML 和读取 HTML
	html(node, string) {
		if (arguments.length === 2) {
			node.innerHTML = string
		} else if (arguments.length === 1) {
			return node.innerHTML
		}
	},
	// 修改 HTML 和 读取 style
	style(node, name, value) {
		if (arguments.length === 3) {
			// dom.style(div,'color','red')
			node.style[name] = value
		} else if (arguments.length === 2) {
			if (typeof name === 'string') {
				// dom.style(div,'color')
				return node.style[name]
			} else if (name instanceof Object) {
				// dom.style(div,{color: 'red'})
				for (let key in name) {
					node.style[key] = name[key]
				}
			}
		}
	}
}


const className = {
	addClass(node, className) {
		node.classList.add(className)
	},
	removeClass(node, className) {
		node.classList.remove(className)
	},
	hasClass(node, className) {
		return node.classList.contains(className)
	}
}

const event = {
	// 添加事件
	on(node, eventName, fn) {
		node.addEventListener(eventName, fn)
	},
	// 删除事件
	off(node, eventName, fn) {
		node.removeEventListener(eventName, fn)
	}
}

const readDOM = {
	find(name, scope) {
		return (scope || document).querySelectorAll(name)
	},
	parent(node) {
		return node.parentNode
	},
	children(node) {
		return node.children
	},
	siblings(node) {
		return [...node.parentNode.children].filter(item => item !== node)
	},
	next(node) {
		let x = node.nextSibling
		while (x && x.nodeType === 3) {
			x = x.nextSibling
		}
		return x
	},
	previous(node) {
		let x = node.previousSibling
		while (x && x.nodeType === 3) {
			x = x.previousSibling
		}
		return x
	},
	index(node) {
		const list = dom.children(node.parentNode)
		let i
		for (i = 0; i < list.length; i++) {
			if (list[i] === node) {
				break
			}
		}
		return i
	}
}

window.dom = {
	...createDOM,
	...deleteDOM,
	...updateDOM,
	...readDOM,
	...className,
	...event,

}