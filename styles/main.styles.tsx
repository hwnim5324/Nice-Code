import styled from "@emotion/styled";

const Ranking = styled.aside`
    width: 20%;
    height: 500px;

    border: 1px solid #d7e2eb;
    border-radius: 1rem;

    padding: 20px;
`;

const Body = styled.section`
    width: 70%;
    display: grid;

    grid-template-columns: 1fr 1fr;
    gap: 2em;
`;

const Box = styled.article`
    height: 400px;

    border: 1px solid #d7e2eb;
    border-radius: 1rem;

    padding: 20px;
`;

export { Ranking, Body, Box };