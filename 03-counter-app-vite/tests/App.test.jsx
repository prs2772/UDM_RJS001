import { render } from "@testing-library/react";
import { App } from "../src/App";

describe("Pruebas <App/>", () => {
  //test("Hacer match en snapshot", async () => {
    //const { container } = render(<App title={"Test App"} />);
    //expect(container).toMatchSnapshot();
  //});
  test("Debe de mostrar el titulo en un h1", () => {
    const title = "Test App";
    const { container, getByText, getByTestId } = render(<App title={title} />);
    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toContain(title);
    //O también...
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });
  test("debe de mostrar el subtitulo enviado por props", () => {
    const title = "Test App";
    const subTitle = "Subtitle";
    const { getAllByText } = render(
      <App title={title} subTitle={subTitle} />
    );

    expect(getAllByText(subTitle).length).toBe(2);
  });
});
