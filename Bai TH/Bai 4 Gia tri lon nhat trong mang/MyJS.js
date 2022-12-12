// Input : 1 mảng
let numbers = [-3, 5, 1, 3, 2, 10];
// Process:
// Giả sử giá trị max trong array trong vị trí số 1
let max = numbers[0];
// Chỉ số mặc đinh của giá trị max
let index = 0;
// Sử dụng vòng for duyệt qua các phần tử trong mảng.
// chạy từ phần tử thứ 2 tức i = 1
// số lần chạy ko quá chiều dài mảng i < numbers.length.
// so sánh từng phần tử trong mảng vs max: numbers[i] > max
// và gán lại giá trị của index = i;
for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] > max) {
        max = numbers[i];
        index = i;
    }
}
// Output là giá trị max của mảng
alert("max" + max + "at position" + index);
