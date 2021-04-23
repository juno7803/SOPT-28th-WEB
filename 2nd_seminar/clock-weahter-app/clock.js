// 해당 클래스이름을 가진 요소를 가져옵니다
const digitalClock = document.querySelector(".digital_clock");
const digitalType = document.querySelector(".digital_type");
const analogHour = document.querySelector(".analog_hour");
const analogMinute = document.querySelector(".analog_minute");
const analogSecond = document.querySelector(".analog_second");
const header = document.querySelector(".header");

// 00 : 00의 형식을 맞추기 위해 한자리 수는 앞에 0을 채워주는 함수입니다
const fillZero = (num) => {
  num = num + ""; // 문자열로 변환
  // 한 자리 수면 앞에 0 붙이기
  if (num.length < 2) {
    return "0" + num;
  } else {
    return num;
  }
};

const getTime = () => {
  const time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();

  return { time, hours, minutes, seconds };
};

const drawTime = () => {
  const { time, hours, minutes, seconds } = getTime();
  header.innerHTML = `<span>${time.getFullYear()}년, ${time.getMonth()}월 ${time.getDate()}일</span>`;

  if (hours >= 0 && hours < 12) {
    digitalType.innerHTML = `AM`;
  } else {
    digitalType.innerHTML = `PM`;
  }
  digitalClock.innerHTML = `${fillZero(hours)}시 ${fillZero(
    minutes
  )}분 ${fillZero(seconds)}초`;

  const hourDegree = (hours + minutes / 60) * (360 / 12) + 90,
    minuteDegree = (minutes + seconds / 60) * (360 / 60) + 90,
    secondDegree = seconds * (360 / 60) + 90;

  analogHour.style.transform = `rotate(${hourDegree}deg)`;
  analogMinute.style.transform = `rotate(${minuteDegree}deg)`;
  analogSecond.style.transform = `rotate(${secondDegree}deg)`;
};

setInterval(drawTime, 1000);
