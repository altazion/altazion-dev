document.getElementById("searchBox").oninput = function(ev) {
    
    var ctn = ev.target.value;
    if(ctn.length==0) {

    }
    else {
        var tofetch = "https://aidesimplemente.search.windows.net/indexes/aide-altazion/docs?api-version=2019-05-06&$filter=type/any(t : t eq 'dev')&query=";
        tofetch += ctn;
        fetch({ url : tofetch, headers:[ {'api-key':'49367045F36D07C494C5589504195957'}]}).then(function(data){
            console.log(data);
        });
    }

}