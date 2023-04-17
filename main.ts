input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Giraffe)
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.showIcon(IconNames.Snake)
        basic.pause(1000)
    }
})
basic.forever(function () {
	
})
