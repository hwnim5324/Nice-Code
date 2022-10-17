import type { NextPage } from 'next';

import { Ranking, Body, Box } from '../styles/main.styles';

const Main: NextPage = () => {
  return (
    <>
      <Ranking>랭크</Ranking>
      <Body>
        <Box>코드리뷰</Box>
        <Box>질문</Box>
        <Box>정보 게시판</Box>
        <Box>자유 게시판</Box>
      </Body>
    </>
  )
}

export default Main;
