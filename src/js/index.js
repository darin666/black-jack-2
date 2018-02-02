'use strict'; // Whole-script strict mode syntax

function Card(value, suit) {
    this.value = value,
    this.suit = suit,
    this.reverse = true;


    this.info = function() {
        return this.value + this.suit
    }

    this.createHTML = function() {
        if(this.reverse){
            return $('<div>').addClass('card').addClass('revers');
        }else{
            return $('<div>').addClass('card').addClass(this.value+ '-' +this.suit);
        }
    }


}

function generateDeck(){
    var deck = [];

    var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

    for(var s = 0; s < suits.length; s++){
        for(var v = 0; v < values.length; v++){
            var card = new Card(suits[s],values[v]);
            deck.push(card);

        }
    }

    return deck;
}

function shuffleDeck(deck) {
    var counter = deck.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random indexx§
        var index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        var temp = deck[counter];
        deck[counter] = deck[index];
        deck[index] = temp;
    }

    return deck;
}

function renderDeck(){
    $('#deck').empty();
    var card = deck[deck.length - 1];
    $('#deck').append(card.createHTML());
}

function renderHand() {
    $('.hand').empty();
    var card = hand[hand.length - 1];
    $('.hand').append(card.createHTML());
}


