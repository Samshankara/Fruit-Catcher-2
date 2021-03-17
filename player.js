class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.scr = 0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score: this.scr
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    // getScore1() {
    //     var score1 = database.ref('score1');
    //     score1.on("value", (data) => {
    //         score1 = this.scr1;
    //     })
    // }

    // updateScore1(x) {
    //     database.ref('/').update({
    //         score1: x
    //     });
    // }

    // getScore2() {
    //     var score2 = database.ref('score2');
    //     score2.on("value", (data) => {
    //         score2 = this.scr2;
    //     })
    // }

    // updateScore2(x) {
    //     database.ref('/').update({
    //         score2: x
    //     });
    // }

//     updateScore1(){
//         var scr1 = 'players/player1';
//         database.ref(scr1).update({
//             score1: this.scr1
//         });
//     }
//     updateScore2(){
//         var scr2 = 'players/player2';
//         database.ref(scr2).update({
//             score2: this.scr2
//         });
//  }
}


