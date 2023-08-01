document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    const ancla = document.getElementById('ancla')
    const rect = ancla.getBoundingClientRect()

    const anclaX = rect.left + rect.width / 2
    const anclaY = rect.top + rect.height / 2

    const angulo = sacaAngulo(mouseX, mouseY, anclaX, anclaY)

    const ojos = document.querySelectorAll('.ojos')
    ojos.forEach(ojo => {
        ojo.style.transform = `rotate(${90 + angulo}deg)`
    })
})

function sacaAngulo(cx, cy, ex, ey) {
    const dy = ey - cy
    const dx = ex - cx
    const rad = Math.atan2(dy, dx)
    const deg = rad * 180 / Math.PI
    return deg
}