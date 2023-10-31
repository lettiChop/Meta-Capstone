export default function Button({
  children,
  type = "primary" | "secondary",
  href,
}) {
  return (
    <a href={href} className={"btn btn--" + type}>
      {children}
    </a>
  );
}
