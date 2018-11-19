const shooter = {}

/**
 * Set up
 */
shooter.$container = document.querySelector('.shooter')
shooter.$start = shooter.$container.querySelector('.start')
shooter.$targets = shooter.$container.querySelector('.targets')
shooter.$timer = shooter.$container.querySelector('.timer')
shooter.$score = shooter.$container.querySelector('.score .value')
shooter.score = 0
shooter.secondsLeft = 0

shooter.sounds = {}
shooter.sounds.ding = new Audio('ding.mp3')
shooter.sounds.finish = new Audio('finish.mp3')

shooter.$start.addEventListener('click', () =>
{
    shooter.start()
})

/**
 * Methods
 */
shooter.start = () =>
{
    shooter.$container.classList.replace('step-start', 'step-game')

    shooter.secondsLeft = 12

    shooter.tick()
}

shooter.tick = () =>
{
    shooter.secondsLeft--

    if(shooter.secondsLeft === 0)
    {
        console.log('end')
    }
    else
    {
        if(shooter.secondsLeft > 9)
        {
            shooter.$timer.textContent = `00:${shooter.secondsLeft}`
        }
        else
        {
            shooter.$timer.textContent = `00:0${shooter.secondsLeft}`
        }

        window.setTimeout(shooter.tick, 1000)
    }
}

shooter.addTarget = () =>
{
    // Create element
    const $target = document.createElement('div')
    $target.classList.add('target')
    $target.style.top = `${Math.random() * 100}%`
    $target.style.left = `${Math.random() * 100}%`
    shooter.$targets.appendChild($target)

    // Listen to mouse enter
    $target.addEventListener('mouseenter', () =>
    {
        shooter.shootTarget($target)
    })
}

shooter.shootTarget = (_$target) =>
{
    // Remove target
    _$target.remove()

    // Add new target
    shooter.addTarget()

    // Increment score
    shooter.score++
    shooter.$score.textContent = shooter.score
    
    // Play sound
    shooter.sounds.ding.currentTime = 0
    shooter.sounds.ding.play()
}

shooter.addTarget()