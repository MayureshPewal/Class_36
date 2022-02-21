class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }
setElementPosition(){
  this.titleImg.position(150,160)
  this.input.position(width/2-110,height/2-80)
  this.playButton.position(width/2-90,height/2-20)
  this.griting.position(width/2-300,height/2-100)
}
setElementStyle(){
  this.titleImg.class("gameTitle")
  this.input.class("customInput")
  this.playButton.class("customButton")
  this.greeting.class("greeting")
}

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
display(){this.setElementPosition()
this.setElementStyle()

}
}
