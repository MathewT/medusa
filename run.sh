#!/bin/bash

docker run -ti -v $HOME/.aws:/root/.aws -v $HOME/.ssh:/root/.ssh  -v "$(pwd)"/src:/usr/src/app/src -p "8585:8585"  mthomas/medusa
