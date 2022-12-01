import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import Confirm from './SignUpConfirmation.jsx';


axios.defaults.baseURL = 'http://localhost:3001/api/v1/auth';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const InputForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');


useEffect(() =>{
  try {
    axios.post('http://localhost:3001/api/v1/auth', {
    first_name: firstName,
    lastname: lastName,
    email: email,
    phone: phone,
    password: password,
    password_confirmation: passwordConf
    });
} catch (error) {
  console.log('miss')
}
})


const handleChange = (event) => {
  switch (event.target.name) {
    case 'first_name':
      setFirstName(event.target.value);
      break;
    case 'last_name':
      setLastName(event.target.value);
      break;
    case 'email':
      setEmail(event.target.value);
      break;
    case 'phone':
      setPhone(event.target.value)
      break;
    case 'password':
      setPassword(event.target.value)
      break;
    case 'password_confirmation':
      setPasswordConf(event.target.value)
      break;
    default:
    }
  }

const handleSubmit = (event) => {
  event.preventDefault();
}

return (
  <>
  <form onSubmit={handleSubmit}>
    <label>性</label>
    <input name = "first_name" value = {firstName} onChange = {handleChange} />
    <label>名</label>
    <input name = "last_name" value = {lastName} onChange = {handleChange} />
    <label>メールアドレス</label>
    <input name = "email" value = {email} onChange = {handleChange} />
    <label>電話番号</label>
    <input name = "phone" value = {phone} onChange = {handleChange} />
    <label>パスワード</label>
    <input name = "password" value = {password} onChange = {handleChange} />
    <label>パスワード確認</label>
    <input name = "password_confirmation" value = {passwordConf} onChange = {handleChange} />
    <input type="submit" value="Submit" />
  </form>

  <Confirm
    firstName = {firstName}
    lastName = {lastName}
    email = {email}
    phone = {phone}
    password = {password}
    password_confirmation = {passwordConf}
  />
  </>
       );
}
export default InputForm;