interface TextProps {
  paragraph: string;
}
const Text = ({ paragraph }: TextProps) => {
  return (
    <div>
      <p>{paragraph}</p>
    </div>
  );
};
export default Text;
