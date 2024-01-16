/**
 * input :
 *      +  số tiền cần quy đổi
 *      + giá usd
 * 
 * step: 
 *      + lấy giá trị từ form
 *      + giá tiền quy đổi = số tiền cần quy đổi * giá usd
 * 
 * output: 
 *      giá tiền quy đổi
 */

function giaQuyDoi() {
    let quyDoi = 0;
    let giaUSD = 23500;
    let soTien = document.getElementById("inputTien").value;
    quyDoi = soTien * giaUSD;
    document.getElementById("txtBai3").innerHTML = "Giá tiền quy đổi là : " + quyDoi

}
document.getElementById("btnBai3").onclick = giaQuyDoi;