#!/bin/sh
# Script to watch files for changes, then compile

# RESOURCES ########################
declare FG_WHITE="\033[1;37m"
declare FG_GREEN="\033[1;32m"
declare FG_BLUE="\033[1;36m"
declare FG_PINK="\033[1;35m"
declare NOCOLOR="\033[0m"

declare PROMPT="${FG_BLUE}>>${NOCOLOR}"

# GLOBAL VARIABLES #################

declare DIRECTORY=../script/source

declare SLEEP=0

declare FINAL_COMMAND=compile.sh

# WATCH ############################

while true
do
	fswatch -o $DIRECTORY | echo "${FG_PINK}( •̀_•́) ${FG_GREEN}- - - - - - > ${FG_BLUE}[${DIRECTORY}]${NOCOLOR}\n"

	sleep $SLEEP

	sh $FINAL_COMMAND
done
