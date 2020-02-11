function printMM(N) {
  let oddNumberMinus = 1;
  let oddNumberStar = N * 2 - 1;

  for (let i = 0; i <= N; i++) {
    if (i < N / 2) {
      let row = printFirstHalf(N, i);
      row += printFirstHalf(N, i);
      console.log(row);
    } else if (i > N / 2 && i < N) {
      let row = printSecondHalf(N, i, oddNumberMinus, oddNumberStar);
      row += printSecondHalf(N, i, oddNumberMinus, oddNumberStar);
      console.log(row);
      oddNumberMinus += 2;
      oddNumberStar -= 2;
    } else {
      let row = printLastRow(N);
      row += printLastRow(N);
      console.log(row);
    }
  }
}

function printFirstHalf(N, i) {
  let row = '-'.repeat(N - i);
  row += '*'.repeat(N + 2 * i);
  row += '-'.repeat(N - 2 * i);
  row += '*'.repeat(N + 2 * i);
  row += '-'.repeat(N - i);
  return row;
}

function printSecondHalf(N, i, oddNumberMinus, oddNumberStar) {
  let row = '-'.repeat(N - i);
  row += '*'.repeat(N);
  row += '-'.repeat(oddNumberMinus);
  row += '*'.repeat(oddNumberStar);
  row += '-'.repeat(oddNumberMinus);
  row += '*'.repeat(N);
  row += '-'.repeat(N - i);
  return row;
}

function printLastRow(N) {
  let row = '*'.repeat(N);
  row += '-'.repeat(N);
  row += '*'.repeat(N);
  row += '-'.repeat(N);
  row += '*'.repeat(N);
  return row;
}

printMM(9);
