/*
Tell Output:
    1. true && console.log("moo")          --- moo
    2. false && console.log("moo")         --- false therefore on screen no op
    3. true || console.log("ola amigo")    --- true therefore on screen no op
    4. false || console.log("suka blyat")  --- suka blyat
*/
true && console.log("moo");
false && console.log("moo moo");
true || console.log("ola amigo");
false || console.log("suka blyat");



