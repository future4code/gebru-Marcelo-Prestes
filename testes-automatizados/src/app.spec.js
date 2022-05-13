import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("Home Page tests", () => {
  test("Indicador de quantidade de produtos começa em 3", () => {
    const { getByText } = render(<App />);
    const indicador = getByText(/Quantidade de Produto/i); // case insensitive
    expect(indicador.textContent).toBe("Quantidade de produtos: 3");
    expect(indicador).toHaveTextContent("Quantidade de produtos: 3"); // ou assim
  });

  test("Sem valor mínimo, há quatro produtos, e isso é indicado corretamente", async () => {
    const { getByText, getByLabelText, getAllByText, queryByText } = render(
      <App />
    );
    const indicador = getByText(/Quantidade de Produto/i); // case insensitive
    const filtroMinInput = getByLabelText(/Filtro Mínimo:/);
    await userEvent.type(filtroMinInput, "{backspace}".repeat(2));
    const produtos = getAllByText(/Produto /);
    const naoExiste = queryByText(/iago/);
    console.log("Elemento não encontrado:", naoExiste);
    expect(produtos).toHaveLength(4);
    expect(produtos.length).toBe(4);
    expect(indicador).toHaveTextContent("Quantidade de produtos: 4");
  });

  test.skip("Filtro de busca por nome funciona, e encontra produto com 'legal' no nome", () => {
    const { getAllByText, getByLabelText } = render(<App />);
    const filtroNome = getByLabelText("Busca por nome:");
    userEvent.type(filtroNome, "legal");
    const produtos = getAllByText(/Produto /);
    expect(produtos).toHaveLength(1);
  });

  test.skip("Ordenação decrescente garante produto de preço maior na frente.", () => {
    const { getAllByText, getByLabelText, getByText } = render(<App />);
    const ordenacaoSelect = getByLabelText(/Ordenação:/);
    userEvent.selectOptions(ordenacaoSelect, getByText(/Decrescente/));
    const [primeiro, segundo] = getAllByText(/R\$/);
    const precoPrimeiro = Number(
      primeiro.textContent.split(" ")[1].split(",")[0]
    );
    const precoSegundo = Number(
      segundo.textContent.split(" ")[1].split(",")[0]
    );
    expect(precoPrimeiro).toBeGreaterThan(precoSegundo);
  });
});
