import {courtList} from "../data/tableData";

export function CourtList() {
  const listItems = courtList.map((court) => (
    <li key={court.id}>
      <img src={court.imgSrc} alt={court.name} />
      <p>
        <b>{court.name}</b>
        Ausstattung: <p>{court.equipment}</p>
        Zielgruppe: <p>{court.playerLevel}</p>
        Drumherum: <p>{court.facilities}</p>
      </p>
    </li>
  ));

  return <ul>{listItems}</ul>;
}
