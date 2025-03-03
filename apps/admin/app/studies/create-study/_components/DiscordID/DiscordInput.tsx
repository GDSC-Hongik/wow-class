/* eslint-disable no-unused-vars */
import { Flex } from "@styled-system/jsx";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "wowds-ui/TextField";

const DiscordInput = () => {
  const { control } = useFormContext();

  return (
    <Flex alignItems="center" gap={36} width="100%">
      <Flex direction="column" width={358}>
        <Controller
          control={control}
          name="discordChannelId"
          render={({ field: { ref, ...field } }) => (
            <TextField
              {...field}
              label="디스코드 채널 ID"
              placeholder="ex) 0123456789"
            />
          )}
        />
      </Flex>
      <Flex direction="column" width={358}>
        <Controller
          control={control}
          name="discordRoleId"
          render={({ field: { ref, ...field } }) => (
            <TextField
              {...field}
              label="디스코드 역할 ID"
              placeholder="ex) 0123456789"
            />
          )}
        />{" "}
      </Flex>
    </Flex>
  );
};

export default DiscordInput;
