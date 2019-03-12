with import <nixpkgs> {};

let
  node = nodejs-10_x;
in

stdenv.mkDerivation rec {
  name = "api";
  env = buildEnv { name = name; paths = buildInputs; };
  buildInputs = [
    node yarn
  ];
  shellHook = ''
    export PATH="$PWD/node_modules/.bin/:$PATH"

    echo "=> npm install"
    if [ -f "package.json" ]
    then
      yarn install
    else
      yarn init
    fi

  '';
}
