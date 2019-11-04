let APIURL = '';

switch(window.location.hostname) {

    case "localhost"  ||  "127.0.0.1":
        // local host name of API //
        APIURL = 'http://localhost:3000';
        break;
        //deployed version of react app//
    case 'wilc-sfv-client.herokuapp.com':
        // full URl if deployed API //
        APIURL = 'https://wilc-sfv.herokuapp.com'
}

export default APIURL;
