import { Button } from 'antd-mobile';
import { useRef, useState } from 'react';

/**
 * 录音，文件下载
 * @returns
 */
const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks((prevChunks) => [...prevChunks, event.data]);
        }
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const saveAudio = () => {
    if (audioChunks.length > 0) {
      const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
      const audioUrl = URL.createObjectURL(audioBlob);

      const downloadLink = document.createElement('a');
      downloadLink.href = audioUrl;
      downloadLink.download = 'recording.webm';
      downloadLink.click();
    }
  };

  // 本地或者https才有用
  console.log('👗', navigator, navigator.mediaDevices);

  return (
    <div>
      <p>{isRecording ? 'Recording...' : 'Not Recording'}</p>
      <Button onClick={startRecording} disabled={isRecording}>
        Start Recording
      </Button>
      <Button onClick={stopRecording} disabled={!isRecording}>
        Stop Recording
      </Button>
      <Button onClick={saveAudio} disabled={audioChunks.length === 0}>
        Save Audio
      </Button>
    </div>
  );
};

export default AudioRecorder;
