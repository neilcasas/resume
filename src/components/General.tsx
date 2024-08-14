import InputComponent from "./InputComponent";

function General() {
  return (
    <div className="card">
      <h1>Personal Details</h1>
      <InputComponent
        title="Full Name"
        id="name"
        type="text"
        placeholder="e.g. LeBron James"
      />
      <InputComponent
        title="Email"
        id="email"
        type="email"
        placeholder="e.g. yourname@email.com"
      />
      <InputComponent
        title="Phone number"
        id="phone"
        type="text"
        placeholder="e.g. +63 917 508 1259"
      />
      <InputComponent
        title="Address"
        id="address"
        type="text"
        placeholder="e.g. Manila, Philippines"
      />
    </div>
  );
}

export default General;
