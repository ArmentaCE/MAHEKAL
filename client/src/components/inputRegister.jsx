export default function InputRegister(props) {
  return (
    <>
      <span>{props.place}</span>
      <input
        // placeholder={props.place}
        // name={props.name}
        className={props.style}
        type={props.type}
        {...props.format}
      />
    </>
  );
}
