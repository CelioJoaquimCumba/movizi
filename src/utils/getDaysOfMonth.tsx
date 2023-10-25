export const getDaysOfMonth = (year:number, month:number):Array<Array<string>> => {
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const matrix: Array<Array<string>> = [];
  let day = 1;

  for (let week = 0; day <= daysInMonth; week++) {
    matrix[week] = [];
    for (let weekday = 0; weekday < 7; weekday++) {
      if (day <= daysInMonth) {
        matrix[week][weekday] = day.toString();
        day++;
      } else {
        matrix[week][weekday] = "";
      }
    }
  }

  return matrix;
  }
  