export const btnVariants = {
  variant: {
    destructive:
      "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
    outline:
      "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    link: "text-primary underline-offset-4 hover:underline",
    dark: "bg-black text-white hover:bg-neutral-800 transition-all cursor-pointer",
    default: "hover:bg-gray-100 cursor-pointer",
    light: "bg-white text-black hover:bg-gray-200 cursor-pointer",
  },
  size: {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md gap-1.5 px-3",
    lg: "h-10 rounded-md px-6",
    icon: "size-9 rounded-md",
  },
};