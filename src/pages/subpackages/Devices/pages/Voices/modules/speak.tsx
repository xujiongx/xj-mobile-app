// import y1558 from '@/assets/y1558.mp3';
import { Button } from 'antd-mobile';

/**
 * 文本转语音
 * @returns
 */
const Speak = () => {
  const textSpeak = (text: string) => {
    // 创建一个新的 SpeechSynthesisUtterance 对象
    const msg = new SpeechSynthesisUtterance(text);

    // 设置语言（可选）
    // msg.lang = 'en-US'; // 英语（美国）
    msg.lang = 'zh-CN'; // 中文（简体）

    // 设置语速、音调和音量（可选）
    msg.rate = 1; // 语速，默认值是1
    msg.pitch = 1; // 音调，默认值是1
    msg.volume = 1; // 音量，范围是0到1

    // 调用 speak() 方法来朗读文本
    window.speechSynthesis.speak(msg);
  };

  return (
    <div>
      <Button
        onClick={() =>
          textSpeak(
            '编辑大模型知识，这里要的效果和数字人保持一致；现在外呼体验没做好，这次语音机器人要先做好。点击确定后，实时进行知识的更新。',
          )
        }
      >
        speak
      </Button>
    </div>
  );
};

export default Speak;
