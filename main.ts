namespace SpriteKind {
    export const Protect = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Ourbullet = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        `, Hero, 0, -125)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Protect, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    CannonHP += -1
    Cannons1.sayText(CannonHP)
})
function spawnCannons () {
    Cannons = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 . 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 . . . 7 7 7 7 7 . 
        . 7 7 7 7 7 7 . . . 7 7 7 7 7 . 
        . 7 7 7 7 7 7 . . . 7 7 7 7 7 . 
        `, SpriteKind.Protect)
    Cannons1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 . 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 . . . 7 7 7 7 7 . 
        . 7 7 7 7 7 7 . . . 7 7 7 7 7 . 
        . 7 7 7 7 7 7 . . . 7 7 7 7 7 . 
        `, SpriteKind.Protect)
    Cannons2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 . 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 . . . 7 7 7 7 7 . 
        . 7 7 7 7 7 7 . . . 7 7 7 7 7 . 
        . 7 7 7 7 7 7 . . . 7 7 7 7 7 . 
        `, SpriteKind.Protect)
    Cannons3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 . 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 . . . 7 7 7 7 7 . 
        . 7 7 7 7 7 7 . . . 7 7 7 7 7 . 
        . 7 7 7 7 7 7 . . . 7 7 7 7 7 . 
        `, SpriteKind.Protect)
    Cannons.setPosition(32, 110)
    Cannons1.setPosition(64, 110)
    Cannons2.setPosition(96, 110)
    Cannons3.setPosition(128, 110)
    CannonHP = 1500
}
info.onLifeZero(function () {
    game.gameOver(false)
})
function _0 () {
    Enemy1 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    Enemy1.setVelocity(30, 0)
    Enemy1.setBounceOnWall(true)
    Enemy1.setPosition(randint(0, 160), 70)
    for (let index = 0; index < 10; index++) {
        enemy_shot = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            `, Enemy1, 0, 125)
        enemy_shot.y += 7
    }
}
info.onScore(20, function () {
    game.splash("Level Up!")
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    info.setScore(0)
})
function spawnHero () {
    Hero = sprites.create(img`
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c b . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . c 7 . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . 8 7 . . . . . . . 
        . . . . . . 8 8 5 6 . . . . . . 
        . . . . . . 8 7 5 6 . . . . . . 
        . . . . . c c c 6 6 6 . . . . . 
        . . . . 8 8 7 7 7 5 6 6 . . . . 
        . . 8 f f f c c 6 6 f f 6 6 . . 
        . 8 8 8 8 6 6 7 7 7 7 5 7 6 6 . 
        8 8 8 8 8 8 6 6 7 7 7 5 7 7 6 6 
        8 8 8 8 8 8 6 6 7 7 7 7 5 7 6 6 
        `, SpriteKind.Player)
    controller.moveSprite(Hero, 80, 0)
    Hero.setPosition(80, 94)
    Hero.setBounceOnWall(true)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
let enemy_shot: Sprite = null
let Enemy1: Sprite = null
let Cannons3: Sprite = null
let Cannons2: Sprite = null
let Cannons: Sprite = null
let Cannons1: Sprite = null
let CannonHP = 0
let Hero: Sprite = null
let Ourbullet: Sprite = null
spawnHero()
spawnCannons()
info.setScore(0)
info.setLife(3)
game.onUpdate(function () {
    if (CannonHP <= 0) {
        game.gameOver(false)
    }
})
game.onUpdateInterval(1000, function () {
    _0()
})
