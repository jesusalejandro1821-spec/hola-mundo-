interface BottonProps {
  addLike: () => void;
}
const Botton = ({ addLike }: BottonProps) => {
  return (
    <div>
      <button type="button" className="btn btn-secondary" onClick={addLike}>
        Me gusta
      </button>
    </div>
  );
};
export default Botton;
