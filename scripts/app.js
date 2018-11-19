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

shooter.sounds = {}
shooter.sounds.ding = new Audio('ding.mp3')
shooter.sounds.finish = new Audio('finish.mp3')

shooter.$start.addEventListener('click', () =>
{
    shooter.$container.classList.replace('step-start', 'step-game')
})

/**
 * Methods
 */
shooter.start = () =>
{
    console.log('start')
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