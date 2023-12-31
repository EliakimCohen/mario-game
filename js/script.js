const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')


const jump = () => {
  mario.classList.add('jump')
  setTimeout(stopJump, 500)

}

const stopJump = () => {
  mario.classList.remove('jump')
}

const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
  console.log(marioPosition)

  if (pipePosition <= 125 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`

    mario.src = './images/game-over.png'
    mario.style.width = '70px'
    mario.style.marginLeft = '50px'

    clearInterval(loop)
  }

}, 10)

document.addEventListener('keydown', jump)