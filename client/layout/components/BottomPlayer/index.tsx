import React, { FC, useRef, useEffect, useMemo } from 'react';
import './style.less';
import Progress from './Progress';
import Button from '@/components/Button';
import useAudio from '@/hooks/useAudio';
import { getMusicDuration } from '@/utils/time';

interface BottomPlayerProps {
  name?: string;
}

const BottomPlayer: FC<BottomPlayerProps> = () => {
  const { audioRef, paused, duration, current, percent, play, pause } = useAudio(
    'https://m10.music.126.net/20200529231105/3295fb60170389ebdd3d1209f296835a/ymusic/0281/ca8c/2acd/063a9d4ee75c895b6130f8048bb0b37d.mp3',
  );

  const musicTime = useMemo<string>(
    () => `${getMusicDuration(current)} / ${getMusicDuration(duration)}`,
    [current, duration],
  );

  return (
    <footer className="bottom-player">
      <audio ref={audioRef}>
        <track kind="captions" />
      </audio>
      <Progress
        value={percent}
        onChange={(p) => {
          play((p / 100) * duration);
        }}
      />
      <ul className="bottom-player-bar">
        <li className="bottom-player-song">
          <img
            className="song-avator"
            alt="歌曲图片"
            src="https://p4.music.126.net/lRE0QHTUkA_DxlB14uzSqg==/109951164207703933.jpg?param=200y200"
          />
          <dl className="flex-1 min-w-0 text-white">
            <dt className="flex items-center">
              <span className="flex-1 truncate">My Heart Will Go On (Titanic)</span>
              <small className="whitespace-no-wrap opacity-75">&nbsp; - Bronn Journey</small>
            </dt>
            <dd className="text-xs opacity-50">{musicTime}</dd>
          </dl>
        </li>
        <li className="bottom-player-control">
          <Button type="xihuan" className="text-white text-lg" title="喜欢"></Button>
          <Button
            type="shangyishou"
            className="text-primary text-2xl"
            title="上一首(快捷键)"></Button>
          <PlaySwitch paused={paused} onPlay={() => play(current)} onPause={pause} />
          <Button type="next" className="text-primary text-2xl" title="下一首(快捷键)"></Button>
          <Button type="fenxiang" className="text-white text-lg" title="分享"></Button>
        </li>
        <li className="bottom-player-menu">
          <Button type="bofangliebiao" className="text-white text-lg" title="打开播放列表"></Button>
          <Button type="geci" className="text-white text-lg" title="歌词"></Button>
          <Button type="yinliang" className="text-white text-lg" title="静音"></Button>
        </li>
      </ul>
    </footer>
  );
};

export default BottomPlayer;

interface PlaySwitchProps {
  paused: boolean;
  onPlay: () => void;
  onPause: () => void;
}

const PlaySwitch: FC<PlaySwitchProps> = (props) => {
  const { paused, onPlay, onPause } = props;

  return paused ? (
    <Button
      onClick={onPlay.bind(null, 0)}
      type="bofang pl-1"
      className="play-btn"
      title="播放(快捷键)"></Button>
  ) : (
    <Button
      onClick={onPause}
      type="bofangzanting "
      className="play-btn"
      title="暂停(快捷键)"></Button>
  );
};
