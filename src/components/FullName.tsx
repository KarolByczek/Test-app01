export const FullName = () => {
    const fullName: string = "Karol Byczek";
    return (
      <div className="container">
        <span className="text">Full name: </span>
        {fullName}.
      </div>
    );
  };