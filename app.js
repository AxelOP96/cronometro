const getRemainTime = deadline => {
    let now= new Date(),
    remainTime = (new Date(deadline) - now + 1000) /1000;
    remainSeconds = ( '0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ( '0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours = ( '0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};
// console.log(getRemainTime('Dec 31 2021 23:59:59 GMT-0300'));

const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);

    const tiemrUpdate =setInterval( () => {
        let t = getRemainTime(deadline);
        el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;

        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }
    }, 1000)
};

countdown('Dec 31 2021 23:59:59 GMT-0300', 'clock', 'Feliz 2022');