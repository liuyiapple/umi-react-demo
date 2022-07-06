import React from 'react';
import axios, { Axios } from 'axios';
import {message} from "antd"
const kingUrl = "https://apib.wozp.cn";

const Http = axios.create({
  baseURL:kingUrl
})

/**
 * *配置请求处理
 */
Http.interceptors.request.use(config => {
  const { url,once, method } = config;
  return config
},error => {
  // 请求到错误处理
  Promise.reject(error);
})

/**
 * 拦截 response ，并对错误进行处理
 * */

Http.interceptors.response.use(response =>{
  return Promise.resolve(response)
},error => {
  if(error) {
    message.error("网络请求发生错误")
  }
})
