import {CellInput} from "./input";
import {courtList, newDayList, hourList} from "../data/tableData";

export function Table2() {
  return (
    <table>
      <caption>Delivery slots:</caption>
      <thead>
        <col />
        <colgroup span={courtList.length} />
        <colgroup span={courtList.length} />
        <colgroup span={courtList.length} />
        <colgroup span={courtList.length} />
        <colgroup span={courtList.length} />
        <colgroup span={courtList.length} />
        <colgroup span={courtList.length} />
        <tr>
          <td rowSpan={2}></td>
          <WeekDayList />
          {/* <th scope="col">Monday</th>
          <th scope="col">Tuesday</th>
          <th scope="col">Wednesday</th>
          <th scope="col">Thursday</th>
          <th scope="col">Friday</th> */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">09:00 – 10:00</th>
          <td>Closed</td>
          <td>Open</td>
          <td>Open</td>
          <td>Closed</td>
          <td>Closed</td>
        </tr>
        <tr>
          <th scope="row">10:00 – 11:00</th>
          <td>Open</td>
          <td>Open</td>
          <td>Closed</td>
          <td>Closed</td>
          <td>Closed</td>
        </tr>
        <tr>
          <th scope="row">11:00 – 12:00</th>
          <td>Closed</td>
          <td>Open</td>
          <td>Open</td>
          <td>Closed</td>
          <td>Closed</td>
        </tr>
        <tr>
          <th scope="row">12:00 – 13:00</th>
          <td>Open</td>
          <td>Open</td>
          <td>Closed</td>
          <td>Closed</td>
          <td>Closed</td>
        </tr>
        <tr>
          <th scope="row">13:00 – 14:00</th>
          <td>Closed</td>
          <td>Open</td>
          <td>Open</td>
          <td>Closed</td>
          <td>Closed</td>
        </tr>
        <tr>
          <th scope="row">14:00 – 15:00</th>
          <td>Open</td>
          <td>Open</td>
          <td>Closed</td>
          <td>Closed</td>
          <td>Closed</td>
        </tr>
        <tr>
          <th scope="row">15:00 – 16:00</th>
          <td>Closed</td>
          <td>Open</td>
          <td>Open</td>
          <td>Closed</td>
          <td>Closed</td>
        </tr>
        <tr>
          <th scope="row">16:00 – 17:00</th>
          <td>Open</td>
          <td>Open</td>
          <td>Closed</td>
          <td>Closed</td>
          <td>Closed</td>
        </tr>
      </tbody>
    </table>
  );
}

// Component that renders a table head for each day of the week from the weekDays array and spans the courtList array
function WeekDayList() {
  const days = newDayList.map((day, index) => (
    <th
      key={index}
      colSpan={courtList.length}
      scope="col"
      className="border-x border-slate-200 px-2"
    >
      {day.name}, {day.date}
    </th>
  ));
  return <>{days}</>;
}

function TimeSlots() {
  const hours = hourList.map((entry, index) => (
    <th key={index} scope="row">
      {entry.time}
    </th>
  ));
  return <>{hours}</>;
}
