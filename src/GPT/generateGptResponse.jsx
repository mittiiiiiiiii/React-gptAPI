import axios from 'axios';
import { conversationData } from './conversationData';

export const generateGptResponse = async (prompt) => {
    const config = {//APIリクエストの設定
        headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
    };

    const data = {//APIリクエストのデータ
        model:'gpt-3.5-turbo',
        messages:await conversationData(prompt),
    };

    const url='https://api.openai.com/v1/chat/completions';// APIのURL

    try {
        const response=await axios.post(url, data, config);// APIにリクエストを送信し、レスポンスを受け取る
        const generatedText=response.data.choices[0].message.content;// レスポンスから生成されたテキストを抽出
        return generatedText;
    } catch (error){//エラーが発生した場合は、そのエラーを出力
        console.error(error);
        return `エラーが発生しました:${error.message}`;
    }
};