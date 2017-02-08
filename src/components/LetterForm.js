import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button
} from 'react-bootstrap';

const FieldGroup = ({
  id,
  label,
  help,
  ...props }) => (
  <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} /> {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>
);

class LetterForm extends React.Component {
  saveOrder(event) {
    event.preventDefault()
  }
  
  render() {
    return (
      <form className="order-info" onSubmit={(e) => this.saveOrder(e)}>
        <FieldGroup
          id="rName"
          type="text"
          label="Full Name"
          placeholder="Enter recipient's name" />
        <FieldGroup
          id="rAddress1"
          type="text"
          label="Address Line 1"
          placeholder="Enter recipient's address"
          help="Street address, P.O. box, company name, c/o" />
        <FieldGroup
          id="rAddress2"
          type="text"
          label="Address Line 2"
          placeholder="Enter recipient's address"
          help="Apartment, suite , unit, building, floor, etc." />
        <FieldGroup
          id="rCity"
          type="text"
          label="City"
          placeholder="Enter recipient's city or town" />

        <FormGroup controlId="rState">
          <ControlLabel>State</ControlLabel>
          <StateOptions />
        </FormGroup>

        <FieldGroup
          id="rZip"
          type="text"
          label="Zip Code"
          placeholder="Enter recipient's zip code" />

        <FormGroup controlId="Message">
          <ControlLabel>Message</ControlLabel>
          <FormControl componentClass="textarea" placeholder="Enter your message here" />
        </FormGroup>

        <FieldGroup
          id="sEmail"
          type="email"
          label="Email address"
          placeholder="Enter your email" />

        <Button type="submit">
          Continue
    </Button>
      </form>
    );
  }
}

function StateOptions() {
  const stateHash = {
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
    .map((state) => <option value={state}>{state}</option>);

  return (
    <FormControl componentClass="select" placeholder="select">{stateOptions}</FormControl>
  );
}

export default LetterForm