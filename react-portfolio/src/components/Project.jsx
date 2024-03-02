
function Project ({ children, ...props }) {
    return (
        <li
          {...props}
        >
          {children}
        </li>
      );
}

export default Project;