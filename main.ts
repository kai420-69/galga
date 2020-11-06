controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . 2 2 . . . 
        . 1 1 1 . . . . . . . 2 2 . . . 
        . 1 . 1 . . . . . . . 2 2 . . 2 
        . 1 . 1 . . . . . . . 2 2 . 2 2 
        1 . . 1 1 . . . . . . 2 2 . 2 . 
        1 . . . 1 . . . . . . 2 2 . 2 . 
        1 . . . 8 2 . . . . . 2 2 2 2 . 
        1 . . 8 8 2 2 . 2 2 2 2 2 . . . 
        1 . 8 8 8 2 2 2 2 2 1 2 2 . . . 
        1 . 8 8 8 2 2 2 2 1 2 2 2 2 2 . 
        1 . . 8 8 2 2 . 2 2 2 2 2 . 2 . 
        1 . . . 8 2 . . . . . 2 2 . 2 . 
        1 . . . 1 . . . . . . 2 2 . 2 2 
        . 1 . 1 1 . . . . . . 2 2 . . 2 
        . 1 . 1 . . . . . . . 2 2 . . . 
        . 1 1 1 . . . . . . . 2 2 . . . 
        `, spaceplane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
})
let villan: Sprite = null
let dart: Sprite = null
let spaceplane: Sprite = null
spaceplane = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 2 . . . . . . . . . . . . . 
    . . 2 2 . . . . . . . . . . . . 
    . . . 2 2 . f f f f . . . . . . 
    . . f f f f f 9 9 f f . . . . . 
    f f f 1 1 1 1 9 9 9 f f . . . . 
    1 1 1 1 2 1 1 9 9 9 9 f f . . . 
    1 1 1 f 1 2 1 2 9 9 9 9 f . . . 
    1 1 1 1 1 1 2 1 1 1 1 1 f . . . 
    f f f 1 1 1 1 1 1 f f f f . . . 
    . . f f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
spaceplane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(5)
controller.moveSprite(spaceplane, 200, 200)
game.onUpdateInterval(500, function () {
    villan = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 9 9 9 9 9 . . 
        . . . . . . . 9 9 9 2 2 5 5 9 9 
        . . . . . 9 9 9 2 2 8 2 2 5 5 9 
        . . . . 2 2 2 2 2 8 8 2 2 5 5 5 
        . . . . . 9 9 9 2 2 2 2 2 5 5 5 
        . . . . . . . 9 9 9 5 5 9 9 5 5 
        . . . . . . . . . . 9 5 5 5 5 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    villan.setVelocity(-100, 0)
    villan.setPosition(180, randint(0, 120))
})
