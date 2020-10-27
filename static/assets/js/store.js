toastr.options = { "closeButton": true };
var csrf_token = $("#crf").val();
$('#searchForm').submit(function(e){
    e.preventDefault();
    const search_file = $("#searchText").val();
        $.ajax({
            url: "/ajax/search/",
            type: 'POST',
            data: {csrfmiddlewaretoken:csrf_token,search_file},
            success: function (response) {
                if(response.error){
                     toastr.error(response.message, 'Sorry', {timeOut: 5000});
                }
                else{
                   $('#showDocuments').html(response);
                }
            }
        });

});
$('#form_upload').submit(function(e){
        e.preventDefault();
        const uploadedFile = $("input[name=document]")[0].files[0];
        var form = new FormData();
        form.append("uploadedFile", uploadedFile);
        form.append("csrfmiddlewaretoken", csrf_token );
        $.ajax({
            url: "/ajax/add_file/",
            type: 'POST',
            data: form,
            success: function (response) {
                if(response.error){
                    toastr.error(response.message, 'Error Alert!', {timeOut: 5000});
                }
                else{
                    $("input[name=document]").val('');
                    toastr.success(response.message, 'Success Alert', {timeOut: 2000});
                }
            },
            cache: false,
            contentType: false,
            processData: false
        });
    });