//* 快速選擇日期 start //

$("#buttonID").click(function getBeforeDate() {

    // 取得當前時間 //
    let currentDate = new Date();
    // console.log(currentDate); // Thu May 26 2022 10:16:17 GMT+0800 (台北標準時間)

    // 轉換成七天前的時間 //
    currentDate.setDate(currentDate.getDate() - 7);
    // console.log(currentDate); // Thu May 19 2022 10:16:17 GMT+0800 (台北標準時間)

    // 設定起始與結束日期,轉換日期格式為 yyyy/mm/dd hh:mm:ss //
    $("#startDateID").val(currentDate.toLocaleString('zh', { hour12: false }));
    $("#endDateID").val(new Date().toLocaleString('zh', { hour12: false }));

});

//* 快速選擇日期 end //