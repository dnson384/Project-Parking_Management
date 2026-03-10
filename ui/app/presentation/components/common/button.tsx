interface ButtonProps {
  type?: "button" | "submit" | "reset";
  classname?: string;
  variant?: string;
  content: string;
  size?: string;
}

function Button({
  type = "button",
  classname = "text-sm font-medium",
  variant = "",
  content = "",
  size = "px-4 py-2",
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`flex items-center justify-center rounded-md transition-all disabled:pointer-events-none disabled:opacity-50 ${classname} ${variant} ${size}`}
    >
      {content}
    </button>
  );
}

export { Button };
