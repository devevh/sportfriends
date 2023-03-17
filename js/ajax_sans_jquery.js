<form id="uploadForm" onsubmit="return false">
	<input type="file">
	<input type="text" name="meetingType" value="CA">
	<input type="date" name="meetingDate" value="2020-03-20">
	<button onclick="uploadFile('uploadForm')">Upload</button>
</form>
<script>
function uploadFile(formID) {
	var form = document.getElementById(formID);
	var filenode = form.querySelector('[type="file"]');
	var fileObject = filenode.files[0];
	var meetingType = form.querySelector('[name="meetingType"]');
	var meetingDate = form.querySelector('[name="meetingDate"]');
	var formData = new FormData();
	formData.append('file', fileObject);
	formData.append('meetingType', meetingType.value);
	formData.append('date', meetingDate.value);
	console.log(formData);
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			alert(this.responseText);
			//traitement js du retour
			return;
		}
	}
	xhr.open('post', 'upload1.php');
	xhr.send(formData);
}
</script>