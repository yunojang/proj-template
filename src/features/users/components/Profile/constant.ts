import { choice } from "@/utils/random";

export const INTRO_MSG = [
    "반갑습니다. 아직, 개발기간이에요",
    // '"채팅하기"를 누르면, 채팅 매칭을 시작할 수 있어요',
    // '"설정"에서는 어떤 채팅으로 시작할지 정할 수 있어요',
];

export const getRandomIntro = () => {
    return choice(INTRO_MSG);
};
