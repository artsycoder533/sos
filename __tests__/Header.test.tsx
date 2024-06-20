import { render, screen } from '@testing-library/react'
import Header from '@/app/components/Header'

describe('Header', () => {
    test('should render the header element', () => {
        render(<Header />);

        const header = screen.getByRole('banner');

        expect(header).toBeInTheDocument();
    });

    test('should render the navbar', () => {
        render(<Header />);

        const nav = screen.getByRole('navigation');

        expect(nav).toBeInTheDocument();
    })
})