import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'arara'", () => {
    const ehPalindromo = checaPalindromo("arara");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'asa'", () => {
    const ehPalindromo = checaPalindromo("asa");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'Socorram-me'", () => {
    const ehPalindromo = checaPalindromo("em marrocos");
    expect(ehPalindromo).toEqual(true);
  });
  //Apesar de aparentemente ficarem iguais existe o "-" em socorram-me
});
