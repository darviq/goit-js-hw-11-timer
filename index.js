'use strict';

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.timer = document.querySelector(selector);
        this.targetDate = targetDate;
        this.timeLeft = 0;
    }

    pad (value) {
        return String(value).padStart(2, "0");
    }
    
    countLeft () {
        this.timeLeft = this.targetDate - Date.now();

        const days = this.pad(Math.floor(this.timeLeft / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((this.timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((this.timeLeft % (1000 * 60)) / 1000));

        this.timer.querySelector('[data-value="days"]').innerHTML = days;
        this.timer.querySelector('[data-value="hours"]').innerHTML = hours;
        this.timer.querySelector('[data-value="mins"]').innerHTML = mins;
        this.timer.querySelector('[data-value="secs"]').innerHTML = secs;
    }

    startСountdown () {
        setInterval(this.countLeft.bind(this), 1000);
    }
}

const newYear = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jan 1, 2021')
});

newYear.startСountdown();