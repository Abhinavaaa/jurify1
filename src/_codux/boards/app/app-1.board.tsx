import { createBoard } from '@wixc3/react-board';
import { Footer } from '../../../components/footer/footer';
import { Header } from '../../../components/header/header';

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
        canvasWidth: 1312,
        canvasHeight: 658,
        windowWidth: 1362,
    },
});
