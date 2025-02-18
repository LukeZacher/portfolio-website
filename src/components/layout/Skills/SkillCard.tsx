interface SkillCardProps {
  name: string;
  icon: string;
}

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <div className="bg-primary hover:bg-primary-dark transition-colors duration-300 rounded-lg p-4 flex items-center gap-3">
      <img
        src={icon}
        alt={`${name} icon`}
        className="h-6 w-6 object-contain skill-icon"
      />
      <span className="text-neutral-50">{name}</span>
    </div>
  );
};

export default SkillCard;
