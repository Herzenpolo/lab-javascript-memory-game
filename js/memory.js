const shuffle = (arr) => {
  arr.sort(() => Math.random()-0.5)
}

class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {
    this.deck = [...this.cards]
    return shuffle(this.cards)
  }
  
  
  checkIfPair(card1, card2) {
      this.pairsClicked += 1
      if(card1 === card2){
        this.pairsGuessed += 1
        return true;
      } else {
        return false;
      }
  }
  
  isFinished() {
    if(this.pairsClicked = 0) {
      return false
    }
  }
}