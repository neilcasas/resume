export const General = () => {
  return (
    <section className="editor-input" id="general-input">
      <h1>Personal Details</h1>
      <section className="input-group">
        <div className="name-input">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="email-input">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
        </div>
        <div className="phone-input">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" name="phone" />
        </div>
        <div className="address-input">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" />
        </div>
      </section>
    </section>
  );
};
