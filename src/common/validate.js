/**
* Created by nghinv on Thu May 31 2018
* Copyright (c) 2018 nghinv
*/

export const isValidEmail = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? false : true

export const isWebAddress = value => value && /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i.test(value) ? true : false
