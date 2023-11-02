import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas <CounterApp/>", () => {
  const initValue = 100;
  test(`Debe mostrar un valor inicial de ${initValue}`, () => {
    render(<CounterApp value={initValue}/>);
    expect(screen.getByText(`Value: ${initValue}`)).toBeTruthy();
  });
  test(`Debe incrementar el botón de +1`, () => {
    render(<CounterApp value={initValue}/>);
    fireEvent.click(screen.getByText(`+1`));
    expect(screen.getByText(`Value: ${initValue + 1}`)).toBeTruthy();
  });
  test(`Debe decrementar el botón de -1`, () => {
    render(<CounterApp value={initValue}/>);
    fireEvent.click(screen.getByText(`-1`));
    expect(screen.getByText(`Value: ${initValue - 1}`)).toBeTruthy();
    //screen.debug();
  });
  test(`Debe funcionar el botón de reset`, () => {
    render(<CounterApp value={initValue}/>);
    {
      for(let indx = 0; indx < 10; indx++){
        fireEvent.click(screen.getByText(`-1`));
    }}
    //fireEvent.click(screen.getByText(`Reset`));
    fireEvent.click(screen.getByRole('button', { name: 'counter-app__button--reset' }));
    expect(screen.getByText(`Value: ${initValue}`)).toBeTruthy();
    //screen.debug();
  });
});
