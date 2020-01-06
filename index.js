const git = require("simple-git/promise");
const simpleGit = require("simple-git");

var git_url = "git@github.com:miyauci/simple-git-test.git";
var local_folder = "work";

async function g() {
  await git().clone(git_url, local_folder);
  writeFile("./work/test.txt", "testsfjsojff OK!");
  simpleGit(local_folder)
    .pull()
    .add("test.txt")
    .commit("test")
    .push(["-u", "origin", "master"]);
}

var fs = require("fs");

//ファイルの書き込み関数
function writeFile(path, data) {
  fs.writeFile(path, data, function(err) {
    if (err) {
    }
  });
}

//使用例

//   .then(e => {
//     console.log(e);
//   });

g();
