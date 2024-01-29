let isDOBOpen = false;
var dateOfBirth;
const gearIconEl = document.getElementById("gearIcon");
const settingContentEl = document.getElementById("settingContent");
const beforeTextEl = document.getElementById("beforeText");
const afterTextEl = document.getElementById("afterText");
const dobBtnEl = document.getElementById("dobBtn");
const dobInputEl = document.getElementById("dobInput");

let yearEl = document.getElementById("year");
let monthEl = document.getElementById("month");
let dateEl = document.getElementById("date");
let hourEl = document.getElementById("hour");
let minuteEl = document.getElementById("minute");
let secondEl = document.getElementById("second");

const twoDigit = (num) => {
  return num < 10 ? `0${num}` : num;
};

const toggleIcon = () => {
  if (isDOBOpen) {
    settingContentEl.classList.add("hide");
  } else {
    settingContentEl.classList.remove("hide");
  }
  isDOBOpen = !isDOBOpen;

  //   console.log("Toggle", isDOBOpen);
};

const getAge = () => {
  const now = new Date();
  const dob = new Date(dateOfBirth);
  const age = now - dob;
  const ageDate = new Date(age);
  const year = ageDate.getFullYear() - 1970;
  const month = ageDate.getMonth();
  const date = ageDate.getDate() - 1;
  const hour = ageDate.getHours();
  const minute = ageDate.getMinutes();
  const second = ageDate.getSeconds();

  //   console.log(year, month, day, hour, minute, second);
  yearEl.innerHTML = twoDigit(year);
  monthEl.innerHTML = twoDigit(month);
  dateEl.innerHTML = twoDigit(date);
  hourEl.innerHTML = twoDigit(hour);
  minuteEl.innerHTML = twoDigit(minute);
  secondEl.innerHTML = twoDigit(second);
};

const setDOB = () => {
  dateOfBirth = new Date(dobInputEl.value);
  if (dateOfBirth <= new Date()) {
    // const year = localStorage.getItem("year");
    // const month = localStorage.getItem("month");
    // const date = localStorage.getItem("date");
    // const hour = localStorage.getItem("hour");
    // const minute = localStorage.getItem("minute");
    // const second = localStorage.getItem("second");

    // if (year && month && date && hour && minute && second) {
    //   dateOfBirth = new Date(year, month, date, hour, minute, second);
    //   console.log(dateOfBirth);
    // }

    if (dateOfBirth) {
      //   localStorage.setItem("year", dateOfBirth.getFullYear());
      //   localStorage.setItem("month", dateOfBirth.getMonth());
      //   localStorage.setItem("day", dateOfBirth.getDate());
      //   localStorage.setItem("hour", dateOfBirth.getHours());
      //   localStorage.setItem("minute", dateOfBirth.getMinutes());
      //   localStorage.setItem("second", dateOfBirth.getSeconds());

      beforeTextEl.classList.add("hide");
      afterTextEl.classList.remove("hide");
      //   getAge();
      setInterval(() => {
        getAge();
      }, 1000);
    } else {
      beforeTextEl.classList.remove("hide");
      afterTextEl.classList.add("hide");
    }
  } else {
    alert("Invalid Date of Birth");
  }
};
setDOB();

gearIconEl.addEventListener("click", toggleIcon);

dobBtnEl.addEventListener("click", setDOB);
