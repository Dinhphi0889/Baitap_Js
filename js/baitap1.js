/**
 * input:
 *      + lương
 *      + ngày làm
 * step:
 *      + lấy giá trị từ form
 *      + công thức tính tiền lương:
 *         tongLuong = luong * ngaylam
 *  
 * output:
 *      + tổng tiền lương
 */


function tinhTien() {
    let tongLuong = 0;
    let luong = 100000;
    let ngayLam = document.getElementById("inputNgay").value;
    tongLuong = luong * ngayLam
    document.getElementById("txtBai1").innerHTML = "Tổng tiền lương là : " + tongLuong
}
document.getElementById("btnBai1").onclick = tinhTien;