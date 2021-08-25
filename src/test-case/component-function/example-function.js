const potongGaji = (gaji) => {
  const Pajak = 10 / 100;
  const gajiBersih = gaji - Pajak * gaji;
  return `Gaji bersih anda Rp.${gajiBersih}`;
};

const sapaan = (nama) => {
  return `Hallo ${nama}`;
};

export { potongGaji, sapaan };
