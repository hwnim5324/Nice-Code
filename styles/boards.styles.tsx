import styled from "@emotion/styled";

const SaveButton = styled.button`
    margin: 40px 0 0 0;
    width: 240px;
    height: 48px;

    border: none;
    background-color: black;
    color: white;

    font-size: 16px;
    font-weight: 600;
`;

const PageList = styled.div`
    display: flex;
    justify-content: center;

`

const PageNumList = styled.ul`
    list-style: none;
    display: flex;
    padding: 0 20px 0 20px;

    li{
        margin: 0 6px 0 6px;
    }

    a{
        color: black;
        text-decoration: none;
    }
`

const PostList = styled.div`
    
`

const Posts = styled.ul`
    list-style: none;
    padding: 0 0 0 0;
`;

const Post = styled.li`
    display: flex;
    width: 100%;
    height: 52px;
    align-items: center;

    a{
        color: black;
        text-decoration: none;
    }
`;


export { SaveButton, PageList, PageNumList, PostList, Posts, Post };