export default function TabButton({children, onSelect, isSelected}) {
  // function handleClick() {
  //   console.log(`You clicked on the ${children} tab!`);
  // }

  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
}
