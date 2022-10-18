import type { NextPage } from 'next';

import { Ranking, Body, Box, Title } from '../styles/main.styles';

interface props{
  BoardName: string,
  PostList?: object,
}

const BoardBox = ( props: props ) => {
  return(
    <Box>
      <Title>{props.BoardName}</Title>
      <ul>
        <li>글1</li>
        <li>글2</li>
      </ul>
    </Box>
  );
}

const Main: NextPage = () => {
  return (
    <>
      <Ranking>랭크</Ranking>
      <Body>
        <BoardBox BoardName='코드리뷰'></BoardBox>
        <BoardBox BoardName='질문'></BoardBox>
        <BoardBox BoardName='정보 게시판'></BoardBox>
        <BoardBox BoardName='자유 게시판'></BoardBox>
      </Body>
    </>
  )
}

export default Main;
