import React,{useEffect} from 'react';

import '../css/main.css';

const MainPage = ({history}) => {

    useEffect(()=>{
        alert('도연이의 졸업을 누구보다 축하해주고 싶은 아름이와 민정이가 준비한 서프라이즈 선물이야 도연아 맘껏즐겨 사랑해💖')
    },[])

    const goMemoryPage = () =>{
        console.log('클릭 이벤트 확인')
        let answer = prompt('해당 메뉴를 이용하기 위해서는 비밀번호가 필요합니다 맞춰보세요~ 힌트는 우리가 도연이에게 전하고 싶은 말')
        if(answer === '도연아사랑해' || answer ==='도연아졸업축하해'){
            alert('도연이가 맞구나!')
            history.push('/weLoveYou')
        } else {
            alert('당신은 도연이가 아닙니다. 어떻게 비밀번호를 모를 수 있죠?')
        }
    }
    return (
        <div style={{backgroundColor:"#5B9BD5",width:"100%",height:""}}>
            <div style={{backgroundColor:"#5B9BD5",width:"100%",height:"70px",margin:"auto"}}>
            </div>
            <div className="title">
                <p>벌써 졸업이라니!!!! <br/>우리 마음 알지 졸업 축하해^^👩🏻‍🎓🎉
                </p>
            </div>

            <div className="menu-warp">
                <div onClick={goMemoryPage} className="menu first" >메뉴1</div>
                <div className="menu second">메뉴2</div>
                <div className="menu third">메뉴3</div>
            </div>

            <div className="footer">
                dev ahkong
            </div>

        </div>
    )
}

export default MainPage;