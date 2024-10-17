import { Button } from 'antd-mobile';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

/**
 * 语录音转文本
 * @returns
 */
const Dictaphone = () => {
  const {
    isMicrophoneAvailable,
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>浏览器暂不支持录音</span>;
  }

  console.log(
    '🧜‍♂️',
    isMicrophoneAvailable,
    browserSupportsSpeechRecognition,
    transcript,
  );

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <Button
        onClick={() =>
          SpeechRecognition.startListening({
            language: 'zh-CN',
            continuous: true,
          })
        }
      >
        Start
      </Button>
      <Button onClick={SpeechRecognition.stopListening}>Stop</Button>
      <Button onClick={resetTranscript}>Reset</Button>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;
