fetch("works.csv")
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {

        var rows = data.trim().split("\n");

        var headers = rows[0].split(",");

        var works = rows.slice(1).map(function(row) {

            var values = row.split(",");

            var work = {};

            headers.forEach(function(header, index) {
                work[header] = values[index];
            });

            return work;
        });

        var grid = document.getElementById("works-grid");

        works.forEach(function(work) {

            var card = document.createElement("article");

            card.className = "work-card";

            card.innerHTML =
                '<a href="' + work.link + '">' +
                     '<img src="' + work.image + '" alt="' + work.title + '">' +
                     '<h4>' + work.title + '</h4>' +
                     '<p>' + work.description + '</p>' +
                '</a>';

            grid.appendChild(card);
        });
    })
