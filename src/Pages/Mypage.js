import './mypage.css';
import { useSelector } from 'react-redux';

export default function Mypage() {
  const state = useSelector((state) => {return state})

  return (
    <section className="page_mypage">
      <h2>{state.user.name} <span style={{fontSize: '15px'}}>님</span></h2>
      <p>회원가입 기간 {state.user.memberYear}년 입니다.</p>
      <p style={{display: 'inline-block', marginRight: 20}}>{state.user.gender}</p>
      <p style={{display: 'inline-block'}}>{state.user.age}</p>
    </section>
  )
}