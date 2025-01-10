// console.log("JS");

// // 測試Jquery是否成功
// $("h1").hide();

// 1.
$("#hide-1").click(()=> {
    $("#h3-1").hide();
});
$("#show-1").click(()=> {
    $("#h3-1").show();
});
$("#toggle-1").click(()=> {
    $("#h3-1").toggle();
});

// 2.函式參數
$("#hide-2").click(()=> {
    $("#h3-2").hide(1000);
});

$("#show-2").click(()=> {
    $("#h3-2").show(1000, ()=>{
        $("#h3-2").text("我是標題三顯示");
    });
});