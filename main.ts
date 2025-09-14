input.onButtonPressed(Button.B, function () {
    basic.showString("erik")
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        # # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . # . . .
        # # # # .
        . # # # .
        . # . # .
        . . . . .
        `)
})
