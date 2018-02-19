$(document).ready(function () {
    let ship = 0;
    let shoot = 0;



    // this click event get value from the input and then check squars for ships and change them marks

    $('.btn').click(function () {

        $('.form-control').focus();


        let input = $('.form-control');

        //make array from input value

        let arr = Array.from(input.val().toUpperCase());

        // set values from the array to row and col

        if (arr.length === 3) {
            col = 10;
            row = arr[0].charCodeAt(0);
        } else {
            col = Number(arr[1]);
            row = arr[0].charCodeAt(0);
        }

        let choosenSuare = `${row}-${col}`;

        // cheks for ships and make change in the squares
        if ($(`.table .${choosenSuare}`).hasClass('struck-ship')) {
            ship++;
        }
        if ($(`.table .${choosenSuare}`).hasClass('ship')) {
            shoot++;
            ship--;
            $(`.table .${choosenSuare}`).attr('id', 'choosed');
            document.getElementById("choosed").innerHTML = 'X';
            $(`.table .${choosenSuare}`).addClass('struck-ship');
            $(`.table .${choosenSuare}`).removeAttr('id');
            console.log(ship);
        } else {
            shoot++;
            $(`.table .${choosenSuare}`).attr('id', 'choosed');
            document.getElementById("choosed").innerHTML = '-';
            $(`.table .${choosenSuare}`).removeAttr('id');
        }

        // clear input

        $('.form-control').val('');

        //print final result after battle is finished

        if (ship === 0) {
            alert(`You finish battle with ${shoot} shoot`)
        }
    });

    // this function make battleships and destroyers in the area randomly

    function randomiseShipsBuldingInTheArea() {
        let counter = 0;
        let rows = '0ABCDEFGHIF';
        let functions = [];
        let shipSquares = 0;
        let col = 0;
        let row = 0;

        //make ships to the left,right,up and down it depends of square position and type of ships

        let buildBattleshipToRight = function buildBattleshipToRight(row, col) {
            counter = col;
            for (i = counter; i <= counter + 4; i++) {
                let startBuildingShip = `${row}-${col}`;

                //it check from ships and make them if is possible
                // if square is clear make ships

                if ((!$(`.${startBuildingShip}`).hasClass('ship'))) {
                    $(`.${startBuildingShip}`).addClass('ship');
                    shipSquares++;
                    ship++
                } else {//delete ships if square is already occupied
                    for (k = shipSquares; k >= 0; k--) {
                        col--;
                        startBuildingShip = `${row}-${col}`;
                        $(`.${startBuildingShip}`).removeClass('ship');
                    }
                    shipSquares = 0;

                    //if square is occupied and battle ship remove this make another ship randomly

                    let col = Math.floor((Math.random() * 10) + 1);
                    let rowLetter = rows[Math.floor((Math.random() * 10) + 1)];
                    let row = rowLetter.charCodeAt(0);
                }
                col++;
            }
        };
        let buildDestroyersToRight = function buildDestroyersToRight(row, col) {
            counter = col;
            for (i = counter; i <= counter + 3; i++) {
                let startBuildingShip = `${row}-${col}`;
                //it cheks from ships...
                //make ships
                if (!$(`.${startBuildingShip}`).hasClass('ship')) {
                    $(`.${startBuildingShip}`).addClass('ship');
                    shipSquares++;
                    ship++;
                } else {//delete ships if square is already occupied
                    for (k = shipSquares; k >= 0; k--) {
                        startBuildingShip = `${row}-${col}`;
                        $(`.${startBuildingShip}`).removeClass('ship');
                        col--;
                    }
                    shipSquares = 0;
                    //if square is occured and battle ship remove this make another ship randomly
                    let col = Math.floor((Math.random() * 10) + 1);
                    let rowLetter = rows[Math.floor((Math.random() * 10) + 1)];
                    let row = rowLetter.charCodeAt(0);
                }
                col++;
            }
        };
        let buildBattleshipToLeft = function buildBattleshipToLeft(row, col) {
            counter = col;
            for (i = counter; i <= counter - 4; i--) {
                let startBuildingShip = `${row}-${col}`;
                //it cheks from ships...
                //make ships
                if ((!$(`.${startBuildingShip}`).hasClass('ship'))) {
                    $(`.${startBuildingShip}`).addClass('ship');
                    shipSquares++;
                    ship++;
                } else {//delete ships if square is already occupied
                    for (k = shipSquares; k >= 0; k--) {
                        startBuildingShip = `${row}-${col}`;
                        $(`.${startBuildingShip}`).removeClass('ship');
                        col++;
                    }
                    shipSquares = 0;
                    //if square is occured and battle ship remove this make another ship randomly
                    let col = Math.floor((Math.random() * 10) + 1);
                    let rowLetter = rows[Math.floor((Math.random() * 10) + 1)];
                    let row = rowLetter.charCodeAt(0);
                }
                col--;
            }
        };
        let buildDestroyersToLeft = function buildDestroyersToLeft(row, col) {
            counter = col;
            for (i = counter; i >= counter - 3; i--) {
                let startBuildingShip = `${row}-${col}`;
                //it cheks from ships...
                //make ships
                if (!$(`.${startBuildingShip}`).hasClass('ship')) {
                    $(`.${startBuildingShip}`).addClass('ship');
                    shipSquares++;
                    ship++;
                } else {//delete ships if square is already occupied
                    for (k = shipSquares; k >= 0; k--) {
                        startBuildingShip = `${row}-${col}`;
                        $(`.${startBuildingShip}`).removeClass('ship');
                        col++;
                    }
                    shipSquares = 0;
                    //if square is occured and battle ship remove this make another ship randomly
                    let col = Math.floor((Math.random() * 10) + 1);
                    let rowLetter = rows[Math.floor((Math.random() * 10) + 1)];
                    let row = rowLetter.charCodeAt(0);
                }
                col--;
            }
        };
        let buildBattleshipToUp = function buildBattleshipToUp(row, col) {
            counter = 'row'.charCodeAt(0);
            for (i = counter; i >= counter - 4; i--) {
                let startBuildingShip = `${row}-${col}`;
                //it cheks from ships...
                //make ships
                if ((!$(`.${startBuildingShip}`).hasClass('ship'))) {
                    $(`.${startBuildingShip}`).addClass('ship');
                    shipSquares++;
                    ship++;
                } else {//delete ships if square is already occupied
                    for (k = shipSquares; k >= 0; k--) {
                        startBuildingShip = `${row}-${col}`;
                        $(`.${startBuildingShip}`).removeClass('ship');
                        row++;
                    }
                    shipSquares = 0;
                    //if square is occured and battle ship remove this make another ship randomly
                    let col = Math.floor((Math.random() * 10) + 1);
                    let rowLetter = rows[Math.floor((Math.random() * 10) + 1)];
                    let row = rowLetter.charCodeAt(0);
                }
                row--;
            }
        };
        let buildDestroyersToUp = function buildDestroyersToUp(row, col) {
            counter = 'row'.charCodeAt(0);
            for (i = counter; i >= counter - 3; i--) {
                let startBuildingShip = `${row}-${col}`;
                //it cheks from ships...
                //make ships
                if (!$(`.${startBuildingShip}`).hasClass('ship')) {
                    $(`.${startBuildingShip}`).addClass('ship');
                    shipSquares++;
                    ship++;
                } else {//delete ships if square is already occupied
                    for (k = shipSquares; k >= 0; k--) {
                        startBuildingShip = `${row}-${col}`;
                        $(`.${startBuildingShip}`).removeClass('ship');
                        row++;
                    }
                    shipSquares = 0;
                    //if square is occured and battle ship remove this make another ship randomly
                    let col = Math.floor((Math.random() * 10) + 1);
                    let rowLetter = rows[Math.floor((Math.random() * 10) + 1)];
                    let row = rowLetter.charCodeAt(0);
                }
                row--;
            }
        };
        let buildBattleshipToDown = function buildBattleshipToDown(row, col) {
            counter = 'row'.charCodeAt(0);
            for (i = counter; i <= counter + 4; i++) {
                let startBuildingShip = `${row}-${col}`;
                //it cheks from ships...
                //make ships
                if ((!$(`.${startBuildingShip}`).hasClass('ship'))) {
                    $(`.${startBuildingShip}`).addClass('ship');
                    shipSquares++;
                    ship++;
                } else {//delete ships if square is already occupied
                    for (k = shipSquares; k >= 0; k--) {
                        startBuildingShip = `${row}-${col}`;
                        $(`.${startBuildingShip}`).removeClass('ship');
                        row--;
                    }
                    shipSquares = 0;
                    //if square is occured and battle ship remove this make another ship randomly
                    let col = Math.floor((Math.random() * 10) + 1);
                    let rowLetter = rows[Math.floor((Math.random() * 10) + 1)];
                    let row = rowLetter.charCodeAt(0);
                }
                row++;
            }
        };
        let buildDestroyersToDown = function buildDestroyersToDown(row, col) {
            counter = 'row'.charCodeAt(0);
            for (i = counter; i <= counter + 3; i++) {
                let startBuildingShip = `${row}-${col}`;
                //it cheks from ships...
                //make ships
                if (!$(`.${startBuildingShip}`).hasClass('ship')) {
                    $(`.${startBuildingShip}`).addClass('ship');
                    shipSquares++;
                    ship++;
                } else {//delete ships if square is already occupied
                    for (k = shipSquares; k >= 0; k--) {
                        startBuildingShip = `${row}-${col}`;
                        $(`.${startBuildingShip}`).removeClass('ship');
                        row--;
                    }
                    shipSquares = 0;
                    //if square is occured and battle ship remove this make another ship randomly
                    let col = Math.floor((Math.random() * 10) + 1);
                    let rowLetter = rows[Math.floor((Math.random() * 10) + 1)];
                    let row = rowLetter.charCodeAt(0);
                }
                row++;
            }
        };

        // this loop build a ships where it is posible

        for (let j = 1; j <= 5; j++) {
            //starting point for build a ship
            let col = Math.floor((Math.random() * 10) + 1);
            let rowLetter = rows[Math.floor((Math.random() * 10) + 1)];
            let row = rowLetter.charCodeAt(0);

            //select possible function to build a ship and push them in array

            if (col <= 6) {
                functions.push(buildBattleshipToRight);
            }
            if (col <= 7) {
                functions.push(buildDestroyersToRight);
            }
            if (col >= 5) {
                functions.push(buildBattleshipToLeft);
            }
            if (col >= 4) {
                functions.push(buildDestroyersToLeft);
            }
            if (row >= 69) {
                functions.push(buildBattleshipToUp)
            }
            if (row >= 68) {
                functions.push(buildDestroyersToUp)
            }
            if (row <= 70) {
                functions.push(buildBattleshipToDown)
            }
            if (row <= 71) {
                functions.push(buildDestroyersToDown)
            }
            let len = functions.length;

            //its call function from array randomly
            functions[Math.floor((Math.random() * len))](row, col);
            functions.length = 0;
            console.log(ship);
        }
    }

    randomiseShipsBuldingInTheArea();

});






