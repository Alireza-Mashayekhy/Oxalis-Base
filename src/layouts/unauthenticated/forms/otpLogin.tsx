import { useState, useMemo, useEffect, InputHTMLAttributes } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ButtonType } from '@/components/Button';
import { Form, Formik } from 'formik';
import yup from '@/utils/yup';
import { AppDispatch, SFC } from '@/types';
import * as S from './OtpStyles';
import logowhite from '@/assets/logoWhite.png';
import { toast } from 'react-toastify';
import { colors } from '@/styles';
import PersonIcon from '@mui/icons-material/Person';
import { InputOtp, InputOtpProps } from 'primereact/inputotp';
import { sendOtp, submitOtp } from '@/api/authentication';

interface CustomInputProps extends InputOtpProps {
    events: React.HTMLAttributes<HTMLInputElement>;
    props: React.HTMLAttributes<HTMLInputElement>;
}
const Login: SFC = () => {
    const [step, setStep] = useState(1);
    const [otp, setOtp] = useState('');
    const [phone, setPhone] = useState('');
    const [timer, setTimer] = useState(120);
    const [hasError, setHasError] = useState(false);
    const [otpSubmitting, setOtpSubmitting] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const initialValues = {
        phone: '',
    };

    type FormValues = typeof initialValues;

    const handleSubmit = async (values: FormValues): Promise<void> => {
        try {
            await sendOtp(values);
            toast.success('کد تایید با موفقیت ارسال شد.', {
                autoClose: 500,
                style: { backgroundColor: colors.palette.blue[400] },
            });
            setStep(2);
            setTimer(120);
            setTimeout(() => {
                const input = document.querySelector('input');
                input.focus();
            }, 100);
        } catch (error) {
            {
                error.response?.status === 400 &&
                    toast.error('شماره تلفن اشتباه است');
            }
        }
    };
    const validationSchema = useMemo(() => {
        return yup.object().shape({
            phone: yup
                .string()
                .required('شماره تلفن خود را وارد کنید')
                .min(11, 'شماره موبایل نامعتبر است')
                .max(11, 'شماره موبایل نامعتبر است'),
        });
    }, []);

    const handleSubmitOtp = async (code): Promise<void> => {
        try {
            setOtpSubmitting(true);
            const data = {
                code: code || otp,
                phone: phone,
            };
            const res = await submitOtp(data);
            localStorage.setItem('accessToken', res.access);
            localStorage.setItem('refreshToken', res.refresh);
            const redirectPath = localStorage.getItem('redirectPath') || '/';
            localStorage.removeItem('redirectPath');
            navigate(redirectPath);
            setOtpSubmitting(false);
        } catch (error) {
            setOtpSubmitting(false);
            setHasError(true);
        }
    };

    useEffect(() => {
        if (step === 2 && timer > 0) {
            const countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            return () => clearInterval(countdown);
        }
    }, [step, timer]);

    const handleResendOtp = async () => {
        if (timer === 0) {
            await handleSubmit({ phone });
            setTimer(120);
        }
    };
    const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

    const customInput = ({ events, props }: CustomInputProps) =>
        hasError ? (
            <input
                {...events}
                {...props}
                type="text"
                className="error-prime-otp-input"
            />
        ) : (
            <input
                {...events}
                {...props}
                type="text"
                className="prime-otp-input"
            />
        );

    return (
        <>
            <S.Background>
                <S.Container>
                    <S.FormContainer>
                        <S.HeaderForm>
                            <S.Logo src={logowhite} />
                            {/* <S.Heading>اُکسالیس</S.Heading> */}
                        </S.HeaderForm>

                        {step === 1 ? (
                            <Formik
                                initialValues={initialValues}
                                onSubmit={handleSubmit}
                                validationSchema={validationSchema}
                                resetForm={true}
                                enableReinitialize={true}
                            >
                                {({
                                    dirty,
                                    errors,
                                    isSubmitting,
                                    touched,
                                    isValid,
                                    setFieldValue,
                                }) => (
                                    <Form>
                                        <S.InputContainer>
                                            <PersonIcon className="absolute !right-[20px] !fill-white top-1/2 -translate-y-1/2" />
                                            <S.Input
                                                // errors={errors}
                                                // label="شماره تلفن"
                                                placeholder="شماره همراه خود را وارد نمایید"
                                                autoFocus
                                                name="phone"
                                                // touched={touched}
                                                onChange={(e) => {
                                                    const value =
                                                        e.target.value.replace(
                                                            /\D/g,
                                                            ''
                                                        );
                                                    setFieldValue(
                                                        'phone',
                                                        value
                                                    );
                                                    setPhone(value);
                                                }}
                                            />
                                        </S.InputContainer>
                                        <S.Button
                                            dirty={dirty}
                                            disabled={isSubmitting}
                                            isSubmitting={isSubmitting}
                                            isValid={isValid}
                                            text="دریافت رمز یکبار مصرف"
                                            type={ButtonType.submit}
                                            borderRadius="10px"
                                        />
                                    </Form>
                                )}
                            </Formik>
                        ) : (
                            <Formik
                                initialValues={initialValues}
                                onSubmit={handleSubmitOtp}
                                resetForm={true}
                                enableReinitialize={true}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <S.InputContainer>
                                            <InputOtp
                                                id="primeInputOtp"
                                                value={otp}
                                                inputTemplate={customInput}
                                                onChange={(e) => {
                                                    setHasError(false);
                                                    const value =
                                                        e.value.toString();
                                                    setOtp(value);

                                                    const target = e
                                                        .originalEvent
                                                        .target as HTMLElement;
                                                    if (
                                                        target.id === '4' &&
                                                        value.length === 5
                                                    ) {
                                                        handleSubmitOtp(
                                                            e.value
                                                        );
                                                    }
                                                }}
                                                integerOnly
                                                name="otp"
                                                length={5}
                                            />
                                        </S.InputContainer>
                                        {hasError ? (
                                            <S.ErrorButton
                                                isValid={true}
                                                text="کد وارد شده اشتباه است"
                                                borderRadius="10px"
                                            />
                                        ) : (
                                            <S.Button
                                                dirty={true}
                                                disabled={otp.length !== 5}
                                                isSubmitting={otpSubmitting}
                                                isValid={true}
                                                text="ورود"
                                                type={ButtonType.submit}
                                                borderRadius="10px"
                                            />
                                        )}
                                        <div className="flex justify-between items-center mt-5">
                                            <div
                                                onClick={handleResendOtp}
                                                className={`text-white cursor-pointer ${timer !== 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            >
                                                ارسال مجدد
                                            </div>
                                            <div className="text-white">
                                                {formatTime(
                                                    Math.floor(timer / 60)
                                                )}
                                                :{formatTime(timer % 60)}
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center mt-5">
                                            <div
                                                onClick={() => {
                                                    setStep(1), setOtp('');
                                                }}
                                                className="text-white cursor-pointer "
                                            >
                                                ویرایش شماره تلفن
                                            </div>
                                            <div className="text-white">
                                                {phone}
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        )}
                    </S.FormContainer>
                </S.Container>
            </S.Background>
        </>
    );
};

export default Login;
