#!/bin/sh
# Script to watch files for changes

# RESOURCES ########################

declare FG_RED="\033[1;31m"
declare FG_GREEN="\033[1;32m"
declare FG_PINK="\033[1;35m"
declare FG_BLUE="\033[1;36m"
declare FG_WHITE="\033[1;37m"

declare FG_YELLOW="\033[1;33m"
declare NOCOLOR="\033[0m"

declare PROMPT="${FG_BLUE}>>${NOCOLOR}"

# GLOBAL VARIABLES #################

declare VERSION

function get_version()
{
    VERSION=`head -n4 ../docs/CHANGELOG.md | awk '/## \[/{print $2}'`

    LENGTH=${#VERSION}

    LENGTH=$(($LENGTH-2))

    VERSION=${VERSION:1:$LENGTH}
}

get_version

declare NO_ERRORS=true

declare DATE=$(date +"%m-%d-%y")
declare TIME=$(date +"%r")

declare OUTPUT_DIRECTORY=../script

declare OUTPUT_FILE=mousemove-v${VERSION}.js
declare OUTPUT_API=../docs/API.md
declare OUTPUT_JSDOC=../docs/JSDoc

declare OUTPUT="${OUTPUT_DIRECTORY}/${OUTPUT_FILE}"


declare INPUT_FOLDER=../script/source

declare MASTER_FILE=${INPUT_FOLDER}/classes/MouseMove.js

declare FILE_REGEX="\.js"


declare FILES

declare FILES_HEAD=()

declare FOLDERS=(
    "${INPUT_FOLDER}/classes/Subject"
    "${INPUT_FOLDER}/classes/Object"
)

declare FILES_FOOT=(
    "${INPUT_FOLDER}/classes/MouseMove.js"
)

# GLOBAL FUNCTIONS #################

function update_main_file()
{
    sed -r -i '' -e 's/Version:.+/Version:   '"'${VERSION}'"',/' ${MASTER_FILE}
    sed -r -i '' -e 's/Updated:.+/Updated:   '"'$(date +"%b, %d %Y")'"',/' ${MASTER_FILE}
    sed -r -i '' -e 's/mousemove-v.+/mousemove-v'${VERSION}'.js"><\/script>/' ../index.html
}

function search_folder()
{
    for ENTRY in "${1}"/*
    do
        [[ $ENTRY =~ $FILE_REGEX ]] && FILES+="${ENTRY} "
    done
}

function insert_file()
{
    echo " " | cat - $1 >> $OUTPUT
}

function render_header()
{
    # USE="use strict;";

    HEADER="// @program: \t\tMouse Move \\n"
    HEADER+="// @brief: \t\t\tAutomated mouse cursor for web presentation \\n"
    HEADER+="// @author: \t\tJustin D. Byrne \\n"
    HEADER+="// @email: \t\t\tjustin@byrne-systems.com \\n"
    HEADER+="// @version: \t\t${VERSION} \\n"
    HEADER+="// @license: \t\tGPL-2.0\\n\\n"
    HEADER+="\"use strict\";"

    echo $HEADER > $OUTPUT
}

function flash_screen()
{
    printf '\e[?5h'  # Turn on reverse video

    sleep 0.15

    printf '\e[?5l'  # Turn on normal video
}

function compile_output()
{
    update_main_file

    render_header

    for FILE in ${FILES_HEAD[@]}                                # HEAD
    do
        insert_file $FILE
    done

    for FILE in ${FILES[@]}                                     # BODY
    do
        insert_file $FILE
    done

    for FILE in ${FILES_FOOT[@]}                                # FOOT
    do
        insert_file $FILE
    done

    echo "${PROMPT} ${FG_PINK}MouseMove Compiling Complete \t${FG_BLUE}[${OUTPUT}]${NOCOLOR}\n"

    afplay audio/complete.mp3
}

function compile_readme()
{
    if [ -e "readme.sh" ]
    then
        $(sh readme.sh)

        echo "${PROMPT} ${FG_PINK}Read Me Complete \t\t\t${FG_BLUE}[../README.md]${NOCOLOR}\n"
    fi
}

function compile_api()
{
    if command -v jsdoc2md
    then
        if $(jsdoc2md ${OUTPUT} > $OUTPUT_API)
            then echo "\n${PROMPT} ${FG_PINK}API Complete \t\t\t${FG_BLUE}[${OUTPUT_API}]${NOCOLOR}\n"
        else
            NO_ERRORS=false
        fi
    fi
}

function compile_jsdoc()
{
    $(rm -r $OUTPUT_JSDOC)

    if command -v jsdoc
    then
        if (jsdoc --private $OUTPUT -d $OUTPUT_JSDOC)
            then echo "\n${PROMPT} ${FG_PINK}JSDoc Complete \t\t\t${FG_BLUE}[${OUTPUT_JSDOC}]${NOCOLOR}\n"
        else
            NO_ERRORS=false
        fi
    fi
}

function complete()
{
    echo "${FG_YELLOW}ᕕ( ᐛ )ᕗ${NOCOLOR}\t\t\t\t\t${PROMPT} Complete - ${FG_WHITE}${DATE} ${NOCOLOR}@ ${FG_WHITE}${TIME}${NOCOLOR}\n"

    if $NO_ERRORS
    then
        afplay audio/success.mp3
    else
        afplay audio/failure.mp3

        flash_screen
    fi
}

# LOOP THROUGH FOLDERS #############

for FOLDER in ${FOLDERS[@]}
do
    search_folder $FOLDER
done

# COMPILE ##########################

clear

compile_output

compile_readme

compile_api

compile_jsdoc

complete
