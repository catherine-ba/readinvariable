function LinearSys (a: number, b: number, c: number, d: number) {
    basic.showString("LinearSys")
    if (a == c) {
        basic.showString("Parallel")
    } else {
        x = (d - b) / (a - c)
        y = a * x + b
        basic.showString("(" + x + "," + y + ")")
    }
}
input.onButtonPressed(Button.A, function () {
    temp += 1
    basic.showNumber(temp)
    if (state == 0) {
        temp = temp % 3
    }
})
function Factor (a: number, b: number, c: number) {
    basic.showString("Factor")
    if (b ** 2 - 4 * a * c < 0) {
        basic.showString("roots = imaginary")
    } else if (b ** 2 - 4 * a * c == 0) {
        basic.showString("x1 = x2")
    } else {
        x1 = (-1 * b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
        x2 = (-1 * b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
        basic.showString("x1 =" + x1 + "x2 =" + x2)
    }
}
function NextNumber () {
    temp = 0
    state += 1
    basic.showIcon(IconNames.Yes)
    basic.showNumber(temp)
}
input.onButtonPressed(Button.AB, function () {
    if (state == 0) {
        num1 = temp
        NextNumber()
    } else if (state == 1) {
        num2 = temp
        NextNumber()
    } else if (state == 2) {
        num3 = temp
        NextNumber()
    } else if (state == 3) {
        num4 = temp
        NextNumber()
    } else {
        if (temp == 1) {
            EqOfLine(num1, num2, num3, num4)
        } else if (temp == 2) {
            Factor(num1, num2, num3)
        } else if (temp == 3) {
            LinearSys(num1, num2, num3, num4)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    temp += -1
    basic.showNumber(temp)
    if (state == 0) {
        temp = temp % 3
    }
})
function EqOfLine (x1: number, y1: number, x2: number, y2: number) {
    basic.showString("EqofLine")
    if (x1 == x2) {
        basic.showString("x =" + x1)
    } else if (y1 == y2) {
        basic.showString("y =" + y1)
    } else {
        m = (y2 - y1) / (x2 - x1)
        b = y1 - m * x1
        basic.showString("y =" + m + "x +" + b)
    }
}
let b = 0
let m = 0
let x2 = 0
let x1 = 0
let y = 0
let x = 0
let state = 0
let temp = 0
let num4 = 0
let num3 = 0
let num2 = 0
let num1 = 0
basic.showString("Math Calculator")
basic.showString("Insert your 4 numbers")
num1 = 0
num2 = 0
num3 = 0
num4 = 0
temp = 0
state = 0
basic.showNumber(temp)
