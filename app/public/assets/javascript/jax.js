$.ajax({
    url: '/results',
    method: 'GET'
}).then(function(data) {
    var recentUser = data[data.length - 1].answers.split(',');
    var matchedUsers;
    var bestDifference = 100;

    // running for every other user 
    for (var i = 0; i < data.length - 1; i++) {
        var totalDifference = 0;
        // calculating total difference
        for (var j = 0; j < 10; j++) {
            totalDifference += data[i].answers.split(',')[j] - recentUser[j];
        }
        // updating mathed user if it's the lowest difference
        if (Math.abs(totalDifference) <= bestDifference) {
            bestDifference = Math.abs(totalDifference);
            matchedUsers = data[i].name;
        }
    }
    $('body').append(matchedUsers)
});

