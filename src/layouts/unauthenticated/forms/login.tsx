import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { Form, Formik, FormikHelpers } from 'formik';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { login } from '@/api/authentication';
import logowhite from '@/assets/logoWhite.png';
import { ButtonType } from '@/components/Button';
import { SFC } from '@/types';
import yup from '@/utils/yup';

import * as S from './Styles';

const Login: SFC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Get dispatch from react-redux

    const initialValues = {
        username: '',
        password: '',
        rememberMe: false,
    };

    const handleSubmit = async (
        values: { username: string; password: string; rememberMe: boolean },
        formikHelpers: FormikHelpers<{
            username: string;
            password: string;
            rememberMe: boolean;
        }>
    ) => {
        try {
            const res = await login({
                username: values.username,
                password: values.password,
            });
            if (values.rememberMe) {
                localStorage.setItem('accessToken', res.access);
                localStorage.setItem('refreshToken', res.refresh);
            } else {
                sessionStorage.setItem('accessToken', res.access);
                sessionStorage.setItem('refreshToken', res.refresh);
            }

            formikHelpers.resetForm();
            //toast.success('خوش آمدید.');

            window.dispatchEvent(new Event('storage')); // این رویداد ساختگی storage برای تریگر شدن اثرات استفاده می‌شود

            navigate('/home');
        } catch (error) {
            if (error.response.status === 401) {
                toast.error('نام کاربری یا رمز عبور اشتباه است.');
            } else {
                toast.error(
                    'مشکلی در ورود به وجود آمده است. لطفا مجدداً تلاش کنید.'
                );
            }
        }
    };

    const validationSchema = useMemo(() => {
        return yup.object().shape({
            username: yup.string().required('نام کاربری خود را وارد کنید'),
            password: yup.string().required('رمز عبور خود را وارد کنید'),
        });
    }, []);

    return (
        <>
            <S.Background>
                <S.Container>
                    <S.FormContainer>
                        <S.HeaderForm>
                            <S.Logo src={logowhite} />
                            {/* <S.Heading>اُکسالیس</S.Heading> */}
                        </S.HeaderForm>

                        <Formik
                            initialValues={initialValues}
                            onSubmit={handleSubmit} // No need to pass dispatch here
                            validationSchema={validationSchema}
                            resetForm={true}
                            enableReinitialize={true}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                dirty,
                                isValid,
                            }) => (
                                <Form>
                                    <S.InputContainer>
                                        <PersonIcon className="absolute !right-[20px] !fill-white top-1/2 -translate-y-1/2" />
                                        <S.Input
                                            placeholder="نام کاربری"
                                            name="username"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.username}
                                        />
                                        <div className="text-xs mt-1 text-right px-5 text-red-500">
                                            {errors.username &&
                                                touched.username &&
                                                errors.username}
                                        </div>
                                    </S.InputContainer>
                                    <S.InputContainer>
                                        <LockIcon className="absolute !right-[20px] !fill-white top-1/2 -translate-y-1/2" />
                                        <S.Input
                                            placeholder="رمز عبور"
                                            name="password"
                                            type="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                        <div className="text-xs mt-1 text-right px-5 text-red-500">
                                            {errors.password &&
                                                touched.password &&
                                                errors.password}
                                        </div>
                                    </S.InputContainer>
                                    <S.CheckboxContainer>
                                        <S.Checkbox
                                            type="checkbox"
                                            id="rememberMe"
                                            name="rememberMe"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            checked={values.rememberMe}
                                        />
                                        <label htmlFor="rememberMe">
                                            مرا به خاطر بسپار
                                        </label>
                                    </S.CheckboxContainer>
                                    <S.Button
                                        dirty={dirty}
                                        disabled={isSubmitting}
                                        isSubmitting={isSubmitting}
                                        isValid={isValid}
                                        text="ورود"
                                        type={ButtonType.submit}
                                        borderRadius="10px"
                                    />
                                </Form>
                            )}
                        </Formik>
                    </S.FormContainer>
                </S.Container>
            </S.Background>
        </>
    );
};

export default Login;
