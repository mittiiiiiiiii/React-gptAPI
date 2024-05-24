import React, { useState } from 'react';
import styled from 'styled-components';
import { generateGptResponse } from './GPT/generateGptResponse';

function InputForm() {
  const [value,setValue]=useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response=await generateGptResponse(value);
      alert(response);
    } catch (error) {
      alert('エラーが発生しました: '+error);
    }
  };

  function handleClear() {
    setValue('');
  }

  return (
    <BackgroundDiv>
      <FormDiv>
        <TextMessage>質問を入力してください</TextMessage>
        <AreaDiv>
          <InputArea
            value={value}
            onChange={handleChange}
            placeholder="何か入力してください"/>
        </AreaDiv>
        <ButtonDiv>
        <Button onClick={handleClear}>クリア</Button>
          <Button onClick={handleSubmit}>送信</Button>
        </ButtonDiv>
      </FormDiv>
    </BackgroundDiv>
  );
}

export default InputForm;

const Button=styled.button`
  height:8vh;
  width:15vw;
  margin-right:3vw;
  margin-left:3vw;
`;

const ButtonDiv=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:10vh;
  width:50vw;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
`;

const AreaDiv=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  width:70vw;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
`;

const InputArea=styled.textarea`
  background-color:#ffffff;
  border: 1px solid#000000;
  border-radius:4px;
  color:#000000;
  font-family:"Inter-Regular", Helvetica;
  font-size:16px;
  font-weight:400;
  height:150px;
  margin-top:-250px;
  padding:0 16px;
  width:70%;
`;

const TextMessage=styled.p`
  color:#000000;
  font-family:"Inter-Regular", Helvetica;
  font-size:48px;
  font-weight:400;
  left:0;
  letter-spacing:0;
  line-height:normal;
  position:fixed;
  top:0;
  left:25%;
  width:530px;
`;

const FormDiv=styled.div`
  background-color:white;
  height:650px;
  width:1000px;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
`;

const BackgroundDiv=styled.div`
  background-color:black;
  width:100vw;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
`;