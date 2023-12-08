import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm("xeqbykqb");
  if (state.succeeded) {
    return <p>Thank you!</p>;

  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Customer Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        required
      />
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
      />

      <label htmlFor="address">
        Address
      </label>
      <input
        id="address"
        type="text"
        name="address"
        required
      />
      <ValidationError
        prefix="Address"
        field="address"
        errors={state.errors}
      />

      <label htmlFor="city">
        City
      </label>
      <input
        id="city"
        type="text"
        name="city"
        required
      />
      <ValidationError
        prefix="City"
        field="city"
        errors={state.errors}
      />

      <label htmlFor="state">
        State
      </label>
      <input
        id="state"
        type="text"
        name="state"
        required
      />
      <ValidationError
        prefix="State"
        field="state"
        errors={state.errors}
      />

      <label htmlFor="zip">
        Zip Code
      </label>
      <input
        id="zip"
        type="text"
        name="zip"
        required
      />
      <ValidationError
        prefix="Zip Code"
        field="zip"
        errors={state.errors}
      />

      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <label htmlFor="description">
        Description (max 255 characters)
      </label>
      <textarea
        id="description"
        name="description"
        maxLength="255"
        required
      />
      <ValidationError
        prefix="Description"
        field="description"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default Form;
