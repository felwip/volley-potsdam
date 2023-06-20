import {Scheduler, View} from "devextreme-react/scheduler";
import {appointments} from "../data/data";

export default function ExtremeScheduler() {
  return (
    <Scheduler
      id="scheduler"
      timeZone="Europe/Berlin"
      // adaptivityEnabled={true}
      dataSource={appointments}
      textExpr="title"
      allDayExpr="allDay"
      recurrenceRuleExpr="recurrence"
      defaultCurrentView="week"
    >
      <View type="day" startDayHour={10} endDayHour={22} />
      <View type="week" startDayHour={10} endDayHour={22} />
    </Scheduler>
  );
}
