class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.currentCentiseconds = 0;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 0.01;
      this.currentCentiseconds += 1;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  getCentiseconds() {
    let aux = this.currentCentiseconds;
    if (this.currentCentiseconds === 100) {
      this.currentCentiseconds = 0;
    }
    return Math.floor(aux);
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, "0"); //pad = digito - primeiro parametro é a quantidade de chars que você quer na string e o segundo é com o que ele deve adicionar
  }

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    this.currentCentiseconds = 0;
  }

  split() {
    let minutos = this.computeTwoDigitNumber(this.getMinutes());
    let segundos = this.computeTwoDigitNumber(this.getSeconds());
    let centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds());
    let tentativa6 = minutos + ":" + segundos + ":" + centiSeconds;
    return tentativa6;
  }
}
