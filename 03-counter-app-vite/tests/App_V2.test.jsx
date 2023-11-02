import { render, screen } from "@testing-library/react";
import { App } from "../src/App";

describe("Pruebas en <App />", () => {
  const title = "Test App";
  const subTitle = "Subtitle";

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<App title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el mensaje "Test App"', () => {
    render(<App title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
    // screen.debug();
  });

  test("debe de mostrar el titulo en un h1", () => {
    render(<App title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    render(<App title={title} subTitle={subTitle} />);

    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});
