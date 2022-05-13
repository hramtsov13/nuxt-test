export default {
  increaseCounter(number: number) {
    this.counter += number
  },
  decreaseCounter(number: number) {
    this.counter -= number
  },
  clearCounter() {
    this.counter = 0
  }
}
