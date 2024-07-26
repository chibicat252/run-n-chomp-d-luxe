namespace SpriteKind {
    export const Decoration = SpriteKind.create()
    export const Powerup = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Powerup, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    mySprite.sy = 2
    powerup = 1
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`shooting shark`,
    100,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim left`,
    200,
    true
    )
})
info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (powerup == 0) {
        sprites.destroy(sprite, effects.disintegrate, 100)
        game.gameOver(false)
        music.play(music.stringPlayable("C A C A C A C E ", 120), music.PlaybackMode.InBackground)
    }
})
let myPowerup: Sprite = null
let myFood: Sprite = null
let myEnemy: Sprite = null
let myDecor: Sprite = null
let mySprite: Sprite = null
let powerup = 0
powerup = 0
scene.setBackgroundColor(9)
scene.setBackgroundImage(assets.image`ocean1`)
mySprite = sprites.create(assets.image`shark`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.startCountdown(120)
for (let index = 0; index < 10; index++) {
    myDecor = sprites.create(assets.image`decoration`, SpriteKind.Decoration)
    myDecor.setPosition(randint(0, 160), 96)
}
animation.runImageAnimation(
mySprite,
assets.animation`swim right`,
200,
true
)
music.play(music.stringPlayable("C A G E C D A C ", 120), music.PlaybackMode.LoopingInBackground)
game.onUpdateInterval(5000, function () {
    myEnemy = sprites.create(img`
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .......................5555..................................................
        ....................c.5c5555.................................................
        ....................c55cccc..................................................
        ....................d55d3b5..................................................
        ....................d555dd5bc................................................
        ...................d5bc5555d.................................................
        ...................cdcd5555.3.c..............................................
        ....................dddddddb..5..............................................
        ...................555dddd55ddc..............................................
        ...................d5dd...d5c................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        `, SpriteKind.Enemy)
    myEnemy.setPosition(scene.screenWidth(), randint(5, 115))
    myEnemy.vx = -75
})
game.onUpdateInterval(2100, function () {
    myFood = sprites.create(assets.image`food`, SpriteKind.Food)
    myFood.setPosition(scene.screenWidth(), randint(5, 115))
    myFood.vx = -75
})
game.onUpdateInterval(2100, function () {
    myFood = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ..............bbb...............
        ...........2444d44..............
        ..........4444444d4e............
        .........2444444444b............
        .........b444444444be...........
        .........b4444444444e...........
        .........2bb4bb4444be...........
        ..........eeebbbb444b...........
        ............eee2b4bbe...........
        .................eeedd..........
        .....................d1d........
        .....................c1b........
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, SpriteKind.Food)
    myFood.setPosition(scene.screenWidth(), randint(5, 115))
    myFood.vx = -75
})
game.onUpdateInterval(10000, function () {
    if (powerup == 1) {
        mySprite.sy = 1
        powerup = 0
    }
})
game.onUpdateInterval(10000, function () {
    myPowerup = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f . f f f . . . . . 
        . . . . f 1 3 f 3 3 f . . . . . 
        . . . . f 1 3 3 3 3 f . . . . . 
        . . . . f f 1 3 3 f f . . . . . 
        . . . . . f f 3 f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Powerup)
    myPowerup.setPosition(scene.screenWidth(), randint(5, 115))
    myPowerup.vx = -75
})
