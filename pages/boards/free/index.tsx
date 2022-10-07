import type { NextPage } from 'next';
import Link from 'next/link';

const FreeBoard: NextPage = () => {
    return (
        <div>
            <div>
                <ul>
                    <li><Link href=''><a></a></Link></li>
                </ul>
            </div>
            <div>
                <button><</button>
                <ul>
                    <li><Link href=''><a></a></Link></li>
                </ul>
                <button>></button>
            </div>
        </div>
    )
}

export default FreeBoard;
