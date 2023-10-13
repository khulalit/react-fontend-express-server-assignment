import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Using MemoryRouter for testing routes
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

test('renders App component', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );

  const homeElement = screen.getByTestId("main");
  expect(homeElement).toBeInTheDocument();
});
