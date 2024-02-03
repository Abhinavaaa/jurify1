import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header/new-component/header';

export default createBoard({
    name: 'Header',
    Board: () => <Header />,
    isSnippet: true,
});
