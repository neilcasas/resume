import { GeneralObject } from "./CV";
import InputComponent from "./InputComponent";

function General(props: GeneralObject) {
  return (
    <div className="card">
      <h1>Personal Details</h1>
      <InputComponent
        title="Full Name"
        id="name"
        type="text"
        placeholder="e.g. LeBron James"
        value={props.name}
      />
      <InputComponent
        title="Email"
        id="email"
        type="email"
        placeholder="e.g. yourname@email.com"
        value={props.email}
      />
      <InputComponent
        title="Phone number"
        id="phone"
        type="text"
        placeholder="e.g. +63 917 508 1259"
        value={props.number}
      />
      <InputComponent
        title="Address"
        id="address"
        type="text"
        placeholder="e.g. Manila, Philippines"
        value={props.location}
      />
    </div>
  );
}

export default General;
