import {CellInput} from "./input";
import {courtList, newDayList} from "../data/tableData";

// Component that renders a table from the WeekDayList and CourtList components that provides Input fields for each cell
export function Table() {
  return (
    <table className="p-2 table-auto border border-collapse border-slate-200">
      <thead className="border border-collapse">
        <WeekDayList />
        <CourtsPerWeekday />
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td>
            <CellInput />
          </td>
        </tr>
        <tr>
          <td>
            <CellInput />
          </td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  );
}

// Component that renders images from the courtList array
export function CourtImages() {
  const images = courtList.map((court, index) => (
    <div key={index} className="flex-auto m-2">
      <img src={court.imgSrc} alt={court.name} />
    </div>
  ));
  return <div className="flex">{images}</div>;
}

// Component that renders a table head for each day of the week from the weekDays array and spans the courtList array
export function WeekDayList() {
  const days = newDayList.map((day, index) => (
    <th
      key={index}
      colSpan={courtList.length}
      className="border-x border-slate-200 px-2"
    >
      {day.name}, {day.date}
    </th>
  ));
  return <tr>{days}</tr>;
}

// Component that renders a table head for each court from the courtList array
export function CourtList() {
  const courts = courtList.map((court, index) => (
    <th key={index} className="border border-slate-200">
      {court.name}: {court.description}
    </th>
  ));
  return <tr>{courts}</tr>;
}

function CourtsPerWeekday() {
  const courts = newDayList.map((day, index) => <CourtList key={index} />);
  return <>{courts}</>;
}

function CourtInput(court: number, day: number) {
  return (
    <td>
      <CellInput />
    </td>
  );
}
