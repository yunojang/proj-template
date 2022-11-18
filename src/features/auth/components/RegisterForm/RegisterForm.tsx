import { useState, useCallback } from "react";
import { useAuth } from "../../api";

import { Button, Input, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Gender } from "../../types"

export interface RegisterFormProps {
    onSuccess(): void;
}

export const REGISTER_INVALIDE_MSG = {
    email: "Invalid email, please include '@' sign",
    password: "Invalid password, password is longer than 5 characters",
};

const GENDER = {
    female: 'female'  as Gender,
    male: 'male' as Gender,
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
    const { register } = useAuth();

    // 회원가입 진행 1, 2 TODO: state명은 생각해볼 것
    const [isRequired, setIsRequired] = useState(true)

    // email temp validate
    const [email, setEmail] = useState("");
    const validateEmail = useCallback(
        (email: string) => email.includes("@"),
        []
    );

    const [password, setPassword] = useState("");
    const [gender, setGender] = useState(GENDER.female);
    const [age, setAge] = useState(0);

    const [alert, setAlert] = useState<string | null>(null);
    const hideAlert = () => setAlert(null);

    const onChange = (e: any, type: string) => {
        const {
            target: { value }
        } = e

        const onlyNumber = value.replace(/[^-0-9]/g,'');

        if (type === 'gender') {
            setGender(value)
        } else if (type === 'age') {
            setAge(+onlyNumber)
        }
    }

    const onChangeIsRequired = () => {
        setIsRequired(!isRequired)
    };

    const onSubmit = async () => {
        if (!validateEmail(email)) {
            setAlert(REGISTER_INVALIDE_MSG.email);
            return;
        }

        const user = await register({ email, password, gender, age });

        if (user) {
            onSuccess();
            setEmail('');
            setPassword('');
            setGender(GENDER.female);
            setAge(0)
        }
    };
    
    return (
        <>
            {
                isRequired ? (
                    <div
                        className="flex flex-col gap-2 justify-center"
                        onChange={() => hideAlert()}
                    >
                        <div>
                            <div className="flex">
                                <Text>Email</Text>
                                <Text size="sm" color="tomato">*</Text>
                            </div>
                            <Input
                                aria-label="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                size="sm"
                                width={280}
                            />
                        </div>
                        <div>
                            <div className="flex">
                                <Text>Password</Text>
                                <Text size="sm" color="tomato">*</Text>
                            </div>
                            <Input
                                aria-label="password"
                                size="sm"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Button
                            className="w-full"
                            colorScheme="green"
                            onClick={onChangeIsRequired}
                        >
                            Next
                        </Button>
                    </div>
                ) : (
                    <div
                        className="flex flex-col gap-2 justify-center"
                        onChange={() => hideAlert()}
                    >
                        <Text>Gender</Text>
                        <RadioGroup  value={gender}>
                            <Stack direction='row'>
                                <Radio 
                                    value={GENDER.female}
                                    onChange={e => onChange(e, 'gender')}
                                >
                                    여성
                                </Radio>
                                <Radio 
                                    value={GENDER.male}
                                    onChange={e => onChange(e, 'gender')}
                                >
                                    남성
                                </Radio>
                            </Stack>
                        </RadioGroup>
                        <div>
                            <Text>Age</Text>
                            <Input
                                aria-label="Age"
                                size="sm"
                                width={280}
                                value={age}
                                onChange={e => onChange(e, 'age')}
                            />
                        </div>
                        <Button
                            className="w-full"
                            colorScheme="green"
                            onClick={onChangeIsRequired}
                        >
                            Prev
                        </Button>
                        <Button
                            className="w-full"
                            colorScheme="blue"
                            onClick={onSubmit}
                        >
                            Register
                        </Button>
                    </div>
                )
            }
            {alert && <div role="alert">{alert}</div>}
            <Link to="/auth/login" className="underline">
                Login
            </Link>
        </>
    );
};
