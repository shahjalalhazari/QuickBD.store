
const EmailInputField = ({state, updateState}) => {
  const { email, loading } = state;
  
  return (
    <div className="underline-input-group">
      <input
        type="email"
        name="email" id="signin-email"
        required
        placeholder=""
        value={email || ""}
        onChange={(e) => updateState({ email: e.target.value })}
        className="underline-input-field"
        disabled={loading}
      />
      <label htmlFor="email" className="underline-input-label">E-MAIL</label>
    </div>
  );
};

export default EmailInputField;