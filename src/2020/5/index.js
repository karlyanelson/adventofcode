import { puzzleInput } from "/input.js";

const formattedInput = puzzleInput.split("\n");

function findRow(string) {
  let rows = [];

  for (let i = 0; i < 128; i++) {
    rows.push(i);
  }

  string
    .substr(0, 7)
    .split("")
    .forEach(function (rowString) {
      if (rows.length === 1) {
        return rows;
      }

      if (rowString === "F") {
        rows = rows.splice(0, rows.length / 2);
      } else {
        rows = rows.splice(rows.length / 2);
      }
    });
  return rows[0];
}

function findSeat(string) {
  let seats = [0, 1, 2, 3, 4, 5, 6, 7];

  string
    .substr(7)
    .split("")
    .forEach(function (seatString) {
      if (seats.length === 1) {
        return seats;
      }
      if (seatString === "L") {
        seats = seats.splice(0, seats.length / 2);
      } else {
        seats = seats.splice(seats.length / 2);
      }
    });
  return seats[0];
}

function generateSeatID(row, seatNum) {
  return row * 8 + seatNum;
}

const seatIDs = formattedInput.map(function (item) {
  return generateSeatID(findRow(item), findSeat(item));
});

function part1() {
  const highest = seatIDs.reduce(function (prev, cur) {
    if (prev < cur) {
      return cur;
    } else {
      return prev;
    }
  }, 0);

  return highest;
}

function part2() {
  const takenSeats = formattedInput.map(function (item) {
    return {
      row: findRow(item),
      seat: findSeat(item),
    };
  });

  let possibleRowsNums = [];

  for (let i = 0; i < 128; i++) {
    possibleRowsNums.push(i);
  }

  let possibleSeatsNums = [0, 1, 2, 3, 4, 5, 6, 7];

  let allPossibleSeats = [];

  possibleRowsNums.forEach(function (row) {
    possibleSeatsNums.forEach(function (seat) {
      allPossibleSeats.push({
        row: row,
        seat: seat,
      });
    });
  });

  const availableSeats = allPossibleSeats.filter(function (seat) {
    function itMatches(item) {
      return item.row === seat.row && item.seat === seat.seat;
    }

    if (takenSeats.findIndex(itMatches) < 0) {
      return seat;
    }
  });

  const mySeat = availableSeats.filter(function (seat) {
    const thisSeatID = generateSeatID(seat.row, seat.seat);

    if (seat.row === 0 || seat.row === 127) {
      return;
    }

    if (seatIDs.includes(thisSeatID + 1) && seatIDs.includes(thisSeatID - 1)) {
      return seat;
    }
  });

  const mySeatID = generateSeatID(mySeat[0].row, mySeat[0].seat);

  return mySeatID;
}

const app = document.querySelector("#app");
app.textContent = `Part 1: ${part1()}, Part 2: ${part2()}`;
