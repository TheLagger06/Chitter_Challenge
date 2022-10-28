import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock(`./components/Header`, () => () => {
    return <mock-header data-testid="Header" />;
});

jest.mock(`./components/TalentSpotlight/Main`, () => () => {
    return <mock-main data-testid="Main" />;
});

jest.mock(`./components/Footer`, () => () => {
    return <mock-footer data-testid="Footer" />;
});

describe(`App component tests`, () => {

    describe(`render tests`, () => {

        beforeEach(() => {
            render(<App />);
        })

        test(`It should render the Header component`, () => {
            const headerElement = screen.getByTestId('Header');
            expect(headerElement).toBeInTheDocument();
        })

        test.skip(`It should render the Main component`, () => {
            const mainElement = screen.getByTestId(`Main`);
            expect(mainElement).toBeInTheDocument();
        });

        test(`It should render the Footer component`, () => {
            const footerElement = screen.getByTestId(`Footer`);
            expect(footerElement).toBeInTheDocument();
        });
    });
});

