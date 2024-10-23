import { SelectChangeEvent, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { colors } from "@/styles";
import * as S from "./Styles";
import { Form, Formik } from "formik";
import yup from "@/utils/yup";
import { ButtonType } from "@/components/Button";
import { Select } from "@/components/FormElements";
import { SFC } from "@/types";

interface User {
  userName: string;
  userType: string;
}

const userType = [
  { value: "admin", displayName: "ادمین" },
  { value: "reqular", displayName: "کاربر عادی" },
  { value: "operator", displayName: "اپراتور" },
];

interface CreateUserPannelInterface {
  isResponsive?: boolean;
  handleAccordionCloseInResponsiveMode?: () => void;
}

const CreateUser: SFC<CreateUserPannelInterface> = ({
  isResponsive,
  handleAccordionCloseInResponsiveMode,
}) => {
  const [user, setUser] = useState<User>({ userName: "", userType: "admin" });

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const { name, value } = event.target as HTMLInputElement;
    setUser({ ...user, [name]: value });
  };
  const initialValues = {
    userName: "",
    userType: "admin",
  };

  type FormValues = typeof initialValues;

  const handleSubmit = async (values: FormValues): Promise<void> => {
    if (isResponsive) {
      handleAccordionCloseInResponsiveMode();
    }
  };
  const validationSchema = useMemo(() => {
    return yup.object().shape({
      userName: yup.string().required("وارد کردن نام کاربری اجباری است"),
    });
  }, []);
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ dirty, errors, isSubmitting, touched, isValid }) => (
          <Form>
            <S.Container>
              <S.Input
                errors={errors}
                label="نام کاربری"
                name="userName"
                touched={touched}
              />
              <Select
                errors={errors}
                touched={touched}
                label="نوع کاربر"
                name="userType"
                options={userType}
              />

              <S.Button
                dirty={dirty}
                disabled={isSubmitting}
                isSubmitting={isSubmitting}
                isValid={isValid}
                text="ثبت کاربر"
                type={ButtonType.submit}
                borderRadius="5px"
                backgroundColor={colors.selectBlueColor}
              />
            </S.Container>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateUser;
