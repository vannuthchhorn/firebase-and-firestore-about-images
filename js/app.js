$(document).ready(function(){
    database.collection('Student').get().then((snapshot)=>{
        var result = "";
        snapshot.forEach(item => {
            result+=`
                <div class="card shadow-lg mt-4">
                    <div class="card-header">
                        <img src="${item.data().profile_images}" hieght:"50" width="50"
                        style="border-radius:50%">
                        ${item.data().name}
                        <button type="button" class="bg-danger float-right" onclick="deletePicture('${item.id}')">delete</button>
                    </div>
                    <div class="card-body">
                        <img src="${item.data().post_images}" class="img-fluid">
                    </div>
                </div>
            `;
        });
        $('#result').append(result);
    });
    $('button').on('click',function() {
        var name = $('#name').val();
        var profile = $('#profile').val();
        var post = $('#post').val();

        database.collection('Student').add({
            name:name,
            profile_images:profile,
            post_images:post,
        });
    });
});
function deletePicture(pId){
    database.collection('Student').doc(pId).delete();
}
