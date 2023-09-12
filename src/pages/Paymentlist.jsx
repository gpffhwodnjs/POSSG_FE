import axios from "axios";
import { useEffect, useState } from "react";

function Paymentlist()  {
  
  const [paymentlist, setPaymentlist] = useState([]);


  useEffect(() => {
    axios.get('http://10.10.10.36:3000/paymentlist', { params: { convSeq: 1 } })
        .then((response) => {
            setPaymentlist(response.data);
            console.log('결제내역 불러오기 성공');
        })
        .catch((error) => {
            console.log('결제내역 불러오기 실패:', error);
        });
    }, []);
  
  
    return (
        <div className="paymentlist">
            <div className="paymentlist-container">
                <div className="paymentlist-menu">
                    <div className="paymentlist-title page-title">
                        결제 내역
                    </div>
                    <div className="paymentlist-search">
                        <input className="paymentlist-search-input" type="text" placeholder="카드번호 앞 6자리"></input>
                        <button className="paymentlist-search-btn">조회</button>
                    </div>
                    <div className="paymentlist-content">
                    {paymentlist.map((payment, index) => (
                        <div key={index} className="paymentlist-content-row">
                            <div className="paymentlist-content-method">{ payment.method }</div>
                            <div className="paymentlist-content-row-info">
                                <div className="paymentlist-content-price">{ payment.price }원</div>
                                <div className="paymentlist-content-date">{ payment.purchasedAt }</div>
                                
                            </div>
                        </div>
                        ))}
                    </div>
                </div>


                <div className="paymentlist-information">
                    <div className="paymentlist-information-header">
                        <div className="paymentlist-information-header-del">결제 완료</div>
                        <div className="paymentlist-information-header-date">2021-09-01 19:35</div>
                        <div className="paymentlist-information-header-price">총 결제 금액 : </div>
                    </div>

                    <div className="paymentlist-information-body">
                        <div className="paymentlist-information-body-price">합계 : </div>
                        
                        <button className="paymentlist-information-body-btn">환불</button>
                        <button className="paymentlist-information-body-btn">영수증 보기</button>
                        
                    </div>
                    <div className="paymentlist-information-body-method">결제 수단 : 카드</div>
                </div>

            </div>
            {/* <h1>Paymentlist</h1>
            <ul>
                {paymentlist.map((payment, index) => (
                    <li key={index}>
                        <div>고객 번호: {payment.customerSeq}</div>
                        <div>고객 이름: {payment.customerName}</div>
                        <div>지점명: {payment.branchName}</div>
                        <div>대표자명: {payment.representativeName}</div>
                        <div>영수증 ID: {payment.receiptId}</div>
                        <div>PG: {payment.pg}</div>
                        <div>결제 방법: {payment.method}</div>
                        <div>가격: {payment.price}</div>
                        <div>구매 시간: {payment.purchasedAt}</div>
                        <div>카드 회사: {payment.cardCompany}</div>
                        <div>카드 번호: {payment.cardNum}</div>
                        <div>상태: {payment.del}</div>
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default Paymentlist;