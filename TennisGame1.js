var TennisGame1 = function (player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function (playerName) {
    if (playerName === "player1")
        this.m_score1 += 1;
    else
        this.m_score2 += 1;
};

TennisGame1.prototype.getScore = function () {
    var score = "";
    var tempScore = 0;

    function calculatorPoint() {
        switch (tempScore) {
            case 0:
                score += "Love";
                break;
            case 1:
                score += "Fifteen";
                break;
            case 2:
                score += "Thirty";
                break;
            case 3:
                score += "Forty";
                break;
        }
    }

    function checkDeucePlayer() {
        switch (this.m_score1) {
            case 0:
                score = "Love-All";
                break;
            case 1:
                score = "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            default:
                score = "Deuce";
                break;
        }
    }

    let equalPoint = this.m_score1 === this.m_score2;
    const limitPoint = 4;
    let checkAdvantagePlayerOne = this.m_score1 >= limitPoint;
    let checkAdvantagePlayerTwo = this.m_score2 >= limitPoint;


    if (equalPoint) {
        checkDeucePlayer.call(this);
    } else if (checkAdvantagePlayerOne || checkAdvantagePlayerTwo) {
        var minusResult = this.m_score1 - this.m_score2;
        switch (minusResult) {
            case 1:
                score = "Advantage player1";
                break;
            case -1 :
                score = "Advantage player2";
                break;
            case 2 :
                score = "Win for player1";
                break;
            case -2 :
                score = "Win for player2";
                break;
            default :
                for (var i = 1; i < 3; i++) {
                    if (i === 1) tempScore = this.m_score1;
                    else {
                        score += "-";
                        tempScore = this.m_score2;
                    }
                    calculatorPoint();
                }

                return score;
        }
    }
};

//         if (minusResult === 1) {
//     score = "Advantage player1";
// } else if (minusResult === -1) {
//     score = "Advantage player2";
// } else if (minusResult >= 2) {
//     score = "Win for player1";
// } else {
//     score = "Win for player2";
// }
// } else {
//     for (var i = 1; i < 3; i++) {
//         if (i === 1) tempScore = this.m_score1;
//         else {
//             score += "-";
//             tempScore = this.m_score2;
//         }
//         calculatorPoint();
//     }
// }
// return score;
// };

    if (typeof window === "undefined") {
        module.exports = TennisGame1;
    }