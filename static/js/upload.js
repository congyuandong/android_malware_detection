/**
 * Created by congyuandong on 16/3/5.
 */
$(document).ready(function() {

	var $choosebox = $('#choosebox');
	var $file = $('#file');
	var $imgform = $("#upload_apk");

	$choosebox.click(function() {
		$file.click();
	});

	$file.change(function() {
		$choosebox.val($file.val());
	});

	$('#upload').click(function() {
		$imgform.ajaxSubmit({
			url: $imgform.attr('action'),
			type: 'POST',
			success: function(res, status, xhr, $form) {
				$imgform.clearForm();
				if (res.code == 1) {
					location.reload(true);
				}else{
                    set_alert(res.msg,'alert-danger');
                }
			},
			error: function(res, status, e) {
				$imgform.clearForm();
			}
		})

	});
});

//设置警告框内容和样式
function set_alert(msg, type) {
	content = "<div class='alert " + type + " '><button type='button' class='close' data-dismiss='alert'>&times;</button> <strong>" + msg + "</strong></div>"
	$('#alert_field').html(content);
}