    var seconds = 00
    var mSeconds = 00
    var appendSeconds = document.getElementById('seconds')
    var appendMiliSeconds = document.getElementById('mili-seconds')
    var startButton = document.getElementById('start-button')
    var stopButton = document.getElementById('stop-button')
    var resetButton = document.querySelector('#reset-button')
    var Interval;

function startTimer(){
    mSeconds++

    if(mSeconds <= 9){
        appendMiliSeconds.innerHTML = '0' + mSeconds
    }
    if(mSeconds > 9){
        appendMiliSeconds.innerHTML = mSeconds
    }
    if(mSeconds > 99){
        seconds++
        appendSeconds.innerHTML = '0' + seconds
        mSeconds = 0
        appendMiliSeconds.innerHTML = '0' + 0
    }
    if(seconds > 9){
        appendSeconds.innerHTML = seconds
    }
    
}
    function della(){
        console.log('eu sou della')
    }

    startButton.onclick = function(){
        clearInterval(Interval)
        Interval = setInterval(della, 10)        
    }

    stopButton.onclick = function(){
        clearInterval(Interval)
    }

    resetButton.onclick = function(){
        clearInterval(Interval)
        mSeconds = "00"
        seconds = "00"
        appendMiliSeconds.innerHTML = mSeconds
        appendSeconds.innerHTML = seconds
    }

