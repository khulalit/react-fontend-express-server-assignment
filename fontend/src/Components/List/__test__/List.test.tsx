import { fireEvent, render, screen } from '@testing-library/react';
import List from '..';
const listMockUp = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

describe('List users', () => {

  it('render all the lists', async () => {

    jest.fn().mockResolvedValue(listMockUp)


    render(<List data={listMockUp} />);

    const name = await screen.findByText(/Romaguera-Crona/i);
    const contact = await screen.findByText(/Leanne Graham/i);
    const zipcode = await screen.findByText(/92998-3874/i);
    const city = await screen.findByText(/Gwenborough/i);
    expect(name).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
    expect(zipcode).toBeInTheDocument();
    expect(city).toBeInTheDocument();
  });

  it('Should render details the on clicking the button', ()=>{
    jest.fn().mockResolvedValue(listMockUp);
    render(<List data={listMockUp} />);

    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    const details = screen.getByTestId('details');

    expect(details).toBeInTheDocument();
  })
})

