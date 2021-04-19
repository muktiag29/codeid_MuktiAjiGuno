const exec = require("child_process").exec;
exec("cd orchestrator && nodemon app.js");
exec("cd services/registration && nodemon app.js");
exec("cd services/user && nodemon app.js");
