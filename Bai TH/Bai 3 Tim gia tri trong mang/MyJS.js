// Tìm xem giá trị input có trong mảng ko?
// Input: giá trị prompt input và 1 mảng 6 phần tử
let value = prompt('Enter the number');
let numbers = [-3, 5, 1, 3, 2, 10];

// Process: Sử dụng vòng lặp kiểm tra từng phần tử của mảng. từ phần tử đầu tiên i=0
for(let i = 0; i < numbers.length; i++) {
    // nếu giá trị nhập vào = giá trị nào đó trong mảng
    if(value == numbers[i]) {
        // In ra giá trị input trùng với giá trị có trong mảng
        alert('Value' + numbers[i] + 'found at' + i)
    }
}

//Output: in ra giá trị input trùng với giá trị có trong mảng