export const getDaysOfMonth = (year: number, month:number): Array<Array<string>> => {
    const daysInMonth = new Date(year, month, 0).getDate();
  
    const matrix = [];
    let week = [];
  
    // Fill in the matrix with the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day.toString());
      if (week.length === 7) {
        matrix.push(week);
        week = [];
      }
    }
  
    // Fill in empty cells in the last row, if necessary
    while (week.length < 7) {
      week.push('');
    }
    matrix.push(week);
  
  
    return matrix;
  }
  