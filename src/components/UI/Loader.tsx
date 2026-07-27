type LoaderProps = {
  size?: number;
};

const Loader = ({ size = 40 }: LoaderProps) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"
        style={{
          width: size,
          height: size,
        }}
      />
    </div>
  );
};

export default Loader;
