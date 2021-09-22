const user = {
  name: 'Rafael',
  lastName: 'Santos de Jesus'
}

function getUserWithFullName(user) {
  return {
    ...user,
    fullName: '${user.name} ${user.lastName}'
  }
}

const userWithFullName = getUserWithFullName(user)

console.log(userWithFullName, user)
