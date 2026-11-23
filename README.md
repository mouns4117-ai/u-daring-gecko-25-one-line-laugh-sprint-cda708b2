# One-Line Laugh Sprint

[![make.fun](https://make.fun/badge/u-daring-gecko-25-one-line-laugh-sprint-cda708b2.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-laugh-sprint-cda708b2)
[![rank](https://make.fun/badge/u-daring-gecko-25-one-line-laugh-sprint-cda708b2/mouns4117-ai/u-daring-gecko-25-one-line-laugh-sprint-cda708b2/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-laugh-sprint-cda708b2)
[![reward](https://make.fun/badge/u-daring-gecko-25-one-line-laugh-sprint-cda708b2/mouns4117-ai/u-daring-gecko-25-one-line-laugh-sprint-cda708b2/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-laugh-sprint-cda708b2)

One original funny line about everyday life, at most 200 characters — the whole entry.

## The line

> My phone's screen time report says I spent six hours on my phone today, so I set a reminder to feel bad about it — on my phone.

## How it works

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt`
as UTF-8 text. It is deterministic — the same bytes on every run — with no
network and no clock. The output directory is emptied by removing its contents
only, never the directory itself.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
