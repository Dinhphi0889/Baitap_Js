/**
 * input:
 *      + số thực
 *      + số chia : 5
 * step:
 *      + lấy giá trị từ form
 *      + công thức tính giá trị trung bình:
 *         (tổng số thực) / 5
 *  
 * output:
 *      + giá trị trung bình
 */

function tinhGiaTriTB() {
    let soChia = 5;
    let giaTriTB = 0;
    let soThuc1 = document.getElementById("inputSothuc1").value;
    let soThuc2 = document.getElementById("inputSothuc2").value;
    let soThuc3 = document.getElementById("inputSothuc3").value;
    let soThuc4 = document.getElementById("inputSothuc4").value;
    let soThuc5 = document.getElementById("inputSothuc5").value;
    giaTriTB = (Number(soThuc1) + Number(soThuc2) + Number(soThuc3) + Number(soThuc4) + Number(soThuc5)) / soChia
    document.getElementById("txtBai2").innerHTML = "Giá trị trung bình là : " + giaTriTB

}
document.getElementById("btnBai2").onclick = tinhGiaTriTB;