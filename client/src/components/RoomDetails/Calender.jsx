import { DateRange } from 'react-date-range';


const Calender = ({ value }) => {
    return (  
            <DateRange
            rangeColors={['#F43F5E']}
            ranges={[value]}
            // onChange={handleSelect}
            // date={value.startDate}
            direction='vertical'
            showDateDisplay={false}
            // minDate={value.startDate}
            // maxDate={value.endDate}
            ></DateRange>  
    );
};

export default Calender;