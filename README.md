Behavior: When a user navigates to the ticket detail page, they should be able to click an edit button that takes them to an edit form.
Implementation:

We will need to add a slice of state to TicketControl to determine whether the EditTicketForm is showing or not. The default state will be editing: false.
We will need to add a method to TicketControl that will set editing to true. We will call this method handleEditClick.
Next, we will need to pass down handleEditClick to the TicketDetail component (and add a PropType).
Then we will add a button to TicketDetail that triggers the handleEditClick method. When the button is clicked, editing will be set to true.
We also have to add a conditional to render the EditTicketForm. We will need to pass the ticket to be edited as a prop down to EditTicketForm. Since we will already have a selectedTicket set to an actual ticket, we can just pass the selectedTicket as a prop.
Finally, we need to create our EditTicketForm. It will use the ReusableForm component we made in the last lesson.

Behavior: When a user fills out the edit form and clicks the edit button, the specified ticket should be edited in the queue.
Implementation:

We will need to add a method to TicketControl that will update a ticket. We will do so in TicketControl because that is where our state currently resides. We will call this method handleEditingTicketInList.
handleEditingTicketInList will update the state in the masterTicketList to reflect the edited ticket.
handleEditingTicketInList will also need to update selectedTicket to false because the ticket will be deleted - and we don't want the TicketDetail component showing.
handleEditingTicketInList also has to update editing to false so the EditTicketComponent doesn't show.
We will need to pass handleEditingTicketInList to our new EditTicketForm as a prop.
Next, we will need to add a button to EditTicketForm that will trigger a handleEditTicketFormSubmission function when clicked.
Finally, we will add a function called handleEditTicketFormSubmission which will capture values from the edit form and then trigger the handleEditingTicketInList method in the TicketControl component.