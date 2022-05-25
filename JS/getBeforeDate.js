//* 快速選擇日期 start //

$(":submit").click(function getBeforeDate() {

    let currentDate = new Date();

    let before7 = currentDate.setDate(currentDate.getDate() - 7); //獲取七天前的時間戳
    let date7 = new Date(before7); //毫秒轉日期

    $("#start").val(date7.toLocaleString('zh', { hour12: false }).replace(/\//g, '-')); // 設定起始日期及調整欄位格式
    $("#end").val(new Date().toLocaleString('zh', { hour12: false }).replace(/\//g, '-')); // 設定結束日期及調整欄位格式

});

//* 快速選擇日期 end //