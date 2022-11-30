const input = myWeb.querySelector("input"); // chon cai input
const table = myWeb.querySelector("table"); // chon cai table
input.addEventListener('change', (e) => {
  const text = e.target.value; // day la gia tri cua input moi khi no thay doi
  // thay doi HTML cua hang thu 2 va cot thu 1  cua table (o phia duoi Name)
  table.rows[1].cells[0].innerHTML = text;
});