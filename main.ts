input.onButtonPressed(Button.B, function () {
    step = 0
})
input.onGesture(Gesture.Shake, function () {
    step += 1
    music.play(music.stringPlayable("C5 - - - - - - - ", 120), music.PlaybackMode.UntilDone)
})
let step = 0
step = 0
basic.forever(function () {
    basic.showNumber(step)
})
