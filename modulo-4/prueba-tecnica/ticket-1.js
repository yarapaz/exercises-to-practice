for (var j = 0; j < 10; j++) {
  cell = document.createElement('td');
  switch (j) {
    case 0:
      var date1 = events[i]['start'];
      var date2 = events[i]['end'];
      cell.appendChild(
        document.createTextNode(
          date1.getFullYear() +
            '/' +
            date1.getMonth() +
            '/' +
            date1.getDate() +
            ' ' +
            date1.getHours() +
            ':' +
            date1.getMinutes() +
            ' To ' +
            date2.getFullYear() +
            '/' +
            date2.getMonth() +
            '/' +
            date2.getDate() +
            ' ' +
            date2.getHours() +
            ':' +
            date2.getMinutes()
        )
      );
      break;
    case 1:
      cell.appendChild(document.createTextNode(events[i]['title']));
      break;
    case 2:
      cell.appendChild(document.createTextNode(events[i]['description']));
      break;
  }
  row.appendChild(cell);
}
