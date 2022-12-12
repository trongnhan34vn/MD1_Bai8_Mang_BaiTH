// Đảo ngược các phần tử trong thẻ

// Input: mảng có 6 phần tử
let x = [-3, 5, 1, 3, 2, 10];
// Process:
let first = 0;
//biến first duyệt từ phần tử đầu tiên trong mảng
let last = x.length - 1;
//Biến last duyệt tử cuối cùng của mảng

//vòng lặp chạy vs điều kiện first < last, đổi chỗ phần tử đầu tiên và cuối cùng cho nhau
// Sau đó First ++ và Last --

while (first < last) {
    let b = x[first];
    x[first] = x[last];
    x[last] = b;
    first ++;
    last --;
}
// Output: mảng mới đã được đảo ngược các phần tử
document.write(x);

// document.write(x.reverse())