export const Birthday = () => {
    const rawDate: Date = new Date("1986-06-16");
    const birthDate: string = rawDate.toLocaleDateString();
    return (
      <div className="container">
        <span className="text">Birthday: </span>
        {birthDate}.
      </div>
    );
  };
  