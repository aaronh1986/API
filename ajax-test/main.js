/*const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();


xhr.open("GET", baseURL + type + "/");
xhr.send();


xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        cb(JSON.parse(this.responseText));
    }
};

}
//getData(function(data) {
  //  console.log(data);
//})

function writeToDocument(type) {
    getData(type, function(){
        document.getElementById("data").innerHTML = data;
    });
}*/




/*const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}


function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key){
        tableHeaders.push(`<td>${key}</td>`);
    });

    return `<tr>${tableHeaders}</tr>`;
}


function writeToDocument(type) {
    var tableRows = [];

    var el = document.getElementById("data");
    el.innerHTML = "";
    getData(type, function(data) {
        data = data.results;   
       var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item){
         var dataRow = [];

         Object.keys(item).forEach(function(key) {
             var rowData = item[key].toString();
             var truncatedData = rowData.substring(0, 15);
             dataRow.push(`<td>${item[key]}</td>`);
         });
         tableRows.push(`<tr>${dataRow}</tr>`);
});    
        
      el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
    });
}*/


const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`)
    });

    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    var tableRows = [];
    var el = document.getElementById("data");

    getData(type, function(data) {
        var pagination;
     if (data.next || data.previous) {
         pagination = generatePaginationButtons(data.next, data.previous)
     }

        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            var dataRow = [];
            Object.keys(item).forEach(function(key) {
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15);
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`)
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
    });
}