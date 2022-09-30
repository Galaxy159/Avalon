export default function Character(props) {
  const { details } = props;

  return (
    <>
      <div className="characterInfo">
        <div>{details.name}</div>
        <img width="100" src={details.image} alt={details.name} />
        <div>{details.description}</div>
      </div>
    </>
  );
}
