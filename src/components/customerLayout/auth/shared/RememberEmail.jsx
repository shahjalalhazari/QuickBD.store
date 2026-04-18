const RememberEmail = ({ state, updateState }) => {
  const { rememberMe } = state;

  return (
    <div className="checkbox-field">
      <input
        type="checkbox"
        name="rememberEmail"
        id="rememberEmail"
        className="remember-checkbox uren-transition"
        checked={rememberMe}
        onChange={(e) => updateState({ rememberMe: e.target.checked })}
      />
      <label htmlFor="rememberEmail" className="cursor-pointer">Remember Me</label>
    </div>
  );
};

export default RememberEmail;