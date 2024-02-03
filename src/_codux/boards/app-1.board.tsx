import { createBoard } from '@wixc3/react-board';
import { Footer } from '../../components/footer/footer';
import { ComponentWrapper } from '../board-wrappers/component-wrapper';
import { Header } from '../../components/header/header';

export default createBoard({
    name: 'App',
    Board: () => (
        <div>
            <Header />
            <Footer />
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1036,
        canvasHeight: 658,
    },
});
