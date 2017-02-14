import React from 'react';
import {
  FormGroup,
  ControlLabel
} from 'react-bootstrap';
import {FieldGroup, StateOptions} from './FormHelpers'

class SenderInfo extends React.Component {
    render() {
        if (this.props.isAnon) {
            return <div className="SenderInfo"></div>
        }
        return (
            <div className="SenderInfo">
                <FieldGroup
                    id="sName"
                    type="text"
                    label="Name"
                    placeholder="Enter your name"
                    inputRef={ref => { this.sName = ref; }} />
                <FieldGroup
                    id="sAddress1"
                    type="text"
                    label="Address Line 1"
                    placeholder="Enter the return address"
                    help="Street address, P.O. box, company name, c/o"
                    inputRef={ref => { this.sAddress1 = ref; }} />
                <FieldGroup
                    id="sAddress2"
                    type="text"
                    label="Address Line 2"
                    placeholder="Enter the return address"
                    help="Apartment, suite , unit, building, floor, etc."
                    inputRef={ref => { this.sAddress2 = ref; }} />
                <FieldGroup
                    id="sCity"
                    type="text"
                    label="City"
                    placeholder="Enter the return address city or town"
                    inputRef={ref => { this.sCity = ref; }} />

                <FormGroup controlId="sState">
                    <ControlLabel>State</ControlLabel>
                    <StateOptions inputRef={ref => { this.sState = ref; }} />
                </FormGroup>

                <FieldGroup
                    id="sZip"
                    type="text"
                    label="Zip Code"
                    placeholder="Enter recipient's zip code"
                    inputRef={ref => { this.sZip = ref; }} />
            </div>
        )
    }
}

export default SenderInfo;

    //   sName: this.sName.value,
    //   sAddress1: this.sAddress1.value,
    //   sAddress2: this.sAddress2.value,
    //   sCity: this.sCity.value,
    //   sState: this.sState.value,
    //   sZip: this.sZip.value