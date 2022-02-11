import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DayRange, Calendar } from 'react-modern-calendar-datepicker';
import { FilterCalendarType } from './types';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import './FilterCalendar.scss';

export default function FilterCalendar({ className, onChange }: FilterCalendarType) {
    const [dayRange, setDayRange] = React.useState<DayRange>({
        from: null,
        to: null,
    });

    return (
        <Row>
            <Col>
                <Calendar
                    calendarClassName={`calendar-filter ${className}`}
                    value={dayRange}
                    onChange={(value) => {
                        onChange(value);
                        setDayRange(value);
                    }}
                    colorPrimary="#38a9d3"
                    colorPrimaryLight="rgba(142, 235, 243, 0.25)"
                    calendarTodayClassName="calendar-filter-today"
                />
            </Col>
        </Row>
    );
}
