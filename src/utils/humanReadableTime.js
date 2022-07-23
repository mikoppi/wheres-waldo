export default function humanReadableTime (seconds) {
    let hoursFormat = (seconds/60)/60;
    let minutesFormat = (hoursFormat-Math.floor(hoursFormat))*60
    let secondsFormat = Math.floor((minutesFormat-Math.floor(minutesFormat))*60)
    let array = [hoursFormat, minutesFormat, secondsFormat];
    let zerosAdded = array.map((num) => {
      if (num < 10) {
        return '0'+String(Math.floor(num))
      }
      return String(Math.floor(num))
    })
    return zerosAdded[0]+':'+zerosAdded[1]+':'+zerosAdded[2]
  }