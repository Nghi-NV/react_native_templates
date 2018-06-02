/**
* Created by nghinv on Thu May 31 2018
* Copyright (c) 2018 nghinv
*/

'use strick';

export const getDate = () => {
  const date = new Date();

  const dateTime = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };

  return dateTime;
}

export const getTime = () => {
  const date = new Date();

  const time = {
    hour: date.getHours(),
    minutes: date.getMinutes(),
    second: date.getSeconds()
  };

  return time;
}

export const getDateString = () => {
  const date = new Date();

  const dateTime = {
    day: date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`,
    month: date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`,
    year: `${date.getFullYear()}`,
  };

  return dateTime;
}

export const getTimeString = () => {
  const date = new Date();

  const time = {
    hour: date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`,
    minutes: date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`,
    second: date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`
  };

  return time;
}
