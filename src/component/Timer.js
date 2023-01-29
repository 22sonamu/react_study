import React, {useEffect} from 'react';


const Timer = (props) => {

    useEffect(() => {
        //log를 1초마다 한번씩 보낸다.
        const timer = setInterval(() => {
            console.log("타이머 돌아가는중....");
        }, 1000);

        //HTML 에서 언마운트 되면 타이머 돌아가던걸 정리
        return () => {
            clearInterval(timer);
            console.log("타이머가 종료되었습니다.")
        }
    }, []);

    return(
        <div>
            <span>타이머를 시작합니다. 콘솔을 보세요!</span>
        </div>
    )
}

export default Timer;