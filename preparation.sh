#!/bin/bash

gcat /dev/zero | gtr '\000' '1' | gdd of=1.txt bs=1M count=1 iflag=fullblock
gcat /dev/zero | gtr '\000' '2' | gdd of=2.txt bs=512K count=1 iflag=fullblock
gcat /dev/zero | gtr '\000' '3' | gdd of=3.txt bs=256K count=1 iflag=fullblock

gsed --in-place --expression='s/^111111/2.txt,/' 1.txt
gsed --in-place --expression='s/^222222/3.txt,/' 2.txt
