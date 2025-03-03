import { Flex } from "@styled-system/jsx";
import { useState } from "react";
import TimePicker from "wowds-ui/TimePicker";

interface Time {
  isAM: boolean;
  hour: number;
  minute: number;
}

const StudyTimePick = () => {
  const [start, setStart] = useState<Time>();
  const [end, setEnd] = useState<Time>();
  return (
    <Flex align="center" gap="lg">
      <TimePicker selectedTime={start} setSelectedTime={setStart} />
      <span>~</span>
      <TimePicker selectedTime={end} setSelectedTime={setEnd} />
    </Flex>
  );
};

export default StudyTimePick;
