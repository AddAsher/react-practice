export default function TabButton({children}) {
  function handleClick() {
    console.log(`You clicked on the ${children} tab!`);
  }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
}
