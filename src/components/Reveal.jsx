import useReveal from "../hooks/useReveal";

/* Slow scroll reveal. Use delay={i * 200} to make items appear one by one. */
export default function Reveal({ as: Tag = "div", dir = "up", delay = 0, className = "", style, children, ...rest }) {
  const [ref, shown] = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${dir} ${shown ? "in" : ""} ${className}`} style={{ "--d": `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}
