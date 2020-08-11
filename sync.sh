#!/usr/bin/env bash

ROOT='./.sources';
if [ ! -d $ROOT ]; then
  mkdir -p $ROOT;
fi;

array=(
  "git@github.com:catpea/poetry.git"
  "git@github.com:catpea/research.git"
  "git@github.com:catpea/warrior.git"
)

for ix in ${!array[*]}
do
  echo "--- $(expr ${ix} + 1)/${#array[*]})";
  url=${array[$ix]};
  name=$(basename -s .git $url)
  target="${ROOT}/${name}";
  if [ -d $target ]; then
    echo Repository $target does exist entering $target for pulling;
    cd $target;
    git pull;
    cd -
  else
    echo Repository $target does not exist entering $ROOT for cloning;
    cd $ROOT;
    git clone --depth 1 "${url}" "${name}";
    cd -
  fi
done
