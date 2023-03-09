$(function(){


    $('#yuyanqianhuan').change(function () {
        var value = $(this).val();
        console.log(value);
        $.ajax({
            type:"post",
            data:'id='+value,
            url:"/index/api/index/",
            dataType:"json",
            success:function(data){
                location.reload();
            },
            error:function(jqXHR){

            }
        });
    });
});
