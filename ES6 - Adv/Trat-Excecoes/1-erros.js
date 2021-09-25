class CustomError extends Error {
  constructor({ message, data }) {
    super(message)
    this.data = data
  }
}
try {
  const name = 'Rafael Santos'

  const myError = new CustomError({
    message: 'Custom message on custom error',
    data: {
      type: 'Server Error'
    }
  })
  throw myError
} catch (err) {
  if (err.data.type === 'Server Error') {
  } else {
  }
} finally {
  console.log('Keep going...')
}
