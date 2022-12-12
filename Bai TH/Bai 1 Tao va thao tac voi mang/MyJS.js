// x là chỉ số truy cập vào các phần tử của mảng.
// Input: mảng rỗng array và các phần tử x
let x = 0;
let array = [];

// Process: Sử dụng function để đưa các phần tử vào trong mảng
function add_element_to_array() {
    array[x] = document.getElementById("txtValue").value;
    alert("Element: " + array[x] + "Add at index" + x);
    x++;
    document.getElementById('txtValue').value = "";
}
// Sử dùng function để hiện ra các phần tử đã nhập vào ô input
function display_array() {
    let e = '<hr/>';
    // sử dụng voòng lặp để in ra các phần tử trong thẻ
    for (let i = 0; i < array.length; i++) {
        e += "Element" + i + " = " + array[i] + "<br>";
    }
    document.getElementById('result').innerHTML = e;
}
// Output là các phần tử trong thẻ
console.log(array)

