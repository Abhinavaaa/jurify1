import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header/header';

export default createBoard({
    name: 'header',
    Board: () => (
        <div>
            <Header />
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1025,
    },
});
