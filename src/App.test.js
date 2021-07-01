import {render, screen} from '@testing-library/react';
import ReactDOM from "react-dom"
import App from './App';
import SamuraiJSApp from './App';


test('renders learn react link', () => {
    render(<App/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("render without crashing SAMURAI", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SamuraiJSApp/>, div);
    ReactDOM.unmountComponentAtNode(div);
});