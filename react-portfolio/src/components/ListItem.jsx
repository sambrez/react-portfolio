export function ListItem({ children, ...props }) {
    return (
      <li
        {...props}
      >
        {children}
      </li>
    );
  }
  
  export default ListItem;