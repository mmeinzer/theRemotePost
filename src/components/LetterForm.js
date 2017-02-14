import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button,
  Radio
} from 'react-bootstrap';
import SenderInfo from './SenderInfo'

class LetterForm extends React.Component {
  updateOrder(event) {
    const order = {
      rName: this.rName.value,
      rAddress1: this.rAddress1.value,
      rAddress2: this.rAddress2.value,
      rCity: this.rCity.value,
      rState: this.rState.value,
      rZip: this.rZip.value,
      sMessage: this.sMessage.value,
      sEmail: this.sEmail.value,
      isAnon: this.anon.checked
    }
    this.props.saveOrder(order)
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <form className="order-info"
        onSubmit={(e) => this.handleSubmit(e)}
        onChange={(e) => this.updateOrder(e)}>
        <FieldGroup
          id="rName"
          type="text"
          label="Name"
          placeholder="Enter recipient's name"
          inputRef={ref => { this.rName = ref; }} />
        <FieldGroup
          id="rAddress1"
          type="text"
          label="Address Line 1"
          placeholder="Enter recipient's address"
          help="Street address, P.O. box, company name, c/o"
          inputRef={ref => { this.rAddress1 = ref; }} />
        <FieldGroup
          id="rAddress2"
          type="text"
          label="Address Line 2"
          placeholder="Enter recipient's address"
          help="Apartment, suite , unit, building, floor, etc."
          inputRef={ref => { this.rAddress2 = ref; }} />
        <FieldGroup
          id="rCity"
          type="text"
          label="City"
          placeholder="Enter recipient's city or town"
          inputRef={ref => { this.rCity = ref; }} />

        <FormGroup controlId="rState">
          <ControlLabel>State</ControlLabel>
          <StateOptions inputRef={ref => { this.rState = ref; }} />
        </FormGroup>

        <FieldGroup
          id="rZip"
          type="text"
          label="Zip Code"
          placeholder="Enter recipient's zip code"
          inputRef={ref => { this.rZip = ref; }} />

        <FormGroup controlId="sMessage">
          <ControlLabel>Message</ControlLabel>
          <FormControl componentClass="textarea"
            placeholder="Enter your message here"
            style={{ height: 200 }}
            inputRef={ref => { this.sMessage = ref; }} />
        </FormGroup>

        <FieldGroup
          id="sEmail"
          type="email"
          label="Email address"
          placeholder="Enter your email"
          inputRef={ref => { this.sEmail = ref; }} />

        <FormGroup>
          <ControlLabel>Send anonymously?</ControlLabel>
          <br />
          <Radio name="anonOption" inline defaultChecked>
            No
          </Radio>
          <Radio name="anonOption" inputRef={ref => { this.anon = ref; }} inline>
            Yes
          </Radio>
        </FormGroup>

        <SenderInfo isAnon={this.props.order.isAnon} context={this}/>
        
        <FormGroup>
          <Button type="submit">
            Continue
          </Button>
        </FormGroup>
      </form>
    );
  }
}

function FieldGroup({ id, label, help, inputRef, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} inputRef={inputRef} /> {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

function StateOptions({inputRef}) {
  const stateHash = {
    "": "",
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
  }

  const stateOptions = Object
    .keys(stateHash)
    .map((state) => state)
    .map((state) => <option key={state} value={state}>{state}</option>);

  return (
    <FormControl componentClass="select" placeholder="select" inputRef={inputRef}>
      {stateOptions}
    </FormControl>
  );
}

export default LetterForm