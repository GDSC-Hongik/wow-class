"use client";
import { Flex } from "@styled-system/jsx";
import { FormProvider, useForm } from "react-hook-form";
import Button from "wowds-ui/Button";
const CreateStudyDetailInfoPage = () => {
  const methods = useForm();

  const onSubmit = async (data: CreateStudyApiRequestDto) => {
    createStudyApi.postCreateStudy(data);
  };

  return (
    <FormProvider {...methods}>
      <Flex
        direction="column"
        height="100%"
        justifyContent="flex-start"
        position="relative"
        width="100%"
      >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Button
            disabled={!methods.formState.isValid}
            role="button"
            size="sm"
            style={{ position: "absolute", top: "0px", right: "0px" }}
            type="submit"
          >
            제출하기
          </Button>
        </form>
      </Flex>
    </FormProvider>
  );
};

export default CreateStudyDetailInfoPage;
