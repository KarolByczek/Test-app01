export const Wishes = () => {
  const wishes: string[] = [
    "May your nose be forever larger than average!",
    "May your car always look like a freaking cucumber!",
    "May the weeds in your garden faint at the sight of you!",
    "May your neighbour keep out of your private business!",
    "May your cow produce milk with a lovely pinkish hue (not from its blood)!"
  ];
  const randomWish = wishes[Math.floor(Math.random()*5)]
    
  return (
    <div className="wishes">
        <p>
            `{randomWish}`
        </p>
    </div>
  )
};
