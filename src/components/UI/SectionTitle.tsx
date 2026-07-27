type SectionTitleProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

const SectionTitle = ({
  title,
  subtitle,
  center = false,
}: SectionTitleProps) => {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-3xl font-bold">{title}</h2>

      {subtitle && (
        <p className="mt-3 text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;