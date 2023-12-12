function soNgto(num1,num2){
    let list =[];
    for (let i = num1 ; i<=num2; i++){
        let tem = true;
        for(let j = i-1 ; j>1 ;j--){
            if(i%j == 0){
                tem = false;
                break;
            } 
        }
        if(tem){
            list.push(i);
        }
    }
    return list;
}
function tongSoNgto(){
    const numA = parseInt(document.getElementById('soThuNhat').value);
    const numB = parseInt(document.getElementById('soThuHai').value);
    let sum = 0 ;
    if(numA > numB){
        document.getElementById("result").innerText = "Số b phải lớn hơn số a";
        return;
    }
    if(numA == 0 || numA == 1 || numB == 0 || numB == 1 ){
        document.getElementById("result").innerText ='';
        document.getElementById("soNguyenTo").innerText='Số a hoặc b không phải số nguyên tố';
        return;
    }
    let listsoNgto = soNgto(numA,numB);
    let listsoNgtoOutPut =listsoNgto.join(', ');
    document.getElementById("soNguyenTo").innerText=`Các số nguyên tố từ ${numA} đến ${numB} là: ${listsoNgtoOutPut}`; 
    for(i = 0; i<listsoNgto.length; i++){
            sum += listsoNgto[i];
    }
    document.getElementById("result").innerText = `Tổng số nguyên tố từ ${numA} tới ${numB} là : ${sum}`;
} 