const cool = () => {
  console.log('Running inside the cool function') // (A)
  setTimeout(
    () => {
      console.log('Timing out inside the cool function') // (B)
    },
    3000
  )
}

setTimeout(
  () => {
    console.log('I am not in any function') // (C)
  },
  3000
)

cool()
console.log('End of File') // (D)
