window.onload = function(){
    if (document.getElementById("pull-request-header")){
        // Current location is something like:
        // https://bitbucket.org/galaxy/galaxy-central/pull-request/273/initial-data-libraries/diff
        // And the api download link is:
        // https://bitbucket.org/api/2.0/repositories/galaxy/galaxy-central/pullrequests/273/diff
        var urlparts = document.location.href.split('/');
        var diffurl = [document.location.origin, 'api', '2.0', 'repositories',
            urlparts[3], urlparts[4],'pullrequests',urlparts[6],'diff'].join('/');
        //$('#pull-request-diff-header .main dl').append('<div class="clearfix author"><dt>Diff</dt><dd>Apply this unified <a href="'+diffurl+'">diff</a> for testing.</dd>');
        //Jquery was overkill
        var newdiv = document.createElement('div');
        newdiv.className = "clearfix author"; //Not actually an author line
        newdiv.innerHTML = '<dt>Diff</dt><dd>Apply this unified <a href="'+diffurl+'">diff</a> for testing.</dd>';
        document.getElementById("pull-request-diff-header").getElementsByTagName("dl")[0].appendChild(newdiv);
    }
};
