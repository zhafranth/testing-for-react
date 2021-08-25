import { perkalian, penjumlahan } from "./component-function/angka";
import { potongGaji, sapaan } from "./component-function/example-function";

// 1. Basic testing
test("testing basics", () => {
  expect(true).toBe(true);
});

test("Menjumlahkan Nilai", () => {
  expect(1 + 1).toBe(2);
});

// 2. Menguji sebuah Function
test("Menguji function Penjumlahan", () => {
  expect(penjumlahan(1, 2)).toBe(3);
});

test("Menguji function Perkalian", () => {
  expect(perkalian(2, 3)).toBe(6);
});

// 3. Memisahkan file testing dengan fungsi yang ditest dan grouping test

describe("Menggabungkan sebuah test uji", () => {
  test("Menguji function potong pajak gaji", () => {
    expect(potongGaji(100)).toBe("Gaji bersih anda Rp.90");
    expect(potongGaji(50)).toBe("Gaji bersih anda Rp.45");
  });

  test("Menguji function sapaan", () => {
    expect(sapaan("Supri")).toBe("Hallo Supri");
  });
});
