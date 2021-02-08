import React, {useState} from 'react';
import Autocomplete from 'react-google-autocomplete';
import 'react-dates/initialize';
// import {SingleDatePicker, DayPickerRangeController } from 'react-dates';

export default function Search() {
    const [date, setDate] = useState(null)
    const [focused, setFocused] = useState(null)
    return (
        <div>
            <div>
            From:
            <Autocomplete
                style={{width: '50%'}}
                onPlaceSelected={(place) => {
                    console.log(place);
                }}
                types={['address']}
                componentRestrictions={{country: ['ca', 'us']}}
            />
            </div>
            <div>
            To:
            <Autocomplete
                style={{width: '50%'}}
                onPlaceSelected={(place) => {
                    console.log(place);
                }}
                types={['address']}
                componentRestrictions={{country: ['ca', 'us']}}
            />
            </div>
            {/* <div>
            <SingleDatePicker
                date={date} // momentPropTypes.momentObj or null
                onDateChange={date => setDate(date) } // PropTypes.func.isRequired
                focused={focused} // PropTypes.bool
                onFocusChange={({ focused }) => setFocused(focused) } // PropTypes.func.isRequired
                id="your_unique_id" // PropTypes.string.isRequired,
            />
            </div> */}
      </div>
    )
}