var array = new Array ('Co jest białe i lekkie?', 'Co jest czerwone i głośne?', 'Co jest niebieskie i duże?', 'Co jest żółte i wesołe?', 'Co jest białe i słodkie?');

var buttonLottery = document.getElementById('lottery');

buttonLottery.onclick = function() {
    this.textContent = array[Math.ceil(Math.random()*array.length-1)];
};


var buttonTimer = document.getElementById('timer');
buttonTimer.onclick = function() {
 var timeleft = 60;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById('timer').textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);
};
