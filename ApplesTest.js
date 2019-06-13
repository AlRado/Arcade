enum SpriteKind {
    Apple
}

controller.A.onEvent(ControllerButtonEvent.Pressed, CreateTenApples)

CreateTenApples()

function CreateTenApples() {
    for (let i = 0; i < 10; i++) {
        let mySprite = sprites.create(sprites.food.smallApple, SpriteKind.Apple)
        mySprite.setFlag(SpriteFlag.BounceOnWall, true)
        mySprite.setVelocity(Math.randomRange(-50, 50), Math.randomRange(-50, 50))
        mySprite.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
    }
}

