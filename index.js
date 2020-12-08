'use strict';

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.timer = document.querySelector(selector);
        this.targetDate = targetDate;
        this.timeLeft = 0;
        this.days = this.timer.querySelector('[data-value="days"]');
        this.hours = this.timer.querySelector('[data-value="hours"]');
        this.mins = this.timer.querySelector('[data-value="mins"]');
        this.secs = this.timer.querySelector('[data-value="secs"]');
    }

    pad (value) {
        return String(value).padStart(2, "0");
    }
    
    countAndShowLeft () {
        this.timeLeft = this.targetDate - Date.now();
        this.days.innerHTML = this.pad(Math.floor(this.timeLeft / (1000 * 60 * 60 * 24)));
        this.hours.innerHTML = this.pad(Math.floor((this.timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        this.mins.innerHTML = this.pad(Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
        this.secs.innerHTML = this.pad(Math.floor((this.timeLeft % (1000 * 60)) / 1000));
    }

    startСountdown () {
        setInterval(this.countAndShowLeft.bind(this), 1000);
    }
}

const newYear = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jan 1, 2021')
});
newYear.startСountdown();