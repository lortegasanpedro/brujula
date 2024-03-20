let degrees = 0
input.calibrateCompass()
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees >= 330 && degrees <= 359 || degrees >= 0 && degrees <= 30) {
        basic.showString("N")
    } else if (degrees >= 60 && degrees <= 120) {
        basic.showString("E")
    } else if (degrees >= 150 && degrees <= 210) {
        basic.showString("S")
    } else if (degrees >= 240 && degrees <= 300) {
        basic.showString("O")
    }
})
