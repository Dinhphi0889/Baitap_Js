/**
 * input :
 *      + nhập vào 1 số có 2 chữ số
 * 
 * step:
 *      + lấy giá trị từ form
 *      + tách lấy hàng đơn vị = số % 10
 *      + tách lấy hàng chục = số / 10
 * output: 
 *      + tổng 2 ký số
 */

function tinhKySo(){
    tongKySo = 0;
    let so = document.getElementById("inputSo").value;
    hang_don_vi = so % 10;
    hangChuc = Math.floor(so / 10);
    tongKySo = hangChuc + hang_don_vi;
    document.getElementById("txtBai5").innerHTML = "Tổng 2 ký số là : " + tongKySo
}
document.getElementById("btnBai5").onclick = tinhKySo;