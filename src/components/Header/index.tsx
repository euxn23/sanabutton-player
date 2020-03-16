import React from 'react';
import { Title, ThankNatori, HommageContainer, Text, Container, TitleContainer } from './styles';
import { TweetButton } from '../TweetButton';

export function Header() {
  return (
    <Container>
      <TitleContainer>
        <Title>さなボタン(3 beta)</Title>
      </TitleContainer>
      <ThankNatori>
        さなちゃんからいつも元気貰ってます、ありがとう！ <br />
        勝手に作っちゃってごめんなさい
        <br />
        音声データは
        <a href="https://www.ntoirsana.love" target="_blank" rel="noopener noreferrer">
          さなボタン(2)
        </a>
        の API を使用しています
      </ThankNatori>
      <TweetButton />
      <HommageContainer>
        <Text color="#ffffee">
          オマージュ
          <br />
          素敵なボタンサイト様
        </Text>
        <Text>
          <a href="http://ushiumi.ichiya-boshi.net/">宇志海ボタン</a>様
        </Text>
        <Text color="#ffefff">
          <a href="http://tsukino-mito.extrem.ne.jp/">美兎ボタン</a>様
        </Text>
        <Text>
          <a href="https://rimumaki.clocknote.net">りむとまきボタン</a>様
        </Text>
        <Text color="#ffefff">
          <a href="http://inabagumi.sakura.ne.jp/">はねるボタン(2)</a>様
        </Text>
        <Text>
          <a href="/odanobu">タロ耳又ボタン</a>様
        </Text>
      </HommageContainer>
    </Container>
  );
}
