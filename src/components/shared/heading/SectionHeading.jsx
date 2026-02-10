const SectionHeading = ({text, customClass=""}) => {
  return (
    <h2 className={`section-heading ${customClass}`}>
      {text.split("|").map((line, i) => (
        <span key={i} className="block">
          {line.trim()}
        </span>
      ))}
    </h2>
  );
};

export default SectionHeading;