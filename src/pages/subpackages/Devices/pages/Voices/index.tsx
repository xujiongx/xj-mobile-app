// import AudioDemo from './modules/audio';
import AudioDemo from './modules/audio';
import AudioRecorder from './modules/audioRecords';
import Speak from './modules/speak';
import Dictaphone from './modules/speech';

// 获取麦克风权限
export function getAudioUserMedia() {
  /** 兼容代码 */
  if (navigator.mediaDevices === undefined) {
    (navigator as any).mediaDevices = {};
  }
  if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = (constraints) => {
      const getUserMedia =
        (navigator as any).webkitGetUserMedia ||
        (navigator as any).mozGetUserMedia;
      if (!getUserMedia) {
        return Promise.reject('not implemented in this browser');
      }
      return new Promise((resolve, reject) => {
        getUserMedia.call(navigator, constraints, resolve, reject);
      });
    };
  }
  // 获取麦克风权限
  return navigator.mediaDevices.getUserMedia({ video: false, audio: true });
}

export default function Page() {
  getAudioUserMedia();
  return (
    <div>
      <Speak />
      <Dictaphone />
      <AudioDemo />
      <AudioRecorder />
    </div>
  );
}
