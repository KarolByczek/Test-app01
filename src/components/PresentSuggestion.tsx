export const PresentSuggestion = () => {
    const presentSuggestions: string[] = [
      "Nike sneakers",
      "teddybear",
      "a plant in a pot",
      "party costume",
      "iPhone 5000",
      "rollerblades",
    ];
    const suggestedPresentIndex: number = Math.floor(Math.random() * 5.9);
    const presentProposition: string = presentSuggestions[suggestedPresentIndex];
  
    return (
      <div className="container">
        <span className="text">You can buy her/him: </span>
        {presentProposition}.
      </div>
    );
  };