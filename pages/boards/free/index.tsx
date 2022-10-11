import type { NextPage } from 'next';
import Link from 'next/link';

import { PageList, PageNumList, PostList, Posts, Post } from '../../../styles/boards.styles';

const FreeBoard: NextPage = () => {
    return (
        <div>
            <PostList>
                <Posts>
                    <Post><Link href=''><a>1번 게시물</a></Link></Post>
                    <Post><Link href=''><a>2번 게시물</a></Link></Post>
                </Posts>
            </PostList>
            <PageList>
                <button>&#60;</button>
                <PageNumList>
                    <li><Link href=''><a>1</a></Link></li>
                    <li><Link href=''><a>2</a></Link></li>
                </PageNumList>
                <button>&#62;</button>
            </PageList>
        </div>
    )
}

export default FreeBoard;
