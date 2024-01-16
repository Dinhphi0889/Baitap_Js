/**
 * input : 
 *      + chiều dài
 *      + chiều rộng
 * 
 * step: 
 *      lấy giá trị từ form
 *      tính diện tích = dài * rộng
 *      tính chu vì = (dài + rộng) * 2
 */

function tinhHCN() {
    let dienTich = 0;
    let chuVi = 0;
    let chieuDai = document.getElementById("inputDai").value;
    let chieuRong = document.getElementById("inputRong").value;
    dienTich = chieuDai * chieuRong;
    chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
    document.getElementById("txtBai4").innerHTML = `Diện tích của hình chữ nhật là : ` + dienTich + 
    `<br>
    Chu vi hình chữ nhật là : ` + chuVi

}
document.getElementById("btnBai4").onclick = tinhHCN;