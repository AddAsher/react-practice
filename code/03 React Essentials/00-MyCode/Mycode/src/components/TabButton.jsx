export default function TabButton({children, onSelect}) {
  // function handleClick() {
  //   console.log(`You clicked on the ${children} tab!`);
  // }

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
}
