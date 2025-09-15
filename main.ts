let a = 0
function hun () {
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
}
input.onButtonPressed(Button.A, function () {
    a += 1
})
input.onButtonPressed(Button.B, function () {
    a = 0
})
function smil () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
}
basic.forever(function () {
    if (a == 1) {
        hun()
    } else {
        smil()
    }
})
