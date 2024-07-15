// Boleanos

const user = {
  name: 'Diego Fernandes',
  height: 190,
  hasTicket: true,
}

const necessaryHeight = 130

const currentHour = new Date().getHours()

const isParkClose = currentHour < 9 || currentHour > 18

if (isParkClose) {
  throw new Error('O parque está fechado!')
}

const hasTicket = user.hasTicket

if (!hasTicket) {
  throw new Error('O Diego não possui um bilhete para entrar no parque!')
}

const hasHeightNoEnterToy = user.height <= necessaryHeight

if (hasHeightNoEnterToy) {
  throw new Error('O Diego não pode entrar no brinquedo!')
}

console.log('O Diego se divertiu muito! :)')