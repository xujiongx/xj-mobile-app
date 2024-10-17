import WSL_LOVE_URL from '@/assets/汪苏泷-不分手的恋爱.mp3';
import { Button } from 'antd-mobile';
import { useAudio } from 'react-use';

/**
 * 音乐控制
 * @returns
 */
const AudioDemo = () => {
  const [audio, state, controls] = useAudio({
    src: WSL_LOVE_URL,
    autoPlay: true,
    loop: true,
    controls: true,
  });

  return (
    <div>
      {audio}
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Button onClick={controls.pause}>Pause</Button>
      <Button onClick={controls.play}>Play</Button>
      <br />
      <Button onClick={controls.mute}>Mute</Button>
      <Button onClick={controls.unmute}>Un-mute</Button>
      <br />
      <Button onClick={() => controls.volume(0.1)}>Volume: 10%</Button>
      <Button onClick={() => controls.volume(0.5)}>Volume: 50%</Button>
      <Button onClick={() => controls.volume(1)}>Volume: 100%</Button>
      <br />
      <Button onClick={() => controls.seek(state.time - 5)}>-5 sec</Button>
      <Button onClick={() => controls.seek(state.time + 5)}>+5 sec</Button>
    </div>
  );
};

export default AudioDemo;
