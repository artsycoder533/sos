import { render, screen, waitFor } from '@testing-library/react' 
import userEvent from '@testing-library/user-event'
import RotatingHamburger from '@/app/components/RotatingHamburger'

describe('RotatingHamburger', () => {
    let open: boolean;
    let setOpen: (val: boolean) => void;

    beforeEach(() => {
        open = false;
        setOpen = jest.fn((val) => {
            open = val;
        })
    });

    test('renders correctly', () =>{
        render(<RotatingHamburger open={open} setOpen={setOpen} />);
        const button = screen.getByRole('button', { name: /menu/i});
        expect(button).toBeInTheDocument();
    });

    test('calls setOpen on button click', async() => {
        render(<RotatingHamburger open={open} setOpen={setOpen} />);
        const button = screen.getByRole('button', { name: /menu/i});

        const user = userEvent.setup();
        await user.click(button);
        expect(setOpen).toHaveBeenCalledWith(true);

        await user.click(button);
        waitFor(() => {
            expect(setOpen).toHaveBeenCalledWith(false);
        })
        
    })
})