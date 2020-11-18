import React from "react";
import { v4 } from 'uuid'; // new code
import PropTypes from "prop-types";
import ReusableForm from "../ReusableCode/ReusableForm";

function NewTicketForm(props) {
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.issue.value);
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Help!" />
    </React.Fragment >
  );
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    // Id created below
    props.onNewTicketCreation({ names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4() });
  }
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;