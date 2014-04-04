function getParam (key) {
     var q = location.search.substring(1);
     
     if(q===undefined || q === null) 
        return null;

    var v = q.split("&");
    var vn=[];

    for (var i = 0; i < v.length; i++) {
        vn=v[i].split('=');
        if(vn[0]===key) {
            return vn[1];
        }
    }
    return null;
 }
