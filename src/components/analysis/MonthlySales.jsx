import React from 'react';
import Calendar from './Calendar';

function MonthlySales(){
    return(
        <div className="daily-content-wrap">
            <div className="daily-nav">
                <div className="daily-title">월별 매출</div>
                <div className="daily-calendar-container">
                    <Calendar dateRange="monthly" />
                    <button className="calendar-button" type="button">조회</button>
                </div>
            </div>
        </div>
    )
}
export default MonthlySales;