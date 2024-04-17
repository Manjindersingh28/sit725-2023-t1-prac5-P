const clickMeButton = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.subTitle = $('#subTitle').val();
    formData.path = $('#path').val();
    formData.description = $('#description').val();

    console.log(formData);
    // postCat(formData);
}


$(document).ready(function () {
    // $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMeButton(); 
    })
    getcards();
    // $('#modal1').modal();
    });

const addCards = (items) => {
    items.forEach((item) => {
        let itemToAppend =
            '<div class="col s12 m2">' +
            '<div class="card large">' +
                '<div class="card-image">' +
                    '<img src="' +item.link + '">' +
                '</div>' +
                '<div class="card-content">' +
                    '<span class="card-title">' + item.title + '</span>' +
                    '<p>' + item.description + '</p>' +
                '</div>' +
            '</div>' +
        '</div>';
        $("#card-section").append(itemToAppend);
    });
};

const getcards = () => {
    $.get('/api/cat', (response) => {
        if (response.statusCode == 200) {
            addCards(response.data);
        }
    });
};

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    var clickMeButton = document.getElementById('clickMeButton');
    clickMeButton.addEventListener('click', function () {
        var modalInstance = M.Modal.getInstance(document.getElementById('modal1'));
        modalInstance.open();
    });
    var formSubmitButton = document.getElementById('formSubmit');
    formSubmitButton.addEventListener('click', function () {
        var title = document.getElementById('title').value;
        var subTitle = document.getElementById('subTitle').value;
        var path = document.getElementById('path').value;
        var description = document.getElementById('description').value;
        $.post('/api/cat', {title, subTitle, link: path, description});
        var modalInstance = M.Modal.getInstance(document.getElementById('modal1'));
        modalInstance.close();
    });
});