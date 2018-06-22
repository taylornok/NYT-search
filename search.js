$("submit-button").on("click", function() {
    var queryURL =  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q= " + search + "?page=" + retrieve + "?begin_date" + startYear + "?end_date=" + endYear +  "&api-key=e0f435fd28394b8db878231e2b498d94";

    var search = $('#search').val();
    var retrieve = $('#records').val();
    var startYear = $('#startYr').val();
    var endYear = $('endYr').val();

    $.ajax({
      url: queryURL,
      method: "GET"
    })
        .then(function(response) {
            var results = response.data;

        });
});