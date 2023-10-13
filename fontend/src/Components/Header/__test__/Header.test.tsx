import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../index';

const mockfuntion = jest.fn();
describe("Header", ()=>{
    it('Should be in DOM', async () => {
      render(<Header setQuery={mockfuntion} setSearchBy={mockfuntion}/>)
      const inputElement = screen.getByPlaceholderText(/Search/i);
      const selectElement = screen.getByTestId('select');
      expect(inputElement).toBeInTheDocument();
      expect(selectElement).toBeInTheDocument();
    });
    it('Should be able to type value in search and select option', async () => {
      render(<Header setQuery={mockfuntion} setSearchBy={mockfuntion}/>)
      const inputElement : HTMLInputElement = screen.getByPlaceholderText(/Search/i);
      const selectElement : any= screen.getByTestId('select');
      fireEvent.change(inputElement, { target: {value : 'this is search'}});
      fireEvent.change(selectElement, { target: { value : 'name'}})
      expect(selectElement.value).toBe("name");
      // expect(selectElement).toBeInTheDocument();
    });

})
