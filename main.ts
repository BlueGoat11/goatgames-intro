namespace SpriteKind {
    export const Intro = SpriteKind.create()
}
function GG_Intro () {
    scene.setBackgroundImage(assets.image`BG`)
    G1 = sprites.create(assets.image`g1`, SpriteKind.Intro)
    G2 = sprites.create(assets.image`g1`, SpriteKind.Intro)
    G1.setScale(2, ScaleAnchor.Middle)
    G2.setScale(2, ScaleAnchor.Middle)
    G1.setPosition(60, 50)
    G2.setPosition(93, 50)
    animation.runMovementAnimation(
    G1,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
    animation.runMovementAnimation(
    G2,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    Goat = sprites.create(assets.image`Goat`, SpriteKind.Intro)
    Goat.setPosition(75, 80)
    animation.runMovementAnimation(
    Goat,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
    pause(5000)
    music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
    animation.runMovementAnimation(
    Goat,
    animation.animationPresets(animation.waveRight),
    2000,
    false
    )
    pause(2000)
    sprites.destroy(G1)
    sprites.destroy(G2)
    sprites.destroy(Goat)
}
let Goat: Sprite = null
let G2: Sprite = null
let G1: Sprite = null
GG_Intro()
