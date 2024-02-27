import { render, screen } from '@testing-library/react';
import Greet from './greet';

describe('Greet', () => {
    it('Greet renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText(/Hello/i);
        expect(textElement).toBeInTheDocument();
    })

    it('Greet renders with a name', () => {
        render(<Greet name='Vishwas' />);
        const textElement = screen.getByText('Hello Vishwas');
        expect(textElement).toBeInTheDocument();
    })
});

