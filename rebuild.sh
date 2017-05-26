#!/bin/bash
LDFLAGS=-L/usr/local/opt/openssl/lib CPPFLAGS=-I/usr/local/opt/openssl/include ./node_modules/.bin/electron-rebuild && \
    LDFLAGS=-L/usr/local/opt/openssl/lib CPPFLAGS=-I/usr/local/opt/openssl/include HOME=~/.electron-gyp node-pre-gyp rebuild --target=1.6.8 --arch=x64 --dist-url=https://atom.io/download/atom-shell
