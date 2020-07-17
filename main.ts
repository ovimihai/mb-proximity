let item = 0
basic.showIcon(IconNames.SmallDiamond)
basic.forever(function () {
    item = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (item < 10) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
