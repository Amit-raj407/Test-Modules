const { exec } = require("child_process")

exec("speed-test -j", (err, stdout, stderr) => {
    if(err) {
        console.log(`Error Occured: ${err.message}`);
        return;
    }
    if(stderr) {
        console.log(`StdErr Occured: ${stderr.message}`);
        return;
    }
    console.log(`Output: ${stdout}`);
})