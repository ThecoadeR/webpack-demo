class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return `hello-${this.greeting}`
  }
}

let greeter = new Greeter('world')

const btn = document.createElement('button')
btn.textContent = 'add'
btn.addEventListener('click', () => {
  alert(greeter.greet())
})

document.body.append(btn)