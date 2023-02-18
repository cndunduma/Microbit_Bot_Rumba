input.onButtonPressed(Button.A, function () {
    motobit.enable(MotorPower.On)
    basic.showNumber(LeftBumper)
})
input.onButtonPressed(Button.B, function () {
    motobit.enable(MotorPower.Off)
})
let sonar2 = 0
let RightBumper = 0
let LeftBumper = 0
motobit.invert(Motor.Right, true)
pins.setAudioPin(AnalogPin.P0)
basic.forever(function () {
    LeftBumper = pins.digitalReadPin(DigitalPin.P8)
    RightBumper = pins.digitalReadPin(DigitalPin.P12)
    pins.setEvents(DigitalPin.P8, PinEventType.Touch)
    pins.setEvents(DigitalPin.P12, PinEventType.Touch)
    sonar2 = sonar.ping(
    DigitalPin.P14,
    DigitalPin.P15,
    PingUnit.Centimeters
    )
    basic.showNumber(sonar2)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 35)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 35)
    if (sonar2 < 20) {
        music.playMelody("C5 C5 A A B B F F ", 120)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 45)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 25)
        basic.pause(500)
    }
    if (RightBumper == 0) {
        music.playMelody("C5 G B D F F A C5 ", 120)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 45)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 25)
        basic.pause(500)
    }
    if (LeftBumper == 0) {
        music.playMelody("C F C F C F C F ", 120)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 45)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 25)
        basic.pause(500)
    }
})
