// var url = "http://localhost:8085/api/users";
var url = "http://35.223.20.167:8115/api/users";

function postUser() {
    console.log(url);

    var myName = $('#name').val();
    var myEmail = $('#email').val();
    var myAge = $('#age').val();
    var myComments = $('#comments').val();

    var myuser = {
        names: myName,
        email: myEmail,
        age: myAge,
        comments: myComments
    };

    console.log(myuser);

    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data) {
            console.log(data);
            $('#resultado').html(JSON.stringify(data.user));
        },
        data: JSON.stringify(myuser)
    });
}

function getUsers() {
    console.log(url);

    $.getJSON(url,
        function(json){
            console.log(json);

            var arrUsers = json.users;

            var htmlTableUsers = '<table border=1>';

            htmlTableUsers += `<tr>
                <th>ID</th>
                <th>NAMES</th>
                <th>EMAIL</th>
                <th>AGE</th>
                <th>COMMENTS</th>
            </tr>`

            arrUsers.forEach(function(item) {
                console.log(item);
                htmlTableUsers += '<tr>' + 
                '<td>' + item.id + '</td>' +
                '<td>' + item.names + '</td>' +
                '<td>' + item.email + '</td>' +
                '<td>' + item.age + '</td>' +
                '<td>' + item.comments + '</td>' +
                '</tr>';
                
            });

            htmlTableUsers += '</table>';

            $('#resultado').html(htmlTableUsers);
        }
    );
}